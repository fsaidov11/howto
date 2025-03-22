
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Гулмурод Ëров",
    text: "Я боялся, что не смогу сдать TOEFL на нужный балл для поступления. Благодаря индивидуальному подходу и методикам HowTo.School я успешно сдал TOEFL iBT на 92 балла всего за 3 месяца подготовки!",
    role: "Студент, поступил в University of Michigan",
    rating: 5
  },
  {
    name: "Фарход Сатторов",
    text: "Долго не мог понять грамматику английского языка. Преподаватели школы объяснили сложные концепции на простых примерах. Теперь я свободно говорю и пишу, а мой IELTS составил 7.5 баллов!",
    role: "Абитуриент, поступил в UCL",
    rating: 5
  },
  {
    name: "Искандар Миров",
    text: "Ранее я изучал английский с разными репетиторами, но безрезультатно. В HowTo.School меня научили практическому применению языка. Подготовка к Duolingo прошла эффективно, результат превзошел ожидания - 135 баллов из 160!",
    role: "Выпускник, работает в международной компании",
    rating: 5
  },
  {
    name: "Алиев Юсуф",
    text: "Математика всегда была моим слабым местом, особенно при подготовке к SAT. Преподаватели помогли мне разобраться с математическими концепциями, результат - 720 баллов по математике в SAT и поступление в желаемый университет!",
    role: "Школьник, поступил в NYU",
    rating: 5
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
    <div className="py-24 bg-background" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 font-montserrat">
          Истории успеха наших учеников
        </h2>
        <p className="text-white/70 text-lg text-center max-w-3xl mx-auto mb-12 font-montserrat">
          Наши студенты преодолели свои трудности в обучении и достигли впечатляющих результатов
        </p>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-white/90 mb-6 font-montserrat italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg font-montserrat">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary font-montserrat">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === index ? "bg-primary" : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
