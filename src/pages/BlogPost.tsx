
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Share2, ThumbsUp } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

// Mock data - in a real app this would come from an API or database
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Novas técnicas de irrigação sustentável ganham destaque",
    excerpt: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura...",
    content: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura sem comprometer a produtividade das colheitas. Estas técnicas combinam sensores IoT com análise de dados em tempo real para ajustar o fluxo de água conforme as necessidades específicas de cada área da plantação.\n\nOs sensores, distribuídos estrategicamente pelos campos, monitoram constantemente a umidade do solo em diferentes profundidades, enviando dados para um sistema central de análise. Este sistema, por sua vez, utiliza algoritmos de inteligência artificial para determinar o momento exato e a quantidade ideal de água a ser liberada.\n\nTestes realizados em fazendas de médio porte mostraram que essa abordagem pode reduzir o consumo de água em até 40% comparado aos métodos tradicionais de irrigação, além de aumentar a produtividade em cerca de 15%. Além da economia de recursos hídricos, o sistema também contribui para a redução no uso de energia elétrica necessária para bombear a água.\n\n\"É uma verdadeira revolução na forma como pensamos a irrigação\", afirma a Dra. Márcia Oliveira, coordenadora da pesquisa. \"Nossa meta era encontrar um equilíbrio entre eficiência produtiva e sustentabilidade, e os resultados superaram nossas expectativas\".\n\nO custo de implementação do sistema ainda é um desafio para pequenos produtores, mas especialistas acreditam que, com a popularização da tecnologia, os preços tendem a se tornar mais acessíveis nos próximos anos. Enquanto isso, cooperativas agrícolas já estão estudando formas de viabilizar o acesso à tecnologia para seus associados através de compras coletivas e compartilhamento de recursos.",
    author: "Carlos Silva",
    date: "2025-05-10",
    imageUrl: "/placeholder.svg",
    tags: ["irrigação", "sustentabilidade", "tecnologia"]
  },
  {
    id: 2,
    title: "Mercado de orgânicos cresce 25% no último ano",
    excerpt: "O consumo de produtos orgânicos bateu recorde e produtores comemoram...",
    content: "O consumo de produtos orgânicos bateu recorde e produtores comemoram o aumento na demanda. Especialistas atribuem o crescimento à maior conscientização dos consumidores sobre saúde e meio ambiente.\n\nSegundo dados da Associação Brasileira de Agricultura Orgânica (ABAO), o setor movimentou aproximadamente R$ 6,5 bilhões em 2024, um aumento de 25% em relação ao ano anterior. O número de produtores certificados também cresceu, chegando a mais de 30 mil em todo o país.\n\nAs redes de supermercados têm ampliado significativamente o espaço dedicado a estes produtos, e feiras especializadas se multiplicam nos centros urbanos. Além disso, plataformas de e-commerce focadas exclusivamente em orgânicos registraram um crescimento de mais de 200% nas vendas online durante o último ano.\n\n\"O consumidor está cada vez mais interessado não apenas no produto final, mas em todo o processo produtivo por trás dele\", explica João Mendes, analista de mercado especializado no setor agrícola. \"As pessoas querem saber de onde vem seu alimento e como ele foi produzido\".\n\nPara atender a essa demanda crescente, muitos agricultores convencionais estão iniciando a transição para o modelo orgânico. No entanto, o processo não é simples e pode levar até três anos para que uma área seja certificada como orgânica, período durante o qual o produtor enfrenta os desafios da adaptação sem poder comercializar seus produtos com o selo orgânico.\n\n\"É um investimento a longo prazo, mas que tem se mostrado extremamente vantajoso\", afirma Mariana Costa, que completou sua transição para o cultivo orgânico há dois anos. \"A margem de lucro é significativamente maior e a demanda é constante\".",
    author: "Ana Costa",
    date: "2025-05-08",
    imageUrl: "/placeholder.svg",
    tags: ["orgânicos", "mercado", "crescimento"]
  },
  {
    id: 3,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país.\n\nO programa, batizado de \"Cultivar Brasil\", inclui linhas de crédito com juros reduzidos, subsídios para aquisição de equipamentos e insumos, além de um amplo sistema de assistência técnica especializada. Uma das novidades é a criação de um fundo garantidor que permitirá acesso ao crédito mesmo para produtores que não possuem todas as garantias tradicionalmente exigidas pelas instituições financeiras.\n\n\"Nossa meta é fortalecer a agricultura familiar, que é responsável por 70% dos alimentos que chegam à mesa dos brasileiros\", declarou a ministra da Agricultura durante o lançamento do programa. \"Queremos criar condições para que esses produtores possam aumentar sua produtividade e renda de forma sustentável\".\n\nOutro ponto importante do pacote é o incentivo à digitalização das propriedades rurais de pequeno porte. O governo vai subsidiar o acesso à internet em áreas remotas e oferecer treinamento para que os agricultores possam utilizar aplicativos de gestão agrícola e comercialização direta.\n\n\"É uma oportunidade de modernizar nossa produção e eliminar intermediários\", comenta José Pereira, agricultor familiar do interior de Minas Gerais. \"Com acesso à tecnologia, podemos negociar melhor nossos produtos e aumentar nossa margem de lucro\".\n\nAs inscrições para o programa começam no próximo mês e serão realizadas através das agências regionais da EMATER e dos sindicatos rurais. A expectativa do governo é que os primeiros recursos comecem a ser liberados ainda neste semestre.",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  }
];

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now we'll just simulate the loading and use our mock data
    setIsLoading(true);
    setTimeout(() => {
      const foundPost = mockPosts.find(p => p.id === Number(id));
      setPost(foundPost || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  // Format content with paragraphs
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));
  };

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
              <h1 className="text-3xl md:text-4xl font-bold text-agrogoods-primary mb-4">
                {post.title}
              </h1>
              
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
              f 
              <div className="prose prose-lg max-w-none mb-8 text-gray-800 text-justify">
                {formatContent(post.content)}
              </div>
              f 
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
                <Button className="bg-agrogoods-primary hover:bg-agrogoods-dark">
                  Voltar para o blog
                </Button>
              </Link>
            </div>
          )}
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

export default BlogPostPage;