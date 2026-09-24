/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Projects",
    number: 5,
  },
  {
    label: "Technical Tools",
    number: 8,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rasyid Abdul Ra'uf, an Informatics Engineering
            graduate building my career in Data Analytics and Quality Assurance.
            I work with SQL, Excel, and Power BI to explore, clean, validate,
            analyze, and visualize data, while my software development
            background gives me a practical understanding of databases,
            application data flows, business logic, and REST APIs. Through
            development and academic projects, I have also gained hands-on
            experience in functional testing, input validation, API response
            checking, and role-based access validation. This combination allows
            me to approach problems from both a data and application
            perspective. I’m continuously building practical projects to
            strengthen my skills in data analytics, data validation, API
            testing, and application quality while preparing for opportunities
            in Data Analytics and QA.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
