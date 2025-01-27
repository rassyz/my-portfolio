/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html5.svg",
    label: "HTML",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nginx.svg",
    label: "Nginx",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Server-side Language",
  },
  {
    imgSrc: "/images/mysql2.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/laravel2.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/images/github.svg",
    label: "Github",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/linux.svg",
    label: "WSL2",
    desc: "Operating System",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "Node JS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React JS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/images/flutter.svg",
    label: "Flutter",
    desc: "(still learning)",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap 5",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Cloud Services",
  },
];

const Skill = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
