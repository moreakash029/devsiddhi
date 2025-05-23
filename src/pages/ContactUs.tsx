import React, { FormEvent, useState } from "react";
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

const ContactSplit: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission logic
    setTimeout(() => {
      alert("Form submitted!");
      setIsSubmitting(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 flex flex-col items-center px-6 py-10">
        <div className="w-full max-w-2xl flex flex-col gap-10 space-y-4">
          {/* Title */}
          <h1 className="text-2xl flex flex-col items-center justify-center font-bold">
            Get in touch
          </h1>

          {/* Details */}
          <div className="grid grid-cols-2 gap-10 m-2 p-4">
            <div className="relative bg-[#964B00] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p className="text-gray-400 text-lg mt-2">Phone</p>
              <p className="mt-1 text-xl font-medium">+91 9833 535 250</p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#964B00] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p className="text-gray-400 text-lg mt-2">Email</p>
              <p className="mt-1 text-xl font-semibold">
                9nath.parte@gmail.com
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#964B00] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-yellow-400 text-xl">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <p className="text-gray-400 text-lg mt-2">Address</p>
              <p className="mt-1 text-xl font-semibold">
                Navi Mumbai, Maharashtra
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative bg-[#964B00] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg">
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
        </div>
      </div>

      <div className="hidden md:block w-px bg-gray-300" />

      <div className="flex-1 flex flex-col items-center px-6 py-5">
        <div className="w-full max-w-3xl mx-auto px-4 py-10 flex flex-col gap-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Schedule a call now
            </h1>
            <h4 className="text-base md:text-lg font-bold text-black max-w-xl mx-auto">
              Start your offshore web & mobile app team with a free consultation
              from our solutions engineer.
            </h4>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-red-300 rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
              <div>
                <label className="text-red-900 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-red-900 text-base focus:outline-none border border-red-200"
                  required
                />
              </div>

              <div>
                <label className="text-red-900 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-red-900 text-base focus:outline-none border border-red-200"
                  required
                />
              </div>

              <div>
                <label className="text-red-900 text-sm font-medium">
                  Write your message here
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-red-900 text-base resize-none focus:outline-none border border-red-200"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-base px-8 py-3 rounded-full mt-2 transition-transform duration-300 hover:scale-105 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSplit;