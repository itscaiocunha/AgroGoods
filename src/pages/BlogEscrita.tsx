
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { BlogPost } from "../types/blog";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

const BlogWrite = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    imageUrl: "/placeholder.svg",
    tags: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    // For now, we'll just show a success message and redirect
    
    const newPost: Partial<BlogPost> = {
      ...formData,
      date: new Date().toISOString().split('T')[0],
      tags: formData.tags.split(',').map(tag => tag.trim())
    };
    
    console.log('New blog post:', newPost);
    
    toast({
      title: "Artigo criado com sucesso!",
      description: "O artigo foi publicado no blog da AgroGoods."
    });
    
    // Redirect to the blog page
    setTimeout(() => {
      navigate('/blog');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-agrogoods-primary mb-8">Escrever novo artigo</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título do artigo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea 
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Um breve resumo do artigo (aparecerá na listagem)"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea 
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Conteúdo completo do artigo"
                className="min-h-[250px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="author">Autor</Label>
              <Input 
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nome do autor"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Tags separadas por vírgula (ex: agricultura, tecnologia, sustentabilidade)"
              />
            </div>
            
            <div className="pt-4 flex space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/blog')}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="bg-agrogoods-primary hover:bg-agrogoods-dark"
              >
                Publicar artigo
              </Button>
            </div>
          </form>
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

export default BlogWrite;