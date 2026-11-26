/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Projects",
    number: 7,
  },
  {
    label: "Technical Tools",
    number: 20,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[85ch]">
            I&apos;m Rasyid Abdul Ra'uf, an Informatics Engineering fresh
            graduate (GPA 3.82) focused on Data Engineering and Data Quality. My
            work experience is a 5-month internship as a Laravel Developer
            Intern at PT Winnicode Garuda Teknologi, building web applications
            with PHP, Laravel, and MySQL. Beyond that, my data work comes from
            individual projects: an ETL/ELT data pipeline project, a sales
            analysis of 5,000 transactions from 20 outlets for Sedukopi,
            starting with data quality checks, then a Power BI dashboard
            covering revenue trends and outlet performance, REST API testing for
            an Academic Information System using Postman, and my final-year
            thesis Attendify, a geofencing-based attendance system built with
            Laravel, Flutter, and PostgreSQL/PostGIS. I work mainly with SQL and
            Python, and I care about data that is validated before it is used
            for decisions. I also operate AI agents to automate daily tasks. I'm
            currently open to opportunities in Data Engineering, Data Quality,
            and other SQL-focused data roles.
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
