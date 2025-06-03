import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { BlogPost as BlogPostType } from "@/types/blog";

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://agrogoods-blog-api.vercel.app/api/blog/${id}`);
        const data = response.data;

        setPost({
          id: data.id,
          title: data.titulo,
          summary: data.resumo,
          content: data.conteudo,
          author: data.autor,
          tags: data.tags ? data.tags.split(",") : [],
          date: data.criadoEm,
        });
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  const formatContent = (content: string) =>
    content.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph}
      </p>
    ));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-agrogoods-secondary hover:text-agrogoods-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o blog
          </Link>

          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-64 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ) : post ? (
            <article>
              <h1 className="text-3xl md:text-4xl font-bold text-agrogoods-primary mb-4">{post.title}</h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}`} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8 text-gray-800 text-justify">
                {formatContent(post.content)}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Artigo não encontrado</h2>
              <p className="text-gray-600 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
              <Link to="/blog">
                <Button className="bg-agrogoods-primary hover:bg-agrogoods-dark">Voltar para o blog</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="https://w7startup.com.br/img/logo_agrogoods.png" alt="logo_agrogoods" className="w-56" />
              <div className="flex space-x-4 px-16 mt-4">
                <a href="https://www.instagram.com/agrogoods/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-agrogoods-primary">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/agrogoods/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-agrogoods-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><a href="/privacidade" className="text-gray-600 hover:text-agrogoods-primary">Política de Privacidade</a></li>
                <li><a href="/termos" className="text-gray-600 hover:text-agrogoods-primary">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-agrogoods-primary mr-2" />
                  <a href="tel:16997772276" className="text-gray-600 hover:text-agrogoods-primary">(16) 99777-2276</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-agrogoods-primary mr-2" />
                  <a href="mailto:contato@agrogoods.com.br" className="text-gray-600 hover:text-agrogoods-primary">contato@agrogoods.com.br</a>
                </li>
              </ul>
            </div>
          </div>

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

export default BlogPostPage;
