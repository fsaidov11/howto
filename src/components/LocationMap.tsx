import { Phone, MessageCircle } from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-20 px-4" id="location">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Наше расположение
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.488136011898!2d68.77944231531971!3d38.56013087962121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d16729b3b4e7%3A0x9b6a8b7c5c5c5c5c!2z0YPQuy4g0JHRg9GF0L7RgNC-LCA3OCwg0JTRg9GI0LDQvdCx0LU!5e0!3m2!1sru!2s!4v1620000000000!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="space-y-6 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white">Контакты</h3>
            
            <div className="space-y-4">
              <a
                href="tel:+992000556544"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +992 000 55 65 44
              </a>
              
              <a
                href="https://t.me/howtoschool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
              
              <a
                href="https://wa.me/992000556544"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              
              <p className="text-white/80">
                ул. Бухоро, 78, Душанбе
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;