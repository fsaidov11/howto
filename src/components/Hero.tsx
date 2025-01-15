import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
          HowTo.School — индивидуальный подход к изучению English.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 font-montserrat">
          Индивидуальные курсы по английскому языку и подготовке к тестам: TOEFL, IELTS, SAT, Duolingo
        </p>
        <Button 
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-lg text-lg font-montserrat hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          onClick={() => window.location.href = '/contact'}
        >
          Записаться на бесплатную консультацию
        </Button>
      </div>
    </div>
  );
};

export default Hero;