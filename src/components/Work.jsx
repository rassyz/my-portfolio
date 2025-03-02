/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/buah.png",
    title: "Full stack e-commerce 'Just Juice'",
    tags: ["MVC", "Development", "Laravel", "Bootstrap 5", "Mid Trans"],
    projectLink: "https://github.com/rassyz/toko-jus",
  },
  {
    imgSrc: "/images/happyly.png",
    title: "Web Mental Health",
    tags: ["Bootstrap 5", "Firebase Auth", "Firebase Realtime Database"],
    projectLink: "https://happyly-20978.web.app/",
  },
  {
    imgSrc: "/images/wellnes.png",
    title: "Web Reproductive Health",
    tags: ["Bootstrap 5", "Firebase Auth", "Firebase Realtime Database"],
    projectLink: "https://reproductive-wellnes-139ec.web.app/",
  },
  {
    imgSrc: "/images/shoes.png",
    title: "Web E-Commerce Sepatu",
    tags: ["CMS", "Laravel", "Filament", "Bootstrap 5"],
    projectLink: "https://github.com/rassyz/R4R-Shoes",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
