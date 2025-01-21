/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Pembuatan Web nya menarik, bagus, mudah untuk diakses dan gampang untuk dipahami. Asli bener-bener diluar ekspetasi sih, web terkesan simple tapi bener-bener rapih dan mudah untuk orang lain pahami, fitur-fitur yang unik dan format yg simple jadi memudahkan pengguna web nya gampang mempelajari. Perpaduan warna dan keestetikannya punya cemistry sendiri dan terkesan hangat, mendukung, membuat pengguna lebih nyaman dengan web nya, pokok nya bagus dan memuaskan.",
    name: "Nesya ",
    imgSrc: "/images/cewe.png",
    company: "Mahasiswi Keperawatan Universitas Esa Unggul",
  },
  {
    content:
      "Proses pembuatan web ReproductiveWellnes cepat. Apabila ada revisi selalu cepat tanggap dan cepat membenahi. Enak dalam berkomunikasi sehingga proses pembuatan web cepat terselesaikan, selain itu juga web nya sesuai dengan apa yang kita inginkan. Dengan harga yang terjangkau dan hasil yang sangat memuaskan sangat recommended.",
    name: "Dela Nurfitri",
    imgSrc: "/images/cewe.png",
    company: "Mahasiswi Keperawatan Universitas Esa Unggul",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "0% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="review" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
