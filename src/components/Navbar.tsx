import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white font-montserrat">
              HowTo.School
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/about" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                О нас
              </Link>
              <Link to="/courses" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Курсы
              </Link>
              <Link to="/pricing" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Цены
              </Link>
              <Link to="/blog" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Блог
              </Link>
              <Link to="/contact" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium font-montserrat">
                Контакты
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium font-montserrat"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Link
              to="/courses"
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium font-montserrat"
              onClick={toggleMenu}
            >
              Курсы
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium font-montserrat"
              onClick={toggleMenu}
            >
              Цены
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium font-montserrat"
              onClick={toggleMenu}
            >
              Блог
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-white/80 block px-3 py-2 rounded-md text-base font-medium font-montserrat"
              onClick={toggleMenu}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;