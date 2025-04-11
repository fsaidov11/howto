
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return <div className="relative min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl relative z-20">
        <motion.div 
          className={`flex flex-col sm:flex-row justify-center gap-4 ${isMobile ? 'mt-16' : 'mt-32'}`}
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
        >
          <Button 
            onClick={() => window.location.href = '/contact'} 
            className="bg-gradient-to-r from-primary to-secondary text-white text-base rounded-lg font-montserrat hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-primary/20 hover:scale-105 sm:text-base w-full sm:w-auto px-[24px] py-0 md:text-lg"
          >
            Записаться на пробный урок
          </Button>
          <Button 
            variant="outline" 
            className="text-white border-white/30 hover:bg-white/10 px-6 py-3 text-base rounded-lg font-montserrat 
                      transition-all duration-200 hover:scale-105 hover:border-primary/50
                      sm:text-base md:text-lg w-full sm:w-auto" 
            onClick={() => window.location.href = '/english-test'}
          >
            Пройти тест на уровень
          </Button>
        </motion.div>
      </div>
      <div className="w-full absolute top-0 left-0 right-0 bottom-0 z-10">
        <LampDemo />
      </div>
    </div>;
};
export default Hero;
