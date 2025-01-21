/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
  {
    label: "Years of experience",
    number: 0,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="tetx-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rasyid Abdul Ra'uf, a Informatics Engineering
            student at Esa Unggul University, Tangerang. I have a strong passion
            for technology and programming. Currently, I’m diving deeper into
            the world of web development and mobile application development to
            build a solid foundation for my career in the tech industry. I
            believe technology has the power to drive positive change, and I’m
            excited to contribute to meaningful innovations. Through continuous
            learning and hard work, I strive to create impactful and practical
            solutions for real-world challenges. Outside academics, I’m always
            eager to expand my skills through projects, collaborations, and
            exploring new technologies. Let’s connect and share ideas!
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
