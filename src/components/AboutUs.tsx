import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Фаридун",
    role: "Основатель HowTo.School",
    description: "6 лет опыта в репетиторстве. Специализируется на индивидуальном подходе и создании уникальных образовательных программ. Главная цель — помочь каждому ученику достичь успеха.",
    image: "/placeholder.svg",
  },
  {
    name: "Анна",
    role: "Преподаватель английского языка",
    description: "Специалист по подготовке к TOEFL и IELTS. Помогает студентам достичь высоких баллов за короткий срок.",
    image: "/placeholder.svg",
  },
  {
    name: "Михаил",
    role: "Эксперт по математике SAT",
    description: "Эксперт в математике и SAT. Помогает освоить сложные термины и легко справляться с экзаменационными задачами.",
    image: "/placeholder.svg",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Наша команда
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-background to-background/50 border-white/10 transform transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto max-w-[200px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white text-center">
                  {member.name}
                </h3>
                
                <p className="text-primary mb-4 text-center">
                  {member.role}
                </p>
                
                <p className="text-white/80 text-center">
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