import { useState } from "react";
import axios from "axios";
import { SiRadar } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ label, placeholder, name, type, value, handleChange }) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-white text-sm font-medium mb-1">
      {label}
    </label>
    <input
      id={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  </div>
);

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false); // State to track submission status
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(""); // State to track error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });

    // Reset error when user modifies input
    if (error) {
      setError("");
    }
  };

  const validatePhoneNumber = (phone) => {
    // Simple regex for phone number validation (supports various formats)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async () => {
    const { name, email, phone, subject, message } = formData;

    // Reset previous errors and success messages
    setError("");
    setSuccessMessage("");

    // Simple validation
    if (!name || !email || !phone || !subject || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Validate phone number
    if (!validatePhoneNumber(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true); // Start loading

      const response = await axios.post(
        `https://api.vestoids-media.com/api/contacts`,
        formData
    );

      console.log("Response:", response);
      if (response.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSent(true); // Update submission status to true

        // Reset the button text after 1 seconds
        setTimeout(() => {
          setIsSent(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error sending your message.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col mf:flex-row items-start justify-between md:p-20 py-10 px-5 w-full">
        {/* Left Column */}
        <div className="flex flex-1 justify-start flex-col md:mt-20 md:ml-20 transition-transform transform duration-2000 ease-in-out -translate-x-10 opacity-0 animate-slideLeft">
          <h1 className="text-white text-3xl sm:text-5xl font-bold py-1">
            Vestoids-Media Agency
          </h1>
          <h2 className="text-pink-500 text-2xl mt-2 mb-4 sm:text-5xl py-1">
            we boost your <br /> dreams to reality
          </h2>
          <p className="leading-relaxed text-white text-left text-justify mt-4 font-light text-base md:w-9/12 w-11/12">
            We Help E-commerce & Info Product Businesses By Producing
            Spine-Chilling ROI Via Paid Advertising.
          </p>
          <div className="grid grid-cols-3 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Webdesign</div>
            <div className={commonStyles}>Content creation</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>SEO</div>
            <div className={commonStyles}>Advertizing</div>
            <div className={commonStyles}>Hosting</div>
            <div className={commonStyles}>Email Marketing</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>
              Instagram Boost
            </div>
            <div className={commonStyles}>Video Editing</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>PR Service</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 transition-transform transform duration-2000 ease-in-out translate-x-10 opacity-0 animate-slideRight">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 my-5 eth-card white-glassmorphism md:ml-20">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiRadar fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">
                  Vestoids-Media Agency
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-start blue-glassmorphism md:ml-20">
            <div className="w-full text-center">
              <p className="leading-relaxed text-white items-center font-bold text-base">
                Connect with us
              </p>
            </div>
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={formData.name}
              handleChange={handleChange}
            />
            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              handleChange={handleChange}
            />
            {/* New Phone Number Input Field */}
            <Input
              placeholder="Your Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              handleChange={handleChange}
            />
            <Input
              placeholder="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              handleChange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e, "message")}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism resize-none h-24"
            ></textarea>
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {/* Display Error Message */}
            {error && (
              <div className="leading-relaxed text-white text-left text-justify mt-4 font-light text-base md:w-9/12 w-11/12">
                {error}
              </div>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              className={`text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer ${
                isSent
                  ? "bg-green-500"
                  : isLoading
                  ? "bg-blue-500"
                  : "bg-transparent"
              }`}
              disabled={isSent || isLoading} // Disable the button when sent or loading
            >
              {isLoading ? "Sending..." : isSent ? "Sent" : "Send Now"}
            </button>
          </div>
        </div>
        <style jsx>
          {`
            .animate-slideLeft {
              animation: slideLeft 1s forwards;
            }
            .animate-slideRight {
              animation: slideRight 1s forwards;
            }
            @keyframes slideLeft {
              from {
                transform: translateX(-50px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes slideRight {
              from {
                transform: translateX(50px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;
