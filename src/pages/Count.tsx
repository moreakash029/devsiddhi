import CountUp from "react-countup";

const stats = [
  { number: 13, label: "Years Of Experience" },
  { number: 56, label: "Happy Customers" },
  { number: 32, label: "Learned Frameworks" },
  { number: 67, label: "Completed Projects" },
  { number: 13, label: "Awards Won" },
];

const Count = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <p className="text-5xl font-bold">Our Achievments</p>
      </div>
      <div className="w-auto h-[700px] flex items-center justify-center px-4">
        <div className="max-w-8xl w-full flex flex-wrap items-center justify-center gap-14">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`w-[200px] h-[200px] bg-[#141313] rounded-4xl transform rotate-45 flex items-center justify-center shadow-lg p-8 ${
                idx % 2 === 0 ? "-translate-y-12" : "translate-y-12"
              }`}
            >
              <div className="transform -rotate-45 text-center">
                <div className="text-6xl font-bold text-yellow-400">
                  <CountUp
                    key={`${location.pathname}-${idx}`} // unique key based on route + index
                    end={item.number}
                    duration={4}
                  />{" "}
                  +
                </div>
                <div className="text-lg font-semibold mt-2 leading-snug text-white">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Count;
