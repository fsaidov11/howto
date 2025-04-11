"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 text-white text-center text-3xl font-bold tracking-tight md:text-5xl"
      >
        HowTo.School
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="mt-4 text-xl text-white/90 text-center font-medium md:text-2xl"
      >
        место где легко и без воды
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobile = useIsMobile();

  const heightClass = isMobile ? "h-20" : "h-40 sm:h-56";
  const blurHeightClass = isMobile ? "h-12" : "h-32 sm:h-48";
  const glowHeightClass = isMobile ? "h-12" : "h-24 sm:h-36";
  const translateYBlur = isMobile ? "translate-y-12" : "translate-y-12";
  const translateYGlow = isMobile ? "-translate-y-[1.5rem]" : "-translate-y-[4rem] sm:-translate-y-[6rem]";
  const translateYLine = isMobile ? "-translate-y-[2rem]" : "-translate-y-[5rem] sm:-translate-y-[7rem]";
  const bottomMaskTranslate = isMobile ? "-translate-y-[4rem]" : "-translate-y-[8rem] sm:-translate-y-[12.5rem]";
  const contentTranslate = isMobile ? "-translate-y-14" : "-translate-y-40 sm:-translate-y-64";

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "14rem" : "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto right-1/2 ${heightClass} overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
        >
          <div className={`absolute w-full left-0 bg-background ${heightClass} bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
          <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "14rem" : "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto left-1/2 ${heightClass} w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]`}
        >
          <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className={`absolute w-full right-0 bg-background ${heightClass} bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
        </motion.div>

        <div className={`absolute top-1/2 ${blurHeightClass} w-full ${translateYBlur} scale-x-150 bg-background blur-2xl`} />
        <div className={`absolute top-1/2 z-50 ${blurHeightClass} w-full bg-transparent opacity-10 backdrop-blur-md`} />
        <div className={`absolute inset-auto z-50 ${glowHeightClass} w-[20rem] sm:w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl`} />

        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: isMobile ? "6rem" : "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-auto z-30 ${glowHeightClass} w-64 ${translateYGlow} rounded-full bg-cyan-400 blur-2xl`}
        />

        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: isMobile ? "14rem" : "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-auto z-50 h-0.5 w-[30rem] ${translateYLine} bg-cyan-400`}
        />

        <div className={`absolute inset-auto z-40 ${blurHeightClass} w-full ${bottomMaskTranslate} bg-background`} />
      </div>

      <div className={`relative z-50 flex ${contentTranslate} flex-col items-center px-5`}>
        {children}
      </div>
    </div>
  );
};
