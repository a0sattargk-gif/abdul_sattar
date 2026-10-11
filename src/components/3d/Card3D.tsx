"use client";

import React, { useRef, useState, useCallback } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  scale?: number;
  depth?: number;
}

export default function Card3D({
  children,
  className = "",
  maxTilt = 12,
  glareOpacity = 0.2,
  scale = 1.02,
  depth = 20,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Normalized coordinates from -1 to 1
      const xPct = (mouseX / width - 0.5) * 2;
      const yPct = (mouseY / height - 0.5) * 2;

      // Calculate tilt angles (rotateX depends on Y coordinate, rotateY depends on X coordinate)
      const rX = -yPct * maxTilt;
      const rY = xPct * maxTilt;

      setRotateX(rX);
      setRotateY(rY);

      // Specular glare positioning
      setGlarePosition({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: glareOpacity,
      });
    },
    [maxTilt, glareOpacity]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-1000 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative size-full transition-transform duration-200 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Content with Z-Depth */}
        <div
          className="relative size-full"
          style={{
            transform: isHovered ? `translateZ(${depth}px)` : "translateZ(0px)",
            transformStyle: "preserve-3d",
            transition: "transform 200ms ease-out",
          }}
        >
          {children}
        </div>

        {/* Dynamic Specular Light Glare Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.22), rgba(16, 185, 129, 0.12) 40%, transparent 80%)`,
          }}
        />
      </div>
    </div>
  );
}

