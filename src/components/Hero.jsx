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
    <section id="home" className="pt-24 lg:pt-36">
      <div
        className="
      container
      items-center
      lg:grid
      lg:grid-cols-[minmax(0,1.25fr)_minmax(400px,0.75fr)]
      lg:gap-10
      xl:gap-14
    "
      >
        {/* LEFT CONTENT */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg shrink-0">
              <img
                src="/images/foto-rasyid-biru.png"
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
              Open to Data & QA Opportunities
            </div>
          </div>

          {/* HEADLINE */}
          <h1
            className="
            headline-1
            mt-5
            mb-8
            lg:mb-10

            !text-[40px]
            sm:!text-[46px]
            lg:!text-[clamp(36px,2.9vw,44px)]

            !leading-[1.08]
          "
          >
            <span className="block lg:whitespace-nowrap">
              Rasyid Abdul Ra'uf,
            </span>

            <span className="block lg:whitespace-nowrap">
              Aspiring Data Analyst & QA
            </span>

            <span className="block lg:whitespace-nowrap">
              with a Software Development
            </span>

            <span className="block">Background</span>
          </h1>

          <p className="max-w-[55ch] text-zinc-400 text-base leading-relaxed mb-8 lg:mb-10">
            Turning data into meaningful insights and validating application
            quality through SQL, databases, REST APIs, and data visualization.
          </p>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/docs/cv-rasyid.pdf"
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

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-end items-center min-w-0">
          <figure
            className="
          w-full
          max-w-[500px]
          bg-gradient-to-t
          from-sky-400
          via-25%
          via-sky-400/40
          to-65%
          rounded-[60px]
          overflow-hidden
        "
          >
            <img
              src="/images/rasyid-bg.png"
              width={656}
              height={800}
              alt="Rasyid Abdul Ra'uf"
              className="w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
