import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";
import { FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export const knowledgeData = [
  {
    id: 1,
    content: 'HTML é uma linguagem de marcação utilizada para criar a estrutura de páginas web, definindo elementos como cabeçalhos, parágrafos e imagens.',
    icon: <TbBrandHtml5 className="text-green w-14 h-14"/>
  },
  {
    id: 2,
    content: 'CSS é uma linguagem de folha de estilo usada para controlar a apresentação dos elementos HTML, aprimorando aspectos visuais como layout e design.',
    icon: <TbBrandCss3 className="text-green w-14 h-14"/>
  },
  {
    id: 3,
    content: 'JavaScript é uma linguagem de programação que possibilita conteúdo dinâmico em sites, facilitando a interatividade e funcionalidades no lado do cliente.',
    icon: <IoLogoJavascript className="text-green w-14 h-14"/>
  },
  {
    id: 4,
    content: 'Sass é uma xtensão do CSS com recursos adicionais, tornando folhas de estilo mais fáceis de manter e fornecendo ferramentas como variáveis e regras aninhadas.',
    icon: <FaSass className="text-green w-14 h-14"/>
  },
  {
    id: 5,
    content: 'MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) usado para armazenar e gerenciar dados estruturados, comumente utilizado em aplicações web.',
    icon: <DiMysql className="text-green w-14 h-14"/>
  },
  {
    id: 6,
    content: 'React é uma biblioteca JavaScript para construir interfaces de usuário, enfatizando o desenvolvimento baseado em componentes para aplicações front-end eficientes e escaláveis.',
    icon: <FaReact className="text-green w-14 h-14"/>
  },
  {
    id: 7,
    content: 'TaiwlindCSS é uma estrutura de CSS "utility-first" que simplifica a estilização fornecendo classes pré-definidas, permitindo o desenvolvimento rápido com um sistema de design personalizável.',
    icon: <SiTailwindcss className="text-green w-14 h-14"/>
  },
  {
    id: 8,
    content: 'NodeJS é um ambiente de execução de JavaScript no lado do servidor, possibilitando a execução de código JavaScript no servidor e facilitando o desenvolvimento escalável no back-end.',
    icon: <FaNodeJs className="text-green w-14 h-14"/>
  }
]