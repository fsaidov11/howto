import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Свяжитесь с нами
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Электронная почта"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
          
          <div>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Телефон"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Сообщение"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px]"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Отправить
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;