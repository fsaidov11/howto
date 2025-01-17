import { Card, CardContent } from "@/components/ui/card";

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
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Наша команда
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`
                bg-gradient-to-br from-background to-background/50 
                border-white/10 transform transition-all duration-300 
                hover:scale-105 hover:z-10
                ${index === 0 ? 'md:col-span-8 md:row-span-2' : 'md:col-span-6'}
                ${index === 1 ? 'md:col-start-7 md:-mt-12' : ''}
                ${index === 2 ? 'md:col-start-4 md:-mt-12' : ''}
              `}
            >
              <CardContent className="p-6 relative">
                <div className={`
                  aspect-square rounded-xl overflow-hidden mb-6 
                  transform transition-all duration-300
                  group-hover:scale-105 relative
                  ${index === 0 ? 'md:float-left md:mr-6 md:w-1/2' : 'mx-auto max-w-[200px]'}
                `}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white text-center md:text-left">
                  {member.name}
                </h3>
                
                <p className="text-primary mb-4 text-center md:text-left">
                  {member.role}
                </p>
                
                <p className="text-white/80 text-center md:text-left">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;