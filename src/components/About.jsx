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
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&apos;m Rasyid Abdul Ra'uf, an Informatics Engineering fresh
            graduate (GPA 3.82) working at the intersection of Quality
            Assurance, Data, and Software Development. My foundation is in
            software development, I completed a 5-month internship as a Laravel
            Developer Intern at PT Winnicode Garuda Teknologi, building and
            testing web applications with PHP, Laravel, and MySQL. Today I focus
            on quality and data validation: using SQL, Excel, and Power BI to
            clean, validate, and check data before it's used. In my Sedukopi
            project, I worked with 5,000 sales transactions from 20 outlets,
            starting with data quality checks, then examining revenue trends,
            average order value, and outlet performance. On the application
            side, I test REST APIs with Postman, functional testing, input
            validation, API response checking, and role-based access validation,
            as I did in my Academic Information System API project and my
            final-year thesis Attendify, a geofencing-based attendance system
            built with Laravel, Flutter, and PostgreSQL/PostGIS. This
            combination lets me trace a problem from the interface down to the
            data itself. I'm currently open to opportunities in Quality
            Assurance, Data Validation, and Software Development.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl"></span>
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
