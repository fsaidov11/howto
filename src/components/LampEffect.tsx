import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampEffect = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full">
      <div className="relative flex flex-1 flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full bg-background [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 -translate-y-[120%] animate-pulse">
            <div className="h-44 w-44 rounded-full bg-primary opacity-50 blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};