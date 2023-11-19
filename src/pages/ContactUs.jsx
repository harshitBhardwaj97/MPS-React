import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const phoneRegExp = /^[6-9]\d{9}$/;

  const form = useRef();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactnumber: "",
      query: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      contactnumber: Yup.string()
        .matches(phoneRegExp, "Contact number is invalid.")
        .max(10)
        .required("Contact Number is required."),
      query: Yup.string().required("Please enter your query."),
    }),

    onSubmit: () => {
      const sendEmail = () => {
        emailjs
          .sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success("Email sent successfully !");
              formik.resetForm();
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
      sendEmail();
    },
  });

  return (
    <motion.div
      className="grid max-w-6xl grid-cols-1 gap-2 p-4 mx-auto md:grid-cols-2 contactpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="flex flex-col justify-center gap-3 p-3 mx-auto border-2 rounded-md shadow-md contactUsLeftSection">
        <div className="gap-3 p-4 text-2xl font-bold text-center heading">
          Mamta Public School
        </div>
        <div className="address">
          Shaheed Budh Ram Singh Marg, <br />
          Lahore Apartment Vasundhara Enclave, Delhi-110096
        </div>
        <div className="contactInfo">
          <p className="flex items-center gap-2">
            <IoCall size={20} /> 09999026312
          </p>
          <a href="mailto:mamtapublicofficial@gmail.com">
            <p className="flex items-center gap-2">
              <GrMail size={20} /> mamtapublicofficial@gmail.com
            </p>
          </a>
        </div>
        <div className="mt-5 contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.968483417908!2d77.31424127457156!3d28.600722285526164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57c71571c7b%3A0x2a082d8a351f4ea8!2sM.%20P.%20MIDDLE%20SCHOOL!5e0!3m2!1sen!2sin!4v1699434637550!5m2!1sen!2sin"
            // width="400"
            // height="250"
            className="w-[90%] h-full mx-auto"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="p-6 border-2 rounded-md shadow-md contactForm">
        <form ref={form} onSubmit={formik.handleSubmit}>
          <h1 className="text-lg font-bold text-center md:text-2xl">
            Get in Touch
          </h1>
          <div className="pb-2 mt-2 inputField">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Name"
            />
            {/* {formik.values.name} */}
            <span className="block font-bold text-red-600 ">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </span>
          </div>
          <div className="pb-2 mt-2 inputField">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            {/* {formik.values.email} */}
            <span className="block font-bold text-red-600 ">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </span>
          </div>
          <div className="pb-2 mt-2 inputField">
            <label htmlFor="contactnumber" className="block">
              Contact Number
            </label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              maxLength={10}
              className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
              onChange={formik.handleChange}
              value={formik.values.contactnumber}
              onBlur={formik.handleBlur}
              placeholder="Contact Number"
            />
            {/* {formik.values.contactnumber} */}
            <span className="block font-bold text-red-600 ">
              {formik.touched.contactnumber && formik.errors.contactnumber
                ? formik.errors.contactnumber
                : ""}
            </span>
          </div>
          <div className="pb-2 mt-2 inputField">
            <label htmlFor="query" className="block">
              Query
            </label>
            <textarea
              id="query"
              name="query"
              cols="50"
              rows="10"
              className="w-full p-2 border-2 rounded-md focus:border-teal-500 focus:ring-teal-500"
              onChange={formik.handleChange}
              value={formik.values.query}
              onBlur={formik.handleBlur}
              placeholder="Query / Message"
              style={{
                resize: "none",
              }}
            ></textarea>
            {/* {formik.values.query} */}
            <span className="block font-bold text-red-600 ">
              {formik.touched.query && formik.errors.query
                ? formik.errors.query
                : ""}
            </span>
            {/* {console.log(formik.errors)} */}
            <button
              type="submit"
              className="px-4 py-2 pt-2 mx-auto block duration-150 ease-linear bg-green-400 rounded-md shadow-lg hover:bg-green-700 hover:text-white hover:scale-105 mt-2 w-[50%]"
            >
              Submit
            </button>
          </div>
          <Toaster position="top-right" duration={9000} />
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
