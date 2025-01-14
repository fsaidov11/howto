import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-montserrat">
              Контакты
            </h3>
            <div className="space-y-3">
              <a href="tel:+992000000000" className="flex items-center text-white/80 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-montserrat">+992 (00) 000-00-00</span>
              </a>
              <a href="mailto:info@howto.school" className="flex items-center text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-montserrat">info@howto.school</span>
              </a>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-montserrat">ул. Бухоро, 78</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-montserrat">
              Социальные сети
            </h3>
            <div className="space-y-3">
              <a href="https://wa.me/992000000000" className="block text-white/80 hover:text-white transition-colors font-montserrat">
                WhatsApp
              </a>
              <a href="https://t.me/howtoschool" className="block text-white/80 hover:text-white transition-colors font-montserrat">
                Telegram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-montserrat">
              Режим работы
            </h3>
            <p className="text-white/80 font-montserrat">
              Пн-Пт: 9:00 - 18:00
              <br />
              Сб: 10:00 - 15:00
              <br />
              Вс: Выходной
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 font-montserrat">
            © {new Date().getFullYear()} HowTo.School. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;