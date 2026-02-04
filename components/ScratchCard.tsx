import React, { useRef, useEffect, useState } from "react";

interface ScratchCardProps {
  revealDate: Date;
  eventDate: string;
  locationName: string;
  neighborhood: string;
  details: string;
}

const ScratchCard: React.FC<ScratchCardProps> = ({
  revealDate,
  eventDate,
  locationName,
  neighborhood,
  details,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const now = new Date();
  const canScratch = now >= revealDate;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create scratch surface with gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#d4af37");
    gradient.addColorStop(0.5, "#f0d060");
    gradient.addColorStop(1, "#d4af37");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add texture pattern
    ctx.fillStyle = "rgba(26, 46, 68, 0.1)";
    for (let i = 0; i < width; i += 4) {
      for (let j = 0; j < height; j += 4) {
        if (Math.random() > 0.5) {
          ctx.fillRect(i, j, 2, 2);
        }
      }
    }

    // Add text based on whether scratching is allowed
    ctx.fillStyle = "#1a2e44";
    ctx.font = "bold 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (canScratch) {
      ctx.fillText("✨ SCRATCH TO REVEAL ✨", width / 2, height / 2);
    } else {
      ctx.fillText("✨ SCRATCH TO REVEAL ✨", width / 2, height / 2 - 30);
      ctx.font = "bold 16px Inter, sans-serif";
      ctx.fillText("COMING SOON", width / 2, height / 2 + 5);
      ctx.font = "bold 14px Inter, sans-serif";
      ctx.fillStyle = "#1a2e44aa";
      const revealDateStr = revealDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      ctx.fillText(`Unlocks ${revealDateStr}`, width / 2, height / 2 + 30);
    }
  }, [canScratch, revealDate]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale coordinates from display size to canvas size
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const scaledX = x * scaleX;
    const scaledY = y * scaleY;

    ctx.globalCompositeOperation = "destination-out";

    // Create scratchy brush effect
    const brushSize = 40;
    ctx.beginPath();
    ctx.arc(scaledX, scaledY, brushSize, 0, Math.PI * 2);
    ctx.fill();

    // Add some randomness for realistic scratch
    for (let i = 0; i < 5; i++) {
      const offsetX = (Math.random() - 0.5) * brushSize;
      const offsetY = (Math.random() - 0.5) * brushSize;
      ctx.beginPath();
      ctx.arc(
        scaledX + offsetX,
        scaledY + offsetY,
        brushSize * 0.5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Calculate scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percentage = (transparent / (imageData.data.length / 4)) * 100;

    // Auto-reveal if scratched enough
    if (percentage > 40) {
      setIsRevealed(true);
    }
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!canScratch) return;
    setIsScratching(true);
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching || !canScratch) return;
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handleEnd = () => {
    setIsScratching(false);
  };

  return (
    <div className="relative overflow-hidden bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 p-8 rounded-3xl">
      {/* Date header - always visible */}
      <div className="text-sm font-black uppercase tracking-widest mb-4 opacity-60">
        {eventDate}
      </div>

      {/* Content container */}
      <div className="relative h-[200px]">
        {/* Hidden content that gets revealed */}
        <div
          className={`transition-all duration-500 ${
            isRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-black uppercase mb-2 leading-tight">
            {locationName}
          </h3>
          <p className="text-sm font-bold uppercase tracking-widest mb-6 text-[#d4af37]">
            {neighborhood}
          </p>
          <div className="w-12 h-1 bg-[#d4af37] mb-6"></div>
          <p className="text-sm font-medium leading-relaxed opacity-80">
            {details}
          </p>
        </div>

        {/* Scratch canvas overlay */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            width={350}
            height={200}
            className={`absolute inset-0 w-full h-full touch-none rounded-2xl ${canScratch ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
          />
        )}
      </div>
    </div>
  );
};

export default ScratchCard;
