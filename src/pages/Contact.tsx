const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center p-4">
        <div className="w-full max-w-6xl rounded-3xl flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5">
          <div className="flex-1 flex flex-col justify-center gap-3">
            <img
              src="/DevsiddhiLogo.png"
              alt="Devsiddhi Logo"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-5 overflow-hidden">
            {/* <div className="m-2"> */}
            <p className="text-6xl font-bold text-[#ffffff] mb-4">Contact Us</p>
            <p className="text-lg font-semibold">
              Devsiddhi Construction Co., a pioneering real-estate development
              company based in Ahmedabad (Gujarat), has been benchmarking the
              industry since its inception in 2015.
            </p>
            <p className="text-md font-medium">
              Devsiddhi Group imbibes the three core values of Excellence,
              Expertise and Elegance across all the development projects that
              they undertake. Every project is a striving for excellence across
              every construction parameter.
            </p>
            <p className="text-md font-medium">
              Devsiddhi Group’s portfolio is a mix of residential and commercial
              projects. Leading corporate and popular retail brands have chosen
              Devsiddhi Group’s properties as their chosen premise.
            </p>
            <p className="text-md font-medium">
              Real estate is a significant investment and a vital component of
              each one’s life journey; Devsiddhi understands this fact and has
              made it their mission to be a ‘bridge’ – a connecting link –
              between you and your dreams.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
