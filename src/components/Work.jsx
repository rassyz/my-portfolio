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
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/sedukopi-analytics.png",
    title: "Sedukopi Sales & Operations Analytics",
    description:
      "Sales performance and outlet operations analysis to uncover revenue trends, peak hours, and business insights.",
    tags: ["SQL", "Excel", "Power BI"],
    projectLink: "https://github.com/rassyz/sedukopi-data-analytics",
    category: ["data-analyst"],
  },
  {
    imgSrc: "/images/buah.png",
    title: "Full stack e-commerce 'Just Juice'",
    description:
      "A full-stack e-commerce website developed to manage products, transactions, and online payments.",
    tags: ["MVC", "Development", "Laravel", "Bootstrap 5", "Mid Trans"],
    projectLink: "https://github.com/rassyz/toko-jus",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/happyly.png",
    title: "Web Mental Health",
    description:
      "A web application providing accessible mental health information and resources for users.",
    tags: ["Bootstrap 5", "Firebase Auth", "Firebase Realtime Database"],
    projectLink: "https://happyly-20978.web.app/",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/wellnes.png",
    title: "Web Reproductive Health",
    description:
      "A web-based platform providing reproductive health information and educational resources.",
    tags: ["Bootstrap 5", "Firebase Auth", "Firebase Realtime Database"],
    projectLink: "https://reproductive-wellnes-139ec.web.app/",
    category: ["web-development"],
  },
  {
    imgSrc: "/images/shoes.png",
    title: "Web E-Commerce Sepatu",
    description:
      "An e-commerce website for managing and presenting footwear products through a web-based platform.",
    tags: ["CMS", "Laravel", "Filament", "Bootstrap 5"],
    projectLink: "https://github.com/rassyz/R4R-Shoes",
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

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Selected Projects</h2>

        <div className="flex flex-col gap-5 mt-3 mb-8 md:flex-row md:items-end md:justify-between">
          <p className="text-zinc-400 max-w-[50ch] reveal-up">
            A selection of projects showcasing my experience in data analysis
            and web development.
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
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          {filteredWorks.map(
            ({ imgSrc, title, description, tags, projectLink }, index) => (
              <ProjectCard
                key={title}
                imgSrc={imgSrc}
                title={title}
                description={description}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up project-filter-card"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
