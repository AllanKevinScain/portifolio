import { motion } from "framer-motion";
import { useState } from "react";

export function FlipIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-10 h-10"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full p-2 bg-(--color-border)"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src="/code_icon.png" alt="code" />
        </div>

        {/* BACK */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center rounded-full bg-(--color-border) p-2"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img src="/login_icon.png" alt="login" />
        </div>
      </motion.div>
    </div>
  );
}
