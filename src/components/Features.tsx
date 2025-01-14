import { Users, Clock, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Индивидуальный подход",
      description: "Программа обучения адаптируется под ваши цели и уровень"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Гибкость обучения",
      description: "Удобное расписание и формат занятий"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Практическое применение",
      description: "Фокус на реальном использовании языка"
    }
  ];

  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-white/80 font-montserrat">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;