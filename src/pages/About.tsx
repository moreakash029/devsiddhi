const About = () => {
  return (
    <div className="  flex items-center justify-center overflow-hidden p-4 pt-auto lg:pt-39 ">
      <div className="w-full max-w-6xl rounded-3xl flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5 overflow-hidden">
        {/* Left Side - Image */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <img
            src="/Devsiddhi-Logo-(2).png"
            alt="Devsiddhi Logo"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 flex flex-col justify-center gap-4 overflow-hidden text-ellipsis">
          {/* <p className="text-5xl font-bold text-center pt-14 lg:pt-0">
            About Us
          </p> */}
          <p className="text-lg font-semibold text-[#e07f7f]">
            Devsiddhi Construction Co., a pioneering real-estate development
            company based in Ahmedabad (Gujarat), has been benchmarking the
            industry since its inception in 2015.
          </p>
          <p className="text-md font-medium">
            Devsiddhi Group imbibes the three core values of Excellence,
            Expertise and Elegance across all the development projects that they
            undertake.
          </p>
          <p className="text-md font-medium">
            The portfolio is a mix of residential and commercial projects.
            Leading corporate and retail brands have chosen Devsiddhi
            properties.
          </p>
          <p className="text-md font-medium">
            Real estate is a significant investment; Devsiddhi aims to be a
            bridge between you and your dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
