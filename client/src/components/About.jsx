import React from "react";
import FlexibleLeasesImg from "../../images/editing1.jpg";
import HappinessGuaranteeImg from "../../images/seo1.jpg";
import HouseCleaningImg from "../../images/smm1.jpg";
import RoommateImg from "../../images/web1.jpg";
import { useEffect, useRef, useState } from "react";



export default function AnimatedSection() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`container mx-auto px-4 md:px-20 py-5 justify-center items-center md:mb-10 transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col gap-10 mf:flex-row justify-between md:p-20 py-12 px-4 w-full">
        {/* Left Section: Grid of Images */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 items-center">
          {/* First Image Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[4/3]">
            <img
              src={FlexibleLeasesImg}
              alt="Flexible Leases"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Editing</h3>
            </div>
          </div>
          {/* Second Image Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[5/6]">
            <img
              src={HappinessGuaranteeImg}
              alt="Flexible Leases"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">SEO</h3>
            </div>
          </div>
          {/* Third Image Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[3/4]">
            <img
              src={HouseCleaningImg}
              alt="Flexible Leases"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">Social Mediia <br />Management</h3>
            </div>
          </div>
          {/* Fourth Image Card */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden aspect-[5/4]">
            <img
              src={RoommateImg}
              alt="Flexible Leases"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">web</h3>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="flex flex-col justify-center w-full mt-10 mf:mt-0">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-white">
            Flexibility and options to suit your{" "}
            <span className="text-pink-500">business.</span>
          </h2>
          <p className="text-base font-light text-white sm:text-lg mb-8 leading-relaxed text-justify">
            At Vestoids Media Agency, our goal is to drive innovation and
            elevate your brand to new heights. We are dedicated to pushing the
            boundaries of digital transformation, constantly seeking new ways to
            engage audiences, enhance brand presence, and deliver measurable
            impact. Our agency thrives on creativity, adaptability, and
            forward-thinking strategies, ensuring that every step we take helps
            your brand grow, evolve, and succeed in an ever-changing digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
}