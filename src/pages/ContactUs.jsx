import {useRef, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {motion} from 'framer-motion';
import {IoCall} from 'react-icons/io5';
import {IoIosTime} from 'react-icons/io';
import {GrMail} from 'react-icons/gr';
import emailjs from '@emailjs/browser';
import toast, {Toaster} from 'react-hot-toast';

const ContactUs = () => {
  const phoneRegExp = /^[6-9]\d{9}$/;
  const MAP_SOURCE =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.968483417908!2d77.31424127457156!3d28.600722285526164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57c71571c7b%3A0x2a082d8a351f4ea8!2sM.%20P.%20MIDDLE%20SCHOOL!5e0!3m2!1sen!2sin!4v1699434637550!5m2!1sen!2sin';

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      contactnumber: '',
      query: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30, 'Name must be 30 characters or less.').required('Name is required.'),
      email: Yup.string().email('Invalid email address.').required('Email is required.'),
      contactnumber: Yup.string().matches(phoneRegExp, 'Contact number is invalid.').max(10).required('Contact Number is required.'),
      query: Yup.string().required('Please enter your query.')
    }),
    onSubmit: () => {
      setIsSubmitting(true); // Set submitting state to true
      const sendEmail = () => {
        emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(
          (result) => {
            console.log(result.text);
            toast.success('Email sent successfully!');
            formik.resetForm();
            setIsSubmitting(false); // Reset submitting state
          },
          (error) => {
            console.log(error.text);
            toast.error('Error sending email.');
            setIsSubmitting(false); // Reset submitting state
          }
        );
      };
      sendEmail();
    }
  });

  return (
    <motion.div
      className="grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-2 contactpage"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {duration: 0.1}}}
    >
      {/* Left Section - Contact Info */}
      <div
        className="flex flex-col justify-center gap-6 p-6 mx-auto bg-purpleDark rounded-md shadow-lg text-white contactUsLeftSection">
        <h2 className="text-3xl font-semibold text-center">Mamta Public School</h2>
        <div className="address text-center">
          Shaheed Budh Ram Singh Marg, <br />
          Lahore Apartment Vasundhara Enclave, Delhi-110096
        </div>
        <div className="contactInfo mt-4 space-y-1">
          <p className="flex items-center gap-2 text-lg">
            <IoCall size={22} /> 01135985033
          </p>
          <p className="flex items-center gap-2 text-lg">
            <IoCall size={22} /> 09999026312
          </p>
          <a href="mailto:mamtapublicofficial@gmail.com">
            <p className="flex items-center gap-2 text-lg">
              <GrMail size={22} /> mamtapublicofficial@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <IoIosTime size={22} /> Mon-Sat: 8 AM - 3PM
            </p>
          </a>
        </div>
        <div className="mt-6 contactMap">
          <iframe
            src={MAP_SOURCE}
            className="w-full h-72 mx-auto rounded-lg shadow-lg"
            style={{border: '0'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="p-6 bg-white border-2 border-purpleDark rounded-md shadow-md contactForm">
        <form ref={form} onSubmit={formik.handleSubmit}>
          <h2 className="text-2xl font-semibold text-center text-purpleDark mb-6">Get in Touch</h2>

          {/* Name Field */}
          <div className="pb-4 mt-2">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Your Name"
            />
            <span className="text-red-600 text-sm">{formik.touched.name && formik.errors.name}</span>
          </div>

          {/* Email Field */}
          <div className="pb-4 mt-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Your Email"
            />
            <span className="text-red-600 text-sm">{formik.touched.email && formik.errors.email}</span>
          </div>

          {/* Contact Number Field */}
          <div className="pb-4 mt-4">
            <label htmlFor="contactnumber" className="block text-lg font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              maxLength={10}
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
              onChange={formik.handleChange}
              value={formik.values.contactnumber}
              onBlur={formik.handleBlur}
              placeholder="Your Contact Number"
            />
            <span className="text-red-600 text-sm">{formik.touched.contactnumber && formik.errors.contactnumber}</span>
          </div>

          {/* Query Field */}
          <div className="pb-4 mt-4">
            <label htmlFor="query" className="block text-lg font-medium text-gray-700">Query</label>
            <textarea
              id="query"
              name="query"
              cols="50"
              rows="8"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500"
              onChange={formik.handleChange}
              value={formik.values.query}
              onBlur={formik.handleBlur}
              placeholder="Your Message"
              style={{resize: 'none'}}
            ></textarea>
            <span className="text-red-600 text-sm">{formik.touched.query && formik.errors.query}</span>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className={`px-6 py-3 bg-purpleDark text-white rounded-md shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-teal-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Toast notifications */}
        <Toaster position="top-right" duration={5000} />
      </div>
    </motion.div>
  );
};

export default ContactUs;
