import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../images/logo1.png";

const Contact = () => {
  const [modalContent, setModalContent] = useState(null);

  // Content for each section
  const termsContent = `
   Terms & Conditions 

Welcome to Vestoids Media Agency. By accessing or using our services, you agree to comply 
with and be bound by the following terms and conditions. Please read them carefully. 

1. Services Offered 
Vestoids Media Agency provides a range of digital marketing services, including but not limited 
to web design, SEO, content creation, advertising, email marketing, video editing, and social 
media management. The scope and details of the services will be outlined in individual contracts 
or agreements with each client. 

2. User Conduct 
You agree to use our website and services in a lawful manner. Any misuse of our content, 
services, or intellectual property will result in the termination of services and potential legal 
action. 

3. Payment Terms 
All services are offered on a contract basis, with payment terms agreed upon with the client 
before the start of any project. Non-payment of fees will result in suspension of services. 

4. Intellectual Property 
All content created by Vestoids Media Agency remains our intellectual property unless otherwise 
stated in a written agreement. Unauthorized reproduction or distribution of our content is strictly 
prohibited. 

5. Limitation of Liability 
Vestoids Media Agency is not liable for any direct or indirect damages arising from the use of 
our services or website. We make no guarantees about the success of any marketing campaigns, 
and results may vary based on external factors. 

6. Amendments 
Vestoids Media Agency reserves the right to update these terms at any time. Clients will be 
notified of significant changes.
  `;

  const privacyContent = `
    Privacy Policy 

At Vestoids Media Agency, we are committed to protecting your personal information. This 
privacy policy outlines how we collect, use, and safeguard your data. 

1. Information We Collect 
We collect personal information such as your name, email address, phone number, and other 
contact details when you fill out our forms or subscribe to our services. 

2. How We Use Your Information 
We use your personal information to: 
• Communicate with you about our services. 
• Process transactions and deliver services. 
• Improve our website and offerings. 

3. Sharing Your Information 
We do not sell, trade, or share your personal information with third parties without your consent, 
except when required by law or necessary to provide our services (e.g., payment processors). 

4. Data Security 
We take appropriate measures to protect your personal data from unauthorized access, alteration, 
or disclosure. However, no system is entirely secure, and we cannot guarantee the complete 
security of your information. 

5. Your Rights 
You have the right to: 
• Access the personal data we hold about you. 
• Request corrections or updates to your information. 
• Request the deletion of your data. 

6. Cookies 
Our website may use cookies to enhance user experience and track site usage. You can opt out of 
cookie tracking through your browser settings.
  `;

  const disclaimerContent = `
   Disclaimer 

The information provided on this website is for general informational purposes only. Vestoids 
Media Agency makes no representations or warranties of any kind regarding the accuracy, 
reliability, or suitability of the information and services provided. 

1. No Guarantees of Success 
While we strive to deliver exceptional results, Vestoids Media Agency does not guarantee 
specific outcomes or returns on investment (ROI) from our digital marketing services. Success 
depends on a variety of factors, including market conditions, competition, and the quality of the 
client’s product or service. 

2. Third-Party Links 
Our website may contain links to external sites that are not operated by us. We have no control 
over the content or practices of these sites and assume no responsibility for them. 

3. Changes to Content 
Vestoids Media Agency reserves the right to modify, update, or remove content on our website 
at any time without notice. 

4. Limitation of Liability 
To the fullest extent permitted by law, Vestoids Media Agency will not be liable for any 
damages arising from the use of our services, including but not limited to direct, indirect, 
incidental, punitive, or consequential damages.
  `;

  const playVideo = () => {
    const videoUrl = "https://drive.google.com/uc?id=your_video_id"; // Replace with your Google Drive video link
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.style.position = "fixed";
    videoElement.style.top = "0";
    videoElement.style.left = "0";
    videoElement.style.width = "100vw";
    videoElement.style.height = "100vh";
    videoElement.style.zIndex = "10000";
    videoElement.play();
    document.body.appendChild(videoElement);

    videoElement.onended = () => {
      document.body.removeChild(videoElement);
    };
  };

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="mt-20">
      {/* Header Section with centered h2 and reduced gap */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Innovation</h2>
        <div className="h-[5px] w-16 bg-pink-900 mx-auto my-2" />
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col lg:flex-row items-center px-6 md:px-20">
        {/* Testimonial */}
        <div className="flex-1 items-center md:pl-15">
          <p className="leading-relaxed text-white text-justify mt-4 font-light text-base">
            At Vestoids Media Agency, we specialize in transforming e-commerce
            and info product businesses with game-changing results through
            data-driven paid advertising. Our mission is to push your brand
            beyond the ordinary, harnessing cutting-edge digital strategies that
            deliver unmatched ROI. With a relentless focus on innovation, we
            blend creativity, technology, and strategic insights to create
            powerful campaigns that resonate with your audience and elevate your
            brand. In today's dynamic digital landscape, we don't just keep up —
            we lead the way, driving growth, enhancing engagement, and ensuring
            your brand stands out. Let us take your business to the next level.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-lg">
            <img
              src="../../images/web1.png"
              alt="Hello Hustler"
              className="w-full rounded-lg"
            />
            <button
              className="absolute flex items-center justify-center bg-orange-500 bg-opacity-75 rounded-full w-16 h-16"
              onClick={playVideo}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-6.186 3.594A1 1 0 017 13.889V8.111a1 1 0 011.566-.823l6.186 3.594a1 1 0 010 1.786z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-orange-400 my-2 md:mt-20" />

      {/* Footer */}
      <footer className="py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo */}
            <div className="md:flex-[0.5] flex-initial justify-center items-center lg:pl-8">
              <img src={logo} alt="logo" className="w-32 cursor-pointer mb-2" />
            </div>

            {/* Contact Info with Icons */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left text-gray-300 text-sm md:text-base">
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
                <FaEnvelope className="mr-2 text-orange-500" />
                <p>vestoidsmedia@gmail.com</p>
              </div>
              <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
                <FaPhoneAlt className="mr-2 text-orange-500" />
                <p>(+91) 63617 25397, (+91) 94836 00376</p>
              </div>
            </div>

            {/* Social Media Links with right padding on laptop screens */}
            <div className="flex space-x-4 lg:pr-8">
              <a
                href="https://www.facebook.com/profile.php?id=61560835673352&sfnsn=wiwspwa&mibextid=RUbZ1f"
                className="text-orange-500 hover:text-orange-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/vestoidsmedia?t=5ZDuM4KRXiuiXiL29wkEQA&s=09"
                className="text-orange-500 hover:text-orange-600"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/vestoids-media-295025333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-orange-500 hover:text-orange-600"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=114ru51ff699o&utm_content=upv7v9u"
                className="text-orange-500 hover:text-orange-600"
              >
                <FaInstagram />
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Footer Links and Copyright */}
          <div className="mt-8 text-center lg:text-center text-gray-300 text-sm lg:text-base">
            <ul className="flex justify-center space-x-6 text-white">
              <li>
                <button
                  onClick={() => openModal(termsContent)}
                  className="hover:text-orange-500"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>|</li>
              <li>
                <button
                  onClick={() => openModal(privacyContent)}
                  className="hover:text-orange-500"
                >
                  Privacy Policy
                </button>
              </li>
              <li>|</li>
              <li>
                <button
                  onClick={() => openModal(disclaimerContent)}
                  className="hover:text-orange-500"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
            <p className="mt-4 text-white">
              &copy; 2024 VestoidsMediaAgency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for displaying content */}
      {modalContent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-4 rounded shadow-lg w-full h-full max-w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="whitespace-pre-wrap">{modalContent}</p>
            <button
              onClick={closeModal}
              className="mt-4 text-orange-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
