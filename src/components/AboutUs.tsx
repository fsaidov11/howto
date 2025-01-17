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
        <h2 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in">
          Наша команда
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-[#1A1F2C] border-[#8E9196]/20 transform transition-all duration-300 
                hover:scale-102 group relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#7E69AB]">
                    {member.role}
                  </p>
                  
                  <p className="text-[#8E9196] text-sm leading-relaxed">
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