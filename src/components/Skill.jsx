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
    imgSrc: "/public/images/html5.svg",
    label: "HTML",
    desc: "Markup Language",
  },
  {
    imgSrc: "/public/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/public/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/public/images/nginx.svg",
    label: "Nginx",
    desc: "Web Server",
  },
  {
    imgSrc: "/public/images/php.svg",
    label: "PHP",
    desc: "Server-side Language",
  },
  {
    imgSrc: "/public/images/mysql2.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/public/images/laravel2.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/public/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
  },
  {
    imgSrc: "/public/images/github.svg",
    label: "Github",
    desc: "Version Control",
  },
  {
    imgSrc: "/public/images/linux.svg",
    label: "Linux",
    desc: "Operating System",
  },
  {
    imgSrc: "/public/images/nodejs.svg",
    label: "Node JS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/public/images/react.svg",
    label: "React JS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/public/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "(still learning)",
  },
  {
    imgSrc: "/public/images/flutter.svg",
    label: "Flutter",
    desc: "(still learning)",
  },
  {
    imgSrc: "/public/images/bootstrap.svg",
    label: "Bootstrap 5",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/public/images/firebase.svg",
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
