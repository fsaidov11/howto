
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    preferredTime: "",
    agreeToTerms: false,
    course: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
        preferredTime: "",
        agreeToTerms: false,
        course: "",
      });
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте снова позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Свяжитесь с нами
        </h2>
        
        {isSuccess ? (
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center animate-fade-in">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Спасибо за ваше сообщение!</h3>
            <p className="text-white/80">Наша команда свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/90 text-sm font-medium">Имя</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/90 text-sm font-medium">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-white/90 text-sm font-medium">Телефон</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="course" className="text-white/90 text-sm font-medium">Интересующий курс</label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleSelectChange("course", value)}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-white/50">
                    <SelectValue placeholder="Выберите курс" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Общий английский</SelectItem>
                    <SelectItem value="toefl">Подготовка к TOEFL</SelectItem>
                    <SelectItem value="ielts">Подготовка к IELTS</SelectItem>
                    <SelectItem value="sat">Подготовка к SAT</SelectItem>
                    <SelectItem value="duolingo">Duolingo English Test</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="preferredContact" className="text-white/90 text-sm font-medium">Предпочтительный способ связи</label>
              <div className="flex flex-wrap gap-4">
                <div 
                  className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
                    formData.preferredContact === "email" 
                      ? "bg-primary/20 border border-primary/50" 
                      : "bg-white/5 border border-white/10"
                  }`}
                  onClick={() => handleSelectChange("preferredContact", "email")}
                >
                  <Mail className="h-4 w-4 text-white/70" />
                  <span className="text-white">Email</span>
                </div>
                <div 
                  className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
                    formData.preferredContact === "phone" 
                      ? "bg-primary/20 border border-primary/50" 
                      : "bg-white/5 border border-white/10"
                  }`}
                  onClick={() => handleSelectChange("preferredContact", "phone")}
                >
                  <Phone className="h-4 w-4 text-white/70" />
                  <span className="text-white">Телефон</span>
                </div>
                <div 
                  className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
                    formData.preferredContact === "messenger" 
                      ? "bg-primary/20 border border-primary/50" 
                      : "bg-white/5 border border-white/10"
                  }`}
                  onClick={() => handleSelectChange("preferredContact", "messenger")}
                >
                  <MessageSquare className="h-4 w-4 text-white/70" />
                  <span className="text-white">Мессенджер</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="preferredTime" className="text-white/90 text-sm font-medium">Предпочтительное время для связи</label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleSelectChange("preferredTime", value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white placeholder:text-white/50">
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Утро (9:00 - 12:00)</SelectItem>
                  <SelectItem value="afternoon">День (12:00 - 17:00)</SelectItem>
                  <SelectItem value="evening">Вечер (17:00 - 21:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-white/90 text-sm font-medium">Сообщение</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о своих целях изучения английского..."
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px] focus:border-primary/50"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={formData.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
                required
                className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              />
              <label
                htmlFor="terms"
                className="text-sm text-white/70 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Я согласен с условиями обработки персональных данных
              </label>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || !formData.agreeToTerms}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-6 text-lg"
            >
              {isSubmitting ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        )}
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent mb-4">
            HowTo.School — индивидуальный подход к изучению English.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
