import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

type BlogPost = {
  id: number;
  titulo: string;
  resumo: string;
  criadoEm: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<BlogPost[]>("https://agrogoods-blog-api.vercel.app/api/blog", {
        headers: {
          "x-api-key":
            "y8X9ehpKM7dS2dGSj514BaMhf9XHyUm7ZbEdEW53Rlm70PLW31Jvkr4xU5SXSe5l8KDixokH6qUE2RHPt3qeMmPPoKgsYLObvFO7Y4RaABr1Sp5J0nDs6I3vz6AE8PqH",
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts do blog:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold text-agrogoods-primary mb-4">Blog AgroGoods</h1>
        <p className="text-lg text-gray-600 mb-8">
          Acompanhe as últimas notícias e tendências do mundo agro
        </p>

        {loading ? (
          <p className="text-gray-600">Carregando publicações...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(post.criadoEm)}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 text-agrogoods-primary">{post.titulo}</CardTitle>
                  <CardDescription className="text-gray-600">{post.resumo}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-agrogoods-secondary font-medium hover:text-agrogoods-primary transition-colors"
                  >
                    Ler mais
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Empresa */}
            <div>
              <img src="https://w7startup.com.br/img/logo_agrogoods.png" alt="logo_agrogoods" className="w-56"/>
              <div className="flex space-x-4 px-16">
                <a href="https://www.instagram.com/agrogoods/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/agrogoods/" target="_blank" rel="noopener noreferrer"
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
                  <a href="/privacidade" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
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
                  <a href="tel:16997772276" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    (16) 99777-2276
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-agrogoods-primary mr-2" />
                  <a href="mailto:contato@agrogoods.com.br" className="text-gray-600 hover:text-agrogoods-primary transition-colors">
                    contato@agrogoods.com.br
                  </a>
                </li>
                {/* <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-agrogoods-primary mr-2 mt-1" />
                  <span className="text-gray-600">
                    Av. Tecnologia Verde, 1000<br />
                    São Paulo - SP
                  </span>
                </li> */}
              </ul>
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
};

export default Blog;
