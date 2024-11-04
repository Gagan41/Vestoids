import Image1 from "../../images/service.jpg"; // Make sure this path is correct

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6 relative flex flex-col lg:flex-row justify-between md:gap-10">
      {/* Heading Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-10 md:pb-10">
        <h2 className="text-3xl font-bold text-white mb-2">
          Services
        </h2>
        <div className="h-[5px] w-16 bg-pink-900 mx-auto my-2" />
      </div>

      {/* Text Content Section */}
      <div className="lg:w-2/3 flex flex-col gap-x-2">
        <p className="text-base font-light text-white sm:text-lg mb-8 leading-relaxed text-justify">
        Vestoids-Medis Agency is dedicated to elevating your brand in the digital landscape. We offer content creation, social media management, SEO analysis, and advertising to help your brand connect with audiences and stand out.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
          <p className="text-white text-base">✓ Content Creation</p>
          <p className="text-white text-base">✓ Social media Management</p>
          <p className="text-white text-base">✓ SEO Analysis</p>
          <p className="text-white text-base">✓ Advertizing</p>
          <p className="text-white text-base">✓ Email Marketing</p>
          <p className="text-white text-base">✓ Web design</p>
        </div>
        <p className="text-base font-light text-white sm:text-lg mb-8 mt-8 leading-relaxed text-justify">
        Our services also include web design and email marketing, ensuring a cohesive and engaging online presence. By blending creativity with data-driven strategies, Vestoids-Media supports brands in growing and thriving online.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        {/* Image only */}
        <img
          src={Image1}
          alt="Service Graph"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Services;
