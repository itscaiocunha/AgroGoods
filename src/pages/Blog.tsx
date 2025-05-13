
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { File, Calendar } from "lucide-react";
import { BlogPost } from "../types/blog";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

// Temporary mock data for blog posts
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Novas técnicas de irrigação sustentável ganham destaque",
    excerpt: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura...",
    content: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura sem comprometer a produtividade das colheitas. Estas técnicas combinam sensores IoT com análise de dados em tempo real...",
    author: "Carlos Silva",
    date: "2025-05-10",
    imageUrl: "/placeholder.svg",
    tags: ["irrigação", "sustentabilidade", "tecnologia"]
  },
  {
    id: 2,
    title: "Mercado de orgânicos cresce 25% no último ano",
    excerpt: "O consumo de produtos orgânicos bateu recorde e produtores comemoram...",
    content: "O consumo de produtos orgânicos bateu recorde e produtores comemoram o aumento na demanda. Especialistas atribuem o crescimento à maior conscientização dos consumidores sobre saúde e meio ambiente...",
    author: "Ana Costa",
    date: "2025-05-08",
    imageUrl: "/placeholder.svg",
    tags: ["orgânicos", "mercado", "crescimento"]
  },
  {
    id: 3,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país...",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  },
  {
    id: 4,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país...",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  },
  {
    id: 5,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país...",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  },
  {
    id: 6,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país...",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  }
];

const Blog = () => {
  const [posts] = useState<BlogPost[]>(mockPosts);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-agrogoods-primary">Blog AgroGoods</h1>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Acompanhe as últimas notícias e tendências do mundo agro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <CardTitle className="text-xl mb-2 text-agrogoods-primary">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.id}`} className="text-agrogoods-secondary font-medium hover:text-agrogoods-primary transition-colors">
                  Ler mais
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
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