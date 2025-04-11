import React from "react";
import {CheckCircle, XCircle, MessageCircle, Video, Users, Clock} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type PlanFeature = {
    name: string;
    included: boolean;
    highlight?: boolean;
};

type PricingPlan = {
    title: string;
    price: string;
    description: string;
    features: PlanFeature[];
    popular?: boolean;
    buttonText: string;
    buttonAction: () => void;
};

const pricingPlans: PricingPlan[] = [
    {
        title: "Платный чат",
        price: "150 сомони/месяц",
        description: "Задавайте вопросы и получайте быстрые ответы с видео объяснениями",
        features: [
            {name: "Доступ к закрытому чату", included: true, highlight: true},
            {name: "Видео объяснение в течение 5 минут", included: true, highlight: true},
            {name: "1 урок в день", included: true, highlight: true},
            {name: "Доступ к базе знаний", included: false},
            {name: "Личная поддержка от преподавателя", included: false},
            {name: "Персональный план обучения", included: false},
        ],
        buttonText: "Подписаться",
        buttonAction: () => window.location.href = '/contact',
    },
    {
        title: "Индивидуальные онлайн занятия",
        price: "от 200 сомони/час",
        description: "Персональные занятия с ментором через Zoom/Teams",
        popular: true,
        features: [
            {name: "Индивидуальная программа", included: true, highlight: true},
            {name: "Гибкий график занятий", included: true, highlight: true},
            {name: "Подготовка к экзаменам и тестам", included: true, highlight: true},
            {name: "Домашние задания и проверка", included: true, highlight: true},
            {name: "Регулярные отчеты о прогрессе", included: true, highlight: true},
            {name: "Доступ к закрытому чату", included: true, highlight: true},
        ],
        buttonText: "Записаться",
        buttonAction: () => window.location.href = '/contact',
    },
    {
        title: "Индивидуальные офлайн занятия",
        price: "от 250 сомони/час",
        description: "Очные занятия в нашем учебном центре или у вас дома",
        features: [
            {name: "Индивидуальная программа", included: true},
            {name: "Личное взаимодействие с преподавателем", included: true, highlight: true},
            {name: "Подготовка к экзаменам и тестам", included: true, highlight: true},
            {name: "Интенсивные занятия", included: true, highlight: true},
            {name: "Учебные материалы включены", included: true, highlight: true},
            {name: "Доступ к закрытому чату", included: true, highlight: true},
        ],
        buttonText: "Записаться",
        buttonAction: () => window.location.href = '/contact',
    },
];

const Pricing = () => {
    return (
        <section className="py-20 px-4" id="pricing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Тарифы и цены</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Выберите подходящий тариф и начните путь к успеху уже сегодня. Первая консультация бесплатно!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden border-white/10 bg-background/50 backdrop-blur-sm text-white
                ${plan.popular ? 'border-primary/50 scale-105 md:scale-110 shadow-lg shadow-primary/20' : 'hover:border-white/30'}
                transition-all duration-300 animate-fade-in`}
                            style={{"--delay": `${index * 100}ms`} as React.CSSProperties}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0">
                                    <div
                                        className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                                        Популярный выбор
                                    </div>
                                </div>
                            )}

                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-montserrat">
                                    {plan.title === "Платный чат" && <MessageCircle className="w-5 h-5 text-primary"/>}
                                    {plan.title === "Индивидуальные онлайн занятия" &&
                                        <Video className="w-5 h-5 text-primary"/>}
                                    {plan.title === "Индивидуальные офлайн занятия" &&
                                        <Users className="w-5 h-5 text-primary"/>}
                                    {plan.title}
                                </CardTitle>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                </div>
                                <CardDescription className="text-white/70 mt-2">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className={`flex items-start gap-2 ${feature.highlight ? 'text-white font-medium' : 'text-white/70'}`}
                                        >
                                            {feature.included ? (
                                                <CheckCircle className="w-5 h-5 min-w-5 text-primary mt-0.5"/>
                                            ) : (
                                                <XCircle className="w-5 h-5 min-w-5 text-white/40 mt-0.5"/>
                                            )}
                                            <span>{feature.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={`w-full font-montserrat ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/10 hover:bg-white/20'}`}
                                    onClick={plan.buttonAction}
                                >
                                    {plan.buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-white/60 text-sm max-w-2xl mx-auto">
                        Для групповых занятий и корпоративных клиентов предусмотрены специальные тарифы.
                        Свяжитесь с нами для получения индивидуального предложения.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
