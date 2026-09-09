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
    label: "Analytics Tools",
    number: 4,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rasyid Abdul Ra'uf, an aspiring Data Analyst with
            a background in Informatics Engineering and web development. I’m
            interested in turning data into meaningful insights that can support
            better business decisions. I work with SQL, Excel, and Power BI to
            explore, clean, analyze, and visualize data. My background in web
            development also gives me a strong technical foundation and helps me
            understand how data flows through applications and databases. I’m
            continuously building practical projects to strengthen my analytical
            skills and prepare for a career in data analytics.
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
