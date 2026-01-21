import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

import { Send } from "lucide-react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaComment,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "general",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent! Check console for data.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      subject: "general",
    });
  };

  return (
    <>
 
  <Head>
    <title>Contact Us | Sona tech school</title>

    <meta
      name="description"
      content="Get in touch with Sona tech school for inquiries, support, or partnerships. We're here to help you with all your questions."
    />

    <meta
      name="keywords"
      content="contact us, support, customer service, Sona tech school, get in touch"
    />

    <meta name="author" content="Sona tech school" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph (Facebook, LinkedIn) */}
    <meta property="og:title" content="Contact Us | Sona tech school" />
    <meta
      property="og:description"
      content="Reach out to Sona tech school for support, inquiries, or collaborations."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourwebsite.com/contact" />
    <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Contact Us | Sona tech school" />
    <meta
      name="twitter:description"
      content="Contact Sona tech school for any questions or support needs."
    />
    <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://yourwebsite.com/contact" />
  </Head>

 


      <Navbar />

      <main className="mx-auto bg-gray-50">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60 relative">
          <img
            src="https://img.freepik.com/premium-photo/man-is-working-laptop-with-words-learning-time_1318304-14613.jpg?ga=GA1.1.747278850.1765974059&semt=ais_hybrid&w=740&q=80"
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="-mt-16 mb-12 px-4">
          <div className="mx-auto max-w-7xl  relative bg-white rounded-sm">
            <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-4">
              {/* Heading */}
              <div className="text-center ">
                <h2 className="text-royal text-3xl font-heading">Contact Us</h2>
                <div className="flex justify-center mt-2">
                  <span className="block w-40 h-[2px] bg-gradient-to-r from-transparent via-royal/70 to-transparent" />
                </div>
                <p className="text-[15px] text-slate-600 mt-4">
                  Have some big idea or brand to develop and need help?
                </p>
              </div>

              {/* Grid */}
              <div className="grid lg:grid-cols-5 items-start   mt-12 gap-8">
                {/* Left Contact Info */}
                <div className="lg:col-span-2 bg-royal/90 rounded-lg p-6 h-full relative overflow-hidden ">
                  <h3 className="text-[24px] text-white font-medium">Contact Information</h3>
                  <p className="text-[15px] text-gray-300 leading-relaxed mt-4">
                    Have some big idea or brand to develop and need help?
                  </p>

                  <ul className="space-y-6 mt-6 text-white">
                    <li className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300">
                      <FaEnvelope className="w-5 h-5" />
                      <a href="mailto:info@example.com" className="text-[15px]">
                        info@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300">
                      <FaPhone className="w-5 h-5" />
                      <a href="tel:+158996888" className="text-[15px]">
                        +158 996 888
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300">
                      <FaMapMarkerAlt className="w-5 h-5" />
                      <span className="text-[15px]">123 Street 256 House</span>
                    </li>
                  </ul>

                  <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-8">
                    {["Facebook", "Instagram", "Twitter"].map((platform, i) => (
                      <li
                        key={i}
                        className="p-2 rounded-full bg-white/10 hover:bg-gold text-white hover:text-royal transition"
                      >
                        <a href="#" aria-label={platform}>
                          {platform === "Facebook" && <FaFacebookF className="w-4 h-4 text-white" />}
                          {platform === "Instagram" && <FaInstagram className="w-4 h-4 text-white" />}
                          {platform === "Twitter" && <FaTwitter className="w-4 h-4 text-white" />}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-gold/80"></div>
                </div>


                {/* Right Contact Form */}
                <div className="lg:col-span-3 px-4 sm:px-8 py-4">
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div className="relative flex items-center">
                        <FaUser className="absolute left-2 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          className="pl-8 py-3 w-full border-b border-gray-300 focus:border-emerald-500 outline-none text-sm"
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div className="relative flex items-center">
                        <FaUser className="absolute left-2 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          className="pl-8 py-3 w-full border-b border-gray-300 focus:border-emerald-500 outline-none text-sm"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative flex items-center">
                        <FaPhone className="absolute left-2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone No."
                          className="pl-8 py-3 w-full border-b border-gray-300 focus:border-emerald-500 outline-none text-sm"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="pl-8 py-3 w-full border-b border-gray-300 focus:border-emerald-500 outline-none text-sm"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div className="relative flex items-start col-span-full">
                        <FaComment className="absolute left-2 top-3 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write Message"
                          rows={4}
                          className="pl-8 pt-3 w-full border-b border-gray-300 focus:border-emerald-500 outline-none text-sm"
                          required
                        ></textarea>
                      </div>

                      {/* Subject Radio Buttons */}
                      <div className="col-span-full">
                        <h6 className="text-[15px] text-emerald-500 font-medium">
                          Select Subject
                        </h6>

                        <div className="flex flex-wrap gap-6 mt-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value="courses"
                              checked={formData.subject === "courses"}
                              onChange={handleChange}
                            />
                            <span>Course & Programs Inquiry</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value="admission"
                              checked={formData.subject === "admission"}
                              onChange={handleChange}
                            />
                            <span>Admissions / Enrollment</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value="technical"
                              checked={formData.subject === "technical"}
                              onChange={handleChange}
                            />
                            <span>Technical Support</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value="corporate"
                              checked={formData.subject === "corporate"}
                              onChange={handleChange}
                            />
                            <span>Corporate Training / Partnership</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value="feedback"
                              checked={formData.subject === "feedback"}
                              onChange={handleChange}
                            />
                            <span>Website Feedback</span>
                          </label>
                        </div>
                      </div>

                    </div>



                    <button
                      type="submit"
                      className="
    mt-6 w-full
    flex items-center justify-center gap-2
    px-6 py-3
    rounded-xl
    bg-emerald-600 text-white
    font-medium text-sm
    shadow-lg shadow-emerald-600/20
    transition-all duration-300
    hover:bg-emerald-700
    hover:shadow-emerald-700/30
    hover:-translate-y-[1px]
    active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
  "
                    >
                      <Send size={16} />
                      Send Message
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
