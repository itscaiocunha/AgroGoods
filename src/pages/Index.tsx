import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { Sprout, DollarSign, Clock, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/sucesso');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-agrogoods-light via-white to-agrogoods-light/50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23015501' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-agrogoods-primary/10 text-agrogoods-primary text-sm font-semibold mb-6">
                Seja um Vendedor Independente
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tenha sua própria 
                <span className="text-agrogoods-primary block">loja agropecuária</span>
                online
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Monte seu negócio online, trabalhe de onde quiser e receba suporte completo dos nossos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="#cadastro" className="text-xl">
                  Começar agora
                </CTAButton>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="text-agrogoods-primary font-semibold">
                    Apenas R$ 1,00 na primeira venda
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-agrogoods-primary">+1000</div>
                  <div className="text-sm text-gray-600">Vendedores Ativos</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-agrogoods-primary">+5000</div>
                  <div className="text-sm text-gray-600">Produtos Disponíveis</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-agrogoods-primary">24/7</div>
                  <div className="text-sm text-gray-600">Suporte Especializado</div>
                </div>
              </div>
            </motion.div>

            {/* Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-agrogoods-primary/20 to-agrogoods-light rounded-2xl overflow-hidden">
                  <video className="w-full h-full object-cover opacity-75" autoPlay loop muted>
                    <source src="https://w7startup.com.br/video/video_placeholder.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 right-12 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Sprout className="w-12 h-12 text-agrogoods-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute bottom-12 -left-6 w-20 h-20 bg-agrogoods-primary rounded-xl shadow-lg flex items-center justify-center"
                >
                  <DollarSign className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AgroGoods?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos tudo que você precisa para ter sucesso no mercado agropecuário
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sprout,
                title: "Suporte Especializado",
                description: "Conte com nossa equipe de especialistas para te ajudar em cada passo",
              },
              {
                icon: DollarSign,
                title: "Baixo Investimento",
                description: "Comece com apenas R$ 1,00 na sua primeira venda",
              },
              {
                icon: Clock,
                title: "Flexibilidade Total",
                description: "Trabalhe quando e onde quiser, sem horários fixos",
              },
              {
                icon: Users,
                title: "Comunidade Ativa",
                description: "Faça parte de uma rede de vendedores de sucesso",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-agrogoods-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-agrogoods-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-agrogoods-primary text-white bg-cover bg-center relative" style={{ backgroundImage: 'url(/plantacao.jpeg)' }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Junte-se a milhares de vendedores independentes e comece sua história de sucesso hoje mesmo.
            </p>
            <CTAButton href="#cadastro" className="bg-green text-agrogoods-primary hover:bg-gray-900">
              Quero me cadastrar
            </CTAButton>
          </motion.div>
        </div>
      </section>



      {/* Steps Section */}
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece sua jornada em poucos passos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Faça seu cadastro",
                description: "Preencha seus dados básicos e crie sua conta gratuitamente",
              },
              {
                step: "2",
                title: "Receba treinamento",
                description: "Acesse nossas micro-aulas exclusivas e aprenda com especialistas",
              },
              {
                step: "3",
                title: "Comece a vender",
                description: "Use nosso app e comece a divulgar seus produtos",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-agrogoods-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-agrogoods-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="cadastro" className="relative py-16 bg-agrogoods-light">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://w7startup.com.br/video/video_backgroudform.mp4" type="video/mp4"/>
        </video>

        {/* Overlay para melhor contraste */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-xl p-8 backdrop-blur-md"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Cadastre-se agora
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <CTAButton type="submit" className="w-full justify-center" onClick={() => (window.location.href = "/sucesso")}>
                Enviar cadastro
              </CTAButton>
            </form>
          </motion.div>
        </div>
      </section>

{/* Footer */}
      <footer className="bg-white border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sobre a AgroGoods</h3>
              <p className="text-gray-600 mb-4">
                Transformando o mercado agropecuário através da tecnologia e do empreendedorismo.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Úteis */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beneficios" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#cadastro" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Cadastre-se
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidade" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos-uso" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-agrogoods-primary mr-2" />
                  <a href="tel:0800123456" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    0800 123 456
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-agrogoods-primary mr-2" />
                  <a href="mailto:contato@agrogoods.com.br" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    contato@agrogoods.com.br
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-agrogoods-primary mr-2 mt-1" />
                  <span className="text-gray-600">
                    Av. Tecnologia Verde, 1000<br />
                    São Paulo - SP
                  </span>
                </li>
              </ul>
            </div>

            {/* Atendimento */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Atendimento</h3>
              <div className="text-gray-600">
                <p className="mb-2">Segunda a Sexta</p>
                <p className="font-semibold text-agrogoods-primary mb-4">08h às 18h</p>
                <p className="mb-2">Sábado</p>
                <p className="font-semibold text-agrogoods-primary">09h às 13h</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} AgroGoods. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
