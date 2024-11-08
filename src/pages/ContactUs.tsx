import React, { FormEvent } from "react";
import emailjs from "emailjs-com";
import i1 from "../assets/images/iiitumap.svg";

const ContactPage: React.FC = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_TEMPLATE_ID || "";
    const userId = import.meta.env.VITE_USER_ID || "";
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("User ID:", userId);

    if (serviceId && templateId && userId) {
      emailjs.sendForm(serviceId, templateId, e.currentTarget, userId).then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
      e.currentTarget.reset();
    } else {
      alert("Environment variables are not correctly set. Please check.");
    }
  };

  return (
    <div>
      {/* Contact Form Section */}
      <div className="container mx-auto p-4 lg:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Contact Form
            </h2>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block font-semibold">Enter Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="Name"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Email Address</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Enter Email Address"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Mobile Number</label>
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Enter Mobile Number"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold">Enter Message</label>
                <textarea
                  rows={5}
                  placeholder="Enter Your Message"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  name="Message"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="w-full bg-green-500 text-white p-3 rounded-md cursor-pointer hover:bg-green-600"
              />
            </form>
          </div>
          {/* Address Section */}
          <div className="w-full md:w-1/2 bg-white p-8 shadow-md flex flex-col lg:flex:row rounded-lg">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Address</h2>
            <p className="text-lg lg:text-xl">
              Indian Institute of Information Technology Una <br /> Himachal
              Pradesh, <br /> Saloh (HP) - 177209 <br />
              Phone: (+91) 98370-12205 <br />
              Phone: (+91) 95556-98585 <br />
              Email: ankur@iiitu.ac.in <br />
              Email: namangarg@iiitu.ac.in
            </p>
            <div className="map my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.276504151224!2d76.18557512570531!3d31.481480055980942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adb198180014f%3A0xbf76347093a3aa9a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Una!5e0!3m2!1sen!2sin!4v1679642072010!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="flex justify-center items-center w-full mx-auto h-32">
          <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 border-2 border-green-700 text-green-700 rounded p-2 inline-block">
            How to Reach
          </h1>
        </div>
        <div className="flex justify-center items-center p-4">
          <img src={i1} alt="IIIT Una Map" className="w-full lg:w-4/5 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
