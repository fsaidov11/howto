import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const team = [
  {
    name: "Фаридун Саидов",
    role: "Основатель HowTo.School",
    description: "6 лет опыта в репетиторстве. Специализируется на индивидуальном подходе и создании уникальных образовательных программ. Главная цель — помочь каждому ученику достичь успеха.",
    image: "/placeholder.svg",
  },
  {
    name: "Мухаммад Сафарбеков",
    role: "Эксперт английского языка",
    description: "Специалист по подготовке к TOEFL и IELTS. Помогает студентам достичь высоких баллов за короткий срок.",
    image: "/placeholder.svg",
  },
  {
    name: "МухаммадФируз",
    role: "Эксперт по SAT",
    description: "Эксперт в математике и SAT. Помогает освоить сложные термины и легко справляться с экзаменационными задачами.",
    image: "/placeholder.svg",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in">
          Наша команда
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 relative">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`
                bg-gradient-to-br from-background to-background/50 
                border-white/10 transform transition-all duration-300 
                hover:scale-105 hover:z-10 group
                ${index === 0 ? 'sm:col-span-6 md:col-span-8 md:row-span-2' : 'sm:col-span-3 md:col-span-6'}
                ${index === 1 ? 'sm:col-start-4 md:col-start-7 sm:-mt-12 md:-mt-24 md:translate-x-4' : ''}
                ${index === 2 ? 'sm:col-start-2 md:col-start-4 sm:-mt-12 md:-mt-24 md:-translate-x-4' : ''}
              `}
            >
              <CardContent className="p-4 sm:p-6 relative">
                <div className={`
                  aspect-square rounded-xl overflow-hidden mb-4 sm:mb-6 
                  transform transition-all duration-300
                  group-hover:scale-105 relative
                  ${index === 0 ? 'sm:float-left sm:mr-6 sm:w-1/2' : 'mx-auto max-w-[200px]'}
                `}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className={`
                  relative z-10 backdrop-blur-sm bg-background/30 p-4 rounded-lg
                  ${index === 0 ? 'sm:w-1/2 sm:float-right' : ''}
                `}>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center sm:text-left">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary mb-4 text-center sm:text-left">
                    {member.role}
                  </p>
                  
                  <p className="text-white/80 text-center sm:text-left">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;