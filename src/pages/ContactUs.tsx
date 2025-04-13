import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  Value,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../index.css";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const ContactUs = () => {
  const [country, setCountry] = useState<any>();
  const [value, setValue] = useState<any>();
  const [laoding, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .max(20, "First Name should be at most 20 characters")
      .required("First Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone is required")
      .min(5, "Phone Number should be at least 5 digits"),
    // message: Yup.string().min(5, 'Message should be at least 5 characters').max(300, 'Message should be at most 300 characters').required('Message is required'),
  });

  const resetFormFields = () => {
    // formik.resetForm();
    setValue("");
  };
  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       phoneNumber: "",
  //       companyName: "",
  //     },
  //     validationSchema,
  //     onSubmit: async (values, { resetForm }) => {
  //       try {
  //         setLoading(true);

  //         const entryPage =
  //           sessionStorage.getItem("entryPage") || "Unknown Entry Page";

  //         const body = {
  //           name: values.name,
  //           to: values.email,
  //           phoneNumber: `${
  //             formatPhoneNumberIntl(value).split(" ").slice(0, 1)[0]
  //           } ${values.phoneNumber}`,
  //           companyName: values.companyName,
  //           from: "Page " + slug,
  //           entryPage: entryPage,
  //         };
  //         console.log(body);

  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(body),
  //           }
  //         );

  //         if (response.ok) {
  //           console.log("Email sent successfully");
  //           toast.success("Email sent successfully");
  //           resetFormFields();
  //         } else {
  //           console.log("response", response);
  //           console.error("Failed to send email");
  //           toast.error("Failed to send email");
  //         }
  //       } catch (error) {
  //         console.error("Error while sending email", error);
  //         toast.error(error?.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },
  //   });

  const formik = "";

  useEffect(() => {
    const formattedNumber = formatPhoneNumber(value);
    // formik.setFieldValue('phoneNumber', formattedNumber);
  }, [value]);

  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getGeoInfo();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-cente">
    <div className="w-full max-w-5xl mx-auto p-3 lg:p-0 flex justify-center flex-col gap-16">
      <div className="flex items-center justify-center">
        <form
          // onSubmit={e => {
          //   e.preventDefault();
          //   formik.handleSubmit(e);
          // }}
          className="my-5"
        >
          {/* <div className="box"> */}
          <div
            className="flex items-center justify-center rounded-3xl bg-[#dd5b5b] p-3 md:p-5"
            // style={{ boxShadow: '10px 10px 16px 0px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="flex w-full max-w-4xl flex-col items-center lg:flex-row md:gap-6">
              <div className="w-full lg:w-1/2">
                <div className="text-2xl font-semibold md:text-3xl text-">
                  Schedule a <span className="codeb">call</span> now
                </div>
                <div className="mt-2 text-sm leading-normal">
                  Start your offshore web & mobile app team with a free
                  consultation from our solutions engineer.
                </div>
              </div>
              <div className="mt-6 flex w-full flex-col items-center justify-center md:mt-0 lg:w-1/2">
                <div className="flex flex-col w-full flex-wrap items-center justify-center gap-2">
                  <div className="w-full flex flex-col gap-1 md:gap-2 md:flex-row items-center justify-between">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.name}
                      className="w-full rounded-full border border-gray-300 bg-white px-3 py-2 focus:outline-none text-sm"
                      required
                    />

                    <input
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.email}
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      className="w-full rounded-full border border-gray-300 bg-white px-3 py-2 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1 md:gap-2 md:flex-row items-center justify-between">
                    <PhoneInput
                      international
                      defaultCountry={country?.country}
                      value={value}
                      onChange={setValue}
                      className={`PhoneInputInput w-full rounded-full border border-gray-300 bg-white px-3 py-2 focus:outline-none text-sm`}
                      id="phoneNumber"
                      name="phoneNumber"
                      //   onBlur={formik.handleBlur}
                    />
                    <input
                      //   onChange={formik.handleChange}
                      //   onBlur={formik.handleBlur}
                      //   value={formik.values.companyName}
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      className="w-full rounded-full border border-gray-300 bg-white px-3 py-2 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <button
                    className="w-full rounded-full bg-brown-100 p-2 font-semibold text-white focus:outline-none text-sm
                  inline-flex py-2 px-6 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#AB5B55,45%,#EADCF7,55%,#AB5B55)] bg-[length:200%_100%] gap-1 transition-colors focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    type="submit"
                    disabled={laoding}
                  >
                    Let's Begin
                  </button>

                  <p className="text-xs text-[#444444] mt-2 font-light">
                    We respect your privacy, and be assured that your data will
                    not be shared
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* {laoding && <Loader />} */}
          {/* </div> */}
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
