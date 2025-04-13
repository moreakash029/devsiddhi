import React from "react";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faDribbble,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCardGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto">
    {/* Card 1 */}
    <div className="relative bg-[#1f1f1f] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <p className="text-gray-400 text-lg mt-2">Phone</p>
      <p className="mt-1 text-xl font-medium">+216 21 184 010</p>
    </div>

    {/* Card 2 */}
    <div className="relative bg-[#1f1f1f] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <p className="text-gray-400 text-lg mt-2">Email</p>
      <p className="mt-1 text-xl font-semibold">contact@steven.net</p>
    </div>

    {/* Card 3 */}
    <div className="relative bg-[#1f1f1f] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <p className="text-gray-400 text-lg mt-2">Address</p>
      <p className="mt-1 text-xl font-semibold">London, England</p>
    </div>

    {/* Card 4 */}
    <div className="relative bg-[#1f1f1f] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
        <FontAwesomeIcon icon={faShareAlt} />
      </div>
      <p className="text-gray-400 text-lg mt-2">Follow Me</p>
      <div className="mt-3 flex justify-center space-x-4 text-white text-xl">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDribbble} />
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
    </div>
  </div>
);

const ContactSplit: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side */}
      <div className="bg-[#e4c9c9] flex-1 flex flex-col items-center justify-center px-6 py-10">
        <h2
          className="text-white text-5xl font-bold mb-6 hidden md:block"
          style={{ writingMode: "horizontal-tb" }}
        >
          Get in touch
        </h2>
        <ContactCardGrid />
      </div>

      {/* Right Side */}
      <div className="bg-[#e4c9c9] flex-1 flex flex-col items-center justify-center px-6 py-10">
        <h2
          className="text-white text-5xl font-bold mb-6 hidden md:block"
          style={{ writingMode: "horizontal-tb" }}
        >
          Get in touch
        </h2>
        <ContactCardGrid />
      </div>
    </div>
  );
};

export default ContactSplit;
