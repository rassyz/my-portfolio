/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg shrink-0">
              <img
                src="/images/avatar-rasyid.jpg"
                width={40}
                height={40}
                alt="Foto Rasyid Abdul Ra'uf"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Open to Data Analyst Internships
            </div>
          </div>

          <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Rasyid Abdul Ra'uf, Aspiring Data Analyst with a Web Development
            Background
          </h1>

          <p className="max-w-[55ch] text-zinc-400 text-base leading-relaxed mb-8 lg:mb-10">
            Turning data into actionable insights through SQL, Python, Excel,
            and Power BI, supported by a strong foundation in web development.
          </p>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/images/cv-rasyid-2.pdf"
              label="Download CV"
              icon="download"
              download={true}
            />
            <ButtonOutline
              href="#work"
              label="View Projects"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 
          via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/images/rasyid.png"
              width={656}
              height={800}
              alt="Rasyid Abdul Ra'uf"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
