import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaSmile, FaCode, FaCheckCircle } from "react-icons/fa";

const Achievements: React.FC = () => {
  return (
    <section className="relative w-full h-full flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[3px] scale-110"
        style={{
          backgroundImage: "url('assets/felicia.jpg')",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 bg-transparent bg-opacity-80 w-full py-8 flex justify-center gap-15 flex-wrap">
        {[
          {
            value: 13,
            label: "Years Of Experience",
            icon: <FaBriefcase size={28} />,
          },
          { value: 56, label: "Happy Customers", icon: <FaSmile size={28} /> },
          {
            value: 32,
            label: "Learned Frameworks",
            icon: <FaCode size={28} />,
          },
          {
            value: 67,
            label: "Completed Projects",
            icon: <FaCheckCircle size={28} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#B68842] text-center px-6 py-8 rounded-2xl shadow-md w-[160px]"
          >
            <div className="text-white mb-2 p-1">{item.icon}</div>
            <div className="text-3xl font-bold text-white bg-gradient-to-r from-[#693132] via-[#B68842] to-[#90494a] rounded-full w-22 h-22 flex items-center justify-center mx-auto mb-4">
              <CountUp key={`${index}`} end={item.value} duration={4} />+
            </div>
            <div className="text-white font-bold tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
