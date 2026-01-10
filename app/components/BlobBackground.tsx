"use client";
import { motion } from "framer-motion";

export default function BlobBackground() {
  const blobs = [
    { color: "bg-cyan-200", className: "top-[-5%] left-[-2%] w-[600px] h-[600px]", delay: 0 },
    { color: "bg-purple-200", className: "top-[15%] right-[-5%] w-[700px] h-[700px]", delay: 2 },
    { color: "bg-blue-200", className: "bottom-[-5%] left-[10%] w-[800px] h-[600px]", delay: 4 },
    { color: "bg-pink-200", className: "top-[45%] right-[15%] w-[500px] h-[500px]", delay: 1 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4], 
            y: [0, 40, 0],
            x: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut"
          }}
          className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.className}`}
        />
      ))}
    </div>
  );
}