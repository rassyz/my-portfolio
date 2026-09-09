/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  // =========================
  // Data Analyst
  // =========================
  {
    imgSrc: "/images/sql.svg",
    label: "SQL",
    desc: "Data Querying & Analysis",
    category: ["data-analyst"],
  },
  {
    imgSrc: "/images/excel.svg",
    label: "Excel",
    desc: "Data Analysis & Reporting",
    category: ["data-analyst"],
  },
  {
    imgSrc: "/images/power-bi.svg",
    label: "Power BI",
    desc: "Data Visualization & BI",
    category: ["data-analyst"],
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Data Analysis",
    category: ["data-analyst"],
  },
  {
    imgSrc: "/images/mysql2.svg",
    label: "MySQL",
    desc: "Database & SQL",
    category: ["data-analyst", "web-development"],
  },
  {
    imgSrc: "/images/navicat.png",
    label: "Navicat Premium",
    desc: "Database Management",
    category: ["data-analyst"],
  },

  // =========================
  // Web Development
  // =========================
  {
    imgSrc: "/images/html5.svg",
    label: "HTML",
    desc: "Markup Language",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/nginx.svg",
    label: "Nginx",
    desc: "Web Server",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Server-side Language",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/laravel2.svg",
    label: "Laravel",
    desc: "PHP Framework",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containerization",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/github.svg",
    label: "Github",
    desc: "Version Control",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/linux.svg",
    label: "WSL2",
    desc: "Operating System",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/react.svg",
    label: "React JS",
    desc: "JavaScript Library",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "Tailwind CSS",
    desc: "CSS Framework",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/flutter.svg",
    label: "Flutter",
    desc: "UI Framework",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap 5",
    desc: "CSS Framework",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Cloud Services",
    category: ["web-development"],
  },
];

const filterItems = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Data Analyst",
    value: "data-analyst",
  },
  {
    label: "Web Development",
    value: "web-development",
  },
];

const Skill = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skillItem
      : skillItem.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I Use</h2>

        <div className="flex flex-col gap-5 mt-3 mb-8 md:flex-row md:items-end md:justify-between">
          <p className="text-zinc-400 max-w-[50ch] reveal-up">
            A collection of tools I use for data analysis, visualization, and
            web development.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {filterItems.map(({ label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveFilter(value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300 ease-out
                  ${
                    activeFilter === value
                      ? "bg-zinc-100 text-zinc-900 shadow-sm"
                      : "bg-zinc-800/70 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          key={activeFilter}
          className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
        >
          {filteredSkills.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={label}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up skill-filter-card"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
