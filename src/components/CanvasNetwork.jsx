import React, { useEffect, useRef } from 'react';

const CanvasNetwork = () => {
  const canvasRef = useRef(null);

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
    const sparks = [];
    const numNodes = width < 768 ? 60 : 120; 
    
    // Spread the nodes across a massive invisible bounding box
    // This ensures particles reach the deep corners and it feels like a true background
    const spreadX = Math.max(width * 1.5, 1200);
    const spreadY = Math.max(height * 1.5, 900);
    const spreadZ = 1000;

    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: (Math.random() - 0.5) * spreadX,
            y: (Math.random() - 0.5) * spreadY,
            z: (Math.random() - 0.5) * spreadZ,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            vz: (Math.random() - 0.5) * 0.7
        });
    }

    let angleX = 0;
    let angleY = 0;
    const cameraZ = 800; // Pull camera back so the field looks wide and less zoomed

    let mouse = { x: null, y: null, radius: 200 };
    const handleMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        
        // Spawn sparks locally when moving rapidly
        if (Math.random() > 0.3) {
             sparks.push({ 
                 x: mouse.x + (Math.random() - 0.5) * 15, 
                 y: mouse.y + (Math.random() - 0.5) * 15, 
                 vx: (Math.random() - 0.5) * 3, 
                 vy: (Math.random() - 0.5) * 3, 
                 life: 1.0,
                 size: Math.random() * 2 + 1
             });
        }
    };
    
    // Clear mouse tracking when mouse leaves the window
    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };

    const render = () => {
        ctx.clearRect(0, 0, width, height);

        // Very slow, elegant rotation for a background
        angleY += 0.0008;
        angleX += 0.0004;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        const projectedNodes = [];

        nodes.forEach(node => {
            // Apply slight random movement
            node.x += node.vx;
            node.y += node.vy;
            node.z += node.vz;
            
            // Constrain particles to bounce softly inside the massive cube
            if (Math.abs(node.x) > spreadX / 1.8) node.vx *= -1;
            if (Math.abs(node.y) > spreadY / 1.8) node.vy *= -1;
            if (Math.abs(node.z) > spreadZ / 1.8) node.vz *= -1;

            // 3D rotation projection math
            let y1 = node.y * cosX - node.z * sinX;
            let z1 = node.y * sinX + node.z * cosX;

            let x2 = node.x * cosY + z1 * sinY;
            let z2 = -node.x * sinY + z1 * cosY;
            let y2 = y1;

            const fov = 800; // Match cameraZ for balanced FOV
            const nz = z2 + cameraZ;
            
            const scale = nz > 1 ? Math.min((fov / nz), 5) : 0; 

            if (scale > 0) {
              const projX = (x2 * scale) + width / 2;
              const projY = (y2 * scale) + height / 2;

              projectedNodes.push({ x: projX, y: projY, scale, originalZ: z2 });
            }
        });

        // Draw connecting lines
        for (let i = 0; i < projectedNodes.length; i++) {
            for (let j = i + 1; j < projectedNodes.length; j++) {
                const nodeA = projectedNodes[i];
                const nodeB = projectedNodes[j];

                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const distanceSq = dx * dx + dy * dy;
                
                // Max connection distance between nodes
                const connectDistance = 15000;

                if (distanceSq < connectDistance) {
                    const opacity = 1 - (distanceSq / connectDistance);
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    // Dim, subtle lines for the background
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.15})`; 
                    ctx.lineWidth = 1 * (nodeA.scale + nodeB.scale) / 2;
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        projectedNodes.forEach(node => {
            const glowOpacity = Math.min((node.scale * 0.35), 0.8);
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2.5 * node.scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${glowOpacity})`; // pure cyan node
            ctx.fill();
        });

        // Draw interactive mouse connections & glow
        if (mouse.x !== null && mouse.y !== null) {
            // Intense glowing region beneath the cursor
            const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
            gradient.addColorStop(0, 'rgba(0, 229, 255, 0.12)');
            gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');

            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            projectedNodes.forEach(node => {
                const dx = node.x - mouse.x;
                const dy = node.y - mouse.y;
                const distanceSq = dx * dx + dy * dy;
                const interactionRadiusSq = mouse.radius * mouse.radius;

                if (distanceSq < interactionRadiusSq) {
                    const distance = Math.sqrt(distanceSq);
                    const opacity = 1 - (distance / mouse.radius);
                    
                    // Draw striking connection to the cursor
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.8})`; 
                    ctx.lineWidth = 1.5 * node.scale;
                    ctx.stroke();
                    
                    // Add an extra glowing halo to the node itself if it's connected
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 4 * node.scale, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 229, 255, ${opacity * 0.5})`;
                    ctx.fill();
                }
            });
        }

        // Draw and update sparks
        for (let i = sparks.length - 1; i >= 0; i--) {
            let s = sparks[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= 0.025; // Spark decay rate

            if (s.life <= 0) {
                sparks.splice(i, 1);
            } else {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(166, 255, 251, ${s.life})`; 
                ctx.fill();
            }
        }

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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }} />;
};

export default CanvasNetwork;
