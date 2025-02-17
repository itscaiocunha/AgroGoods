
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <img src="public/logo/logo_agrogoods.png" alt="AgroGoods Logo" className="w-36 h-auto"/>
          </a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
              Depoimentos
            </a>
            <a href="#cadastro" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
              Cadastre-se
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#beneficios" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                Benefícios
              </a>
              <a href="#como-funciona" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                Como Funciona
              </a>
              <a href="#depoimentos" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                Depoimentos
              </a>
              <a href="#cadastro" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                Cadastre-se
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};
