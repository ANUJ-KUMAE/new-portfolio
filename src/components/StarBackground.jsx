import { useEffect, useRef } from "react";

export function StarBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const ctx = canvas.getContext("2d");
        if(!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const stars = Array.from({length: 200}, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            opacity: Math.random(),
            twinkleSpeed: Math.random() * 0.02 + 0.0005,
            direction: Math.random() > 0.5 ? 1 : -1
        }));

        const animate = () => {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             stars.forEach((star) => {
                star.opacity += star.twinkleSpeed * star.direction;

                if(star.opacity <= 0 || star.opacity >= 1) {
                     star.direction *= -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
             });

             requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
           ref={canvasRef}
           className="fixed left-0 top-0 z-0 w-full pointer-events-none"
        />
    )
}