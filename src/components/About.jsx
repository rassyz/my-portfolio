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
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="tetx-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rasyid Abdul Ra'uf, a student informatics
            engineering at Esa Unggul University, Tangerang. I have a passion
            for web development and love to create new things. I am a
            self-taught developer and have been working in the field for over 2
            years. I am a quick learner and always eager to learn new
            technologies.
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
              src="/public/images/logo.svg"
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
