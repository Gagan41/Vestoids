import React from 'react';

const Quota = () => {
  const openWhatsApp = () => {
    const phoneNumber = "916361725397"; // Replace with your phone number
    const message = "Hello, I would like to get a quote!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex items-center justify-center md:my-20  py-20 md:-mt-20 -mt-20">
    {/* Main Content */}
    <div className="text-center max-w-md mx-auto p-4 relative z-10">
      <p className="text-l font-medium text-white mb-1">Get Your Free Quota</p>
      <h1 className="text-3xl font-bold mb-2 text-white">Grow With Us Now</h1>
      <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-4" />
      <button
        onClick={openWhatsApp}
        className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-200"
      >
        Get Quota Now
      </button>
    </div>
  </div>
  );
};

export default Quota;
