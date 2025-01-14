import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Анна К.",
    text: "Благодаря HowTo.School я успешно сдала IELTS на 7.5 баллов!",
    role: "Студентка"
  },
  {
    name: "Михаил Д.",
    text: "Индивидуальный подход и профессионализм преподавателей впечатляют.",
    role: "Специалист по IT"
  },
  {
    name: "Елена В.",
    text: "Подготовка к TOEFL прошла эффективно, результат превзошел ожидания.",
    role: "Выпускница"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 font-montserrat">
          Отзывы наших студентов
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
              <p className="text-lg text-white/90 mb-6 font-montserrat">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-white font-montserrat">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white/70 font-montserrat">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;