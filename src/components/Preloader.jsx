import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const nodes = [];
    // Number of nodes depends on screen size for performance
    const numNodes = width < 768 ? 70 : 150;
    const radius = Math.min(width, height) / 2.5;

    // Generate nodes evenly distributed on a sphere
    for (let i = 0; i < numNodes; i++) {
        const phi = Math.acos(-1 + (2 * i) / numNodes);
        const theta = Math.sqrt(numNodes * Math.PI) * phi;
        nodes.push({
            x: radius * Math.cos(theta) * Math.sin(phi),
            y: radius * Math.sin(theta) * Math.sin(phi),
            z: radius * Math.cos(phi),
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            vz: (Math.random() - 0.5) * 1.5
        });
    }

    let angleX = 0;
    let angleY = 0;
    let cameraZ = Math.max(500, radius * 2);

    let startTime = Date.now();
    const duration = 3800; // Slower progress bar to let the user appreciate the 3D network
    let isExploding = false;

    const render = () => {
        // Use semi-transparent fill for motion blur during the explosion!
        ctx.fillStyle = isExploding ? 'rgba(2, 2, 4, 0.5)' : 'rgba(2, 2, 4, 1)'; 
        ctx.fillRect(0, 0, width, height);

        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        let p = Math.min(elapsed / duration, 1);
        
        // Easing for progress bar state
        setProgress(Math.floor(p * 100));

        // Trigger explosion when progress hits 100%
        if (p >= 1 && !isExploding) {
            isExploding = true;
            setTimeout(() => {
                setIsReady(true); // Fading out wrapper container
                setTimeout(() => onComplete(), 800); // Remove from DOM after fade finishes
            }, 1200); // Slower, more cinematic warp flight duration
        }

        if (isExploding) {
            // Smoothly fly camera forward through the network
            cameraZ -= 15;
        }

        // Extremely slow and elegant rotation
        angleY += 0.0015;
        angleX += 0.0008;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        const projectedNodes = [];

        nodes.forEach(node => {
            // Jitter for a floating effect
            node.x += node.vx;
            node.y += node.vy;
            node.z += node.vz;
            
            // Keep constrained roughly inside original sphere
            const dist = Math.sqrt(node.x*node.x + node.y*node.y + node.z*node.z);
            if (dist > radius * 1.1) {
               node.vx *= -1;
               node.vy *= -1;
               node.vz *= -1;
            }

            // 3D Rotation Math
            // Rotate around X
            let y1 = node.y * cosX - node.z * sinX;
            let z1 = node.y * sinX + node.z * cosX;

            // Rotate around Y
            let x2 = node.x * cosY + z1 * sinY;
            let z2 = -node.x * sinY + z1 * cosY;
            let y2 = y1;

            // Calculate Scale & Projection
            const fov = Math.max(500, radius * 2); // Focal length
            const nz = z2 + cameraZ; // Distance from camera
            
            // Prevent division by zero and limit max size as objects pass the camera
            const maxScale = 50;
            const scale = nz > 1 ? Math.min((fov / nz), maxScale) : 0; 

            if (scale > 0) {
              const projX = (x2 * scale) + width / 2;
              const projY = (y2 * scale) + height / 2;

              projectedNodes.push({ x: projX, y: projY, scale, originalZ: z2 });
            }
        });

        // Draw connections (Webs)
        for (let i = 0; i < projectedNodes.length; i++) {
            for (let j = i + 1; j < projectedNodes.length; j++) {
                const nodeA = projectedNodes[i];
                const nodeB = projectedNodes[j];

                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const distanceSq = dx * dx + dy * dy;

                // Nodes connect if they are close on screen
                const connectDistance = 12000;

                if (distanceSq < connectDistance) {
                    const opacity = 1 - (distanceSq / connectDistance);
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.25})`; // cyan
                    ctx.lineWidth = 1 * (nodeA.scale + nodeB.scale) / 2;
                    ctx.stroke();
                }
            }
        }

        // Draw nodes (Stars/Neurons)
        projectedNodes.forEach(node => {
            const glowOpacity = Math.min((node.scale * 0.5), 1);
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2 * node.scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${glowOpacity})`;
            ctx.fill();
        });

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <div className={`canvas-preloader-container ${isReady ? 'fade-out' : ''}`}>
      <canvas ref={canvasRef} className="preloader-canvas" />
      
      {!isReady && (
        <div className="canvas-preloader-overlay animate-fade-in">
          <div className="loader-branding">
            <span className="loader-title">DARSHAN.DEV</span>
            <span className="loader-subtitle">Loading Interactive Network</span>
          </div>
          <div className="canvas-progress-container">
            <div className="canvas-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="canvas-progress-text">{progress}%</div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
