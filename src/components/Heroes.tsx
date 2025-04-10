
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Image as ImageIcon } from "lucide-react";

interface Story {
  name: string;
  achievement: string;
  description: string;
  image: string;
  video?: string;
}

const stories: Story[] = [
  {
    name: "Ëров Гулмурод",
    achievement: "TOEFL 111",
    description: "За 3 месяца подготовки достиг желаемого результата.",
    image: "/",
  },
  {
    name: "Муродзода Мухаммад",
    achievement: "IELTS 8.0",
    description: "Получил стипендию в DAAD благодаря высокому баллу IELTS.",
    image: "/",
    video: "https://example.com/success-story-1.mp4",
  },
  {
    name: "Намиг Курбанов",
    achievement: "SAT 1450",
    description: "Поступил в KAIST University (South - Korea) с полной стипендией.",
    image: "/photo-1581091226825-a6a2a5aee158",
  },
];

const Heroes = () => {
  const [activeStory, setActiveStory] = useState<number>(0);

  return (
    <section className="py-20 px-4" id="heroes">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in">
          Истории успеха
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className={`
                transform transition-all duration-500 
                hover:scale-[1.02] cursor-pointer
                bg-gradient-to-br from-background to-background/50 
                border-white/10 group
                ${activeStory === index ? 'scale-[1.02] border-primary/50' : ''}
              `}
              onClick={() => setActiveStory(index)}
            >
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {story.video && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle video playback
                      }}
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{story.name}</h3>
                  <p className="text-primary text-lg font-medium">{story.achievement}</p>
                  <p className="text-white/80">{story.description}</p>
                  
                  <div className="flex gap-2">
                    {story.image && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn hover:bg-primary/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle image view
                        }}
                      >
                        <ImageIcon className="mr-2 w-4 h-4 group-hover/btn:text-primary" />
                        Фото
                      </Button>
                    )}
                    {story.video && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn hover:bg-primary/20"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle video view
                        }}
                      >
                        <Play className="mr-2 w-4 h-4 group-hover/btn:text-primary" />
                        Видео
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heroes;
