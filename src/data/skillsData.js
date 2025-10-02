export const skillsData = {
  frontend: [
    { name: "HTML5", level: 5, icon: "SiHtml5", color: "#E34F26" },
    { name: "JavaScript", level: 5, icon: "SiJavascript", color: "#F7DF1E" },
    { name: "CSS3", level: 4, icon: "SiCss3", color: "#1572B6" },
    { name: "Bootstrap", level: 3, icon: "SiBootstrap", color: "#7952B3" },
    { name: "Twig", level: 3, icon: "GiHighGrass", color: "#008080" },
    { name: "React", level: 2, icon: "SiReact", color: "#61DAFB" },
    { name: "Tailwind", level: 2, icon: "SiTailwindcss", color: "#06B6D4" },
  ],
  backend: [
    { name: "PHP", level: 4, icon: "SiPhp", color: "#4F5B93" },
    { name: "Java", level: 4, icon: "FaJava", color: "#007396" },
    { name: "MySQL", level: 4, icon: "SiMysql", color: "#FFFFFF" },
    { name: "Spring Boot", level: 3, icon: "SiSpringboot", color: "#6DB33F" },
    { name: "Symfony", level: 3, icon: "SiSymfony", color: "#47A248" },
    { name: "Node.js", level: 3, icon: "SiNodedotjs", color: "#339933" },
    { name: "PostgreSQL", level: 3, icon: "SiPostgresql", color: "#336791" },
  ],
  tools: [
    { name: "VS Code", level: 5, icon: "BiLogoVisualStudio", color: "#007ACC" },
    { name: "ChatGPT", level: 5, icon: "SiOpenai", color: "#8DD6F9" },
    { name: "Git", level: 4, icon: "SiGit", color: "#F05032" },
    { name: "Copilot", level: 4, icon: "SiGithubcopilot", color: "white" },
    { name: "PHPStorm", level: 3, icon: "SiPhpstorm", color: "violet" },
    { name: "Docker", level: 3, icon: "SiDocker", color: "#2496ED" },
    { name: "DigitalOcean", level: 3, icon: "SiDigitalocean", color: "#0080FF" },
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "CardsNshots",
    description: "Party game de cartas multijugador en tiempo real, implementado con Mercure y desarrollado con Symfony y PostgreSQL.",
    demoUrl: "#",
    githubUrl: "https://github.com/solidsnake1395/CardsNshots",
    imageUrl: "https://i.imgur.com/KAq17Ns.png"
  },
  {
    id: 2,
    title: "Gestor de Guardias",
    description: "Aplicación web para la gestión de guardias en centros educativos, fácilmente adaptable a otros ámbitos. Desarrollada con Vue y una API REST basada en JSON Server.",
    demoUrl: "https://gestionguardias.onrender.com/",
    githubUrl: "https://github.com/solidsnake1395/AppGuardias",
    imageUrl: "https://i.imgur.com/xTcJTYk.png"
  },
  {
    id: 3,
    title: "Daily Movies",
    description: "Aplicación web en PHP que consume la API de TMDb para mostrar estrenos diarios y generar recomendaciones de películas al azar.",
    demoUrl: "https://aitormovies.ct.ws/",
    githubUrl: "https://github.com/solidsnake1395/minicursoPHP",
    imageUrl: "https://i.imgur.com/yHC3Rar.png"
  }
  
];