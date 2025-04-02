
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/ui/lamp";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
          HowTo.School — индивидуальный подход к изучению English.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 font-montserrat">
          Индивидуальные курсы по английскому языку и подготовке к тестам: TOEFL, IELTS, SAT, Duolingo
        </p>
        <p className="text-base sm:text-lg text-primary/90 mb-8 font-montserrat">
          Без стресса. Без сложностей. С гарантированным результатом.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-base rounded-lg font-montserrat 
                      hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl
                      sm:text-base md:text-lg w-full sm:w-auto"
            onClick={() => window.location.href = '/contact'}
          >
            Записаться на пробный урок
          </Button>
          <Button 
            variant="outline"
            className="text-white border-white/20 hover:bg-white/5 px-6 py-2 text-base rounded-lg font-montserrat 
                      transition-all duration-200
                      sm:text-base md:text-lg w-full sm:w-auto"
            onClick={() => window.location.href = '/english-test'}
          >
            Пройти тест на уровень
          </Button>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 right-0 bottom-0 z-10">
        <LampDemo />
      </div>
    </div>
  );
};

export default Hero;
