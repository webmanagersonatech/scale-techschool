import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Head from "next/head";
import { createContact } from "../lib/api/contact";
import { toast } from "sonner";
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
import {
  sanitizeNameInput,
  sanitizePhoneInput,
  isValidName,
  isValidPhone,
  isValidEmail,
  isValidMessage,
  errorMessages,
} from "../lib/validation";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "general",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
        return isValidName(value) ? "" : errorMessages.firstName;
      case "lastName":
        return isValidName(value) ? "" : errorMessages.lastName;
      case "phone":
        return isValidPhone(value) ? "" : errorMessages.phone;
      case "email":
        return isValidEmail(value) ? "" : errorMessages.email;
      case "message":
        return isValidMessage(value) ? "" : errorMessages.message;
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;

    if (name === "firstName" || name === "lastName") {
      sanitized = sanitizeNameInput(value);
    } else if (name === "phone") {
      sanitized = sanitizePhoneInput(value, formData.phone);
    }

    setFormData({ ...formData, [name]: sanitized });

    if (touched[name as keyof typeof touched]) {
      setErrors({ ...errors, [name]: validateField(name, sanitized) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      phone: validateField("phone", formData.phone),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ firstName: true, lastName: true, phone: true, email: true, message: true });

    if (Object.values(newErrors).some(Boolean)) {
      toast.error("Please fix the highlighted fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await createContact(formData);
      if (response.success) {
        toast.success(response.message || "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "general",
          message: "",
        });
        setTouched({ firstName: false, lastName: false, phone: false, email: false, message: false });
        setErrors({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else {
        toast.error(response.message || "Failed to send message");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof typeof errors) =>
    `pl-8 py-3 w-full border-b outline-none text-sm transition-colors ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-300 focus:border-emerald-500"
    }`;

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
            src="/images/contact.png"
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="-mt-16 mb-12 px-4">
          <div className="mx-auto max-w-7xl  relative bg-white rounded-sm">
            <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-4">
              {/* Breadcrumb */}
              <div className="pt-6 pb-2">
                <Breadcrumb items={[{ label: "Contact" }]} />
              </div>
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
                      <FaEnvelope className="w-5 h-5 shrink-0" />
                      <a href="mailto:contact@scaleindia.in" className="text-[15px]">
                        contact@scaleindia.in
                      </a>
                    </li>

                    <li className="flex items-center gap-3 text-emerald-400 hover:text-emerald-300">
                      <FaPhone className="w-5 h-5 shrink-0" />
                      <a href="tel:+919442592175" className="text-[15px]">
                        +91 94425 92175
                      </a>
                    </li>

                    <li className="flex items-start gap-3 text-emerald-400">
                      <FaMapMarkerAlt className="w-5 h-5 mt-0.5 shrink-0" />
                      <span className="text-[15px] leading-relaxed">
                        #43/1A, Billekempanahalli village, Bidadi Hobli,<br />
                        Ramanagara – 562109, Karnataka, India.
                      </span>
                    </li>
                  </ul>

                  <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-8">
                    {[
                      { name: "Facebook", url: "https://www.facebook.com/sonamanagement" },
                      { name: "Instagram", url: "https://www.instagram.com/sona_mba/?hl=en" },
                      { name: "Twitter", url: "https://x.com/sonamba" },
                    ].map((platform, i) => (
                      <li
                        key={i}
                        className="p-2 rounded-full bg-white/10 hover:bg-gold text-white hover:text-royal transition"
                      >
                        <a
                          href={platform.url}
                          aria-label={platform.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platform.name === "Facebook" && <FaFacebookF className="w-4 h-4" />}
                          {platform.name === "Instagram" && <FaInstagram className="w-4 h-4" />}
                          {platform.name === "Twitter" && <FaTwitter className="w-4 h-4" />}
                        </a>
                      </li>
                    ))}
                  </ul>



                  <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-gold/80"></div>
                </div>


                {/* Right Contact Form */}
                <div className="lg:col-span-3 px-4 sm:px-8 py-4">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <div className="relative flex items-center">
                          <FaUser className="absolute left-2 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="First Name"
                            className={inputClass("firstName")}
                            required
                          />
                        </div>
                        {touched.firstName && errors.firstName && (
                          <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                        )}
                      </div>

                      {/* Last Name */}
                      <div>
                        <div className="relative flex items-center">
                          <FaUser className="absolute left-2 text-gray-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Last Name"
                            className={inputClass("lastName")}
                            required
                          />
                        </div>
                        {touched.lastName && errors.lastName && (
                          <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <div className="relative flex items-center">
                          <FaPhone className="absolute left-2 text-gray-400" />
                          <input
                            type="tel"
                            inputMode="numeric"
                            name="phone"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone No. (10 digits)"
                            className={inputClass("phone")}
                            required
                          />
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <div className="relative flex items-center">
                          <FaEnvelope className="absolute left-2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Email"
                            className={inputClass("email")}
                            required
                          />
                        </div>
                        {touched.email && errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="relative flex items-start col-span-full">
                        <FaComment className="absolute left-2 top-3 text-gray-400" />
                        <div className="w-full">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write Message"
                            rows={4}
                            className={`pl-8 pt-3 w-full border-b outline-none text-sm transition-colors ${
                              touched.message && errors.message
                                ? "border-red-400 focus:border-red-500"
                                : "border-gray-300 focus:border-emerald-500"
                            }`}
                            required
                          ></textarea>
                          {touched.message && errors.message && (
                            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                          )}
                        </div>
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
                      disabled={loading}
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
                      {loading ? "Sending..." : <Send size={16} />}
                      {loading ? "" : "Send Message"}
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
