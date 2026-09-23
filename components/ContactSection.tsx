import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { createContact } from "../lib/api/contact";
import {
  sanitizeNameInput,
  sanitizePhoneInput,
  isValidName,
  isValidPhone,
  isValidEmail,
  isValidMessage,
  errorMessages,
} from "../lib/validation";

// TODO(client): replace placeholder image with a real campus/location photo.
const locationImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 94425 92175",
    href: "tel:+919442592175",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "contact@scaleindia.in",
    href: "mailto:contact@scaleindia.in",
  },

  {
    icon: MapPin,
    label: "Visit us",
    value:
      "Sona Towers, 71 Millers Road, Vasanth Nagar, Bengaluru – 560052, Karnataka, India.",
    href: "https://maps.google.com/?q=Sona+Towers+71+Millers+Road+Vasanth+Nagar+Bengaluru",
  },


];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "general",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === "firstName" || name === "lastName") sanitized = sanitizeNameInput(value);
    if (name === "phone") sanitized = sanitizePhoneInput(value, formData.phone);
    setFormData({ ...formData, [name]: sanitized });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !isValidName(formData.firstName) ||
      !isValidName(formData.lastName) ||
      !isValidPhone(formData.phone) ||
      !isValidEmail(formData.email) ||
      !isValidMessage(formData.message)
    ) {
      toast.error("Please fill in all fields correctly before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await createContact(formData);
      if (response.success) {
        toast.success(response.message || "Message sent successfully! We'll be in touch shortly.");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "", subject: "general" });
      } else {
        toast.error(response.message || "Failed to send message");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-white font-poppins overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="h-[3px] w-16 bg-[#A9762E] mb-2" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end"
        >
          {/* Left */}
          <div>
            <p className="text-emerald-700 font-semibold text-sm mb-3">
              Get in touch
            </p>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-royal leading-tight">
              We&apos;d love to hear from you
            </h2>
          </div>

          {/* Right */}
          <div className="md:pb-1">
            <p className="text-slate-500 leading-relaxed max-w-lg">
              Have a question about a programme, admissions, or batch enrolments?
              Reach out and our team will get back to you.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-16 items-stretch">
          {/* Left: location photo (fills column height) + stamp + ledger contact list */}
          <div className="flex flex-col h-full">
            <div className="relative  pb-11 flex-1 min-h-[220px] flex">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex-1 rounded-t-xl overflow-hidden border border-b-0 border-slate-200"
              >
                <img
                  src={locationImage}
                  alt="Our campus location"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* fades the image into the page background instead of a hard bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
              </motion.div>

            </div>

            <div className="border-t border-slate-200 mt-2 flex-shrink-0">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 py-4.5 border-b border-slate-200 text-inherit no-underline hover:bg-slate-50/60 transition-colors -mx-1 px-1 rounded"
                >
                  <Icon size={19} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <span className="block text-[0.72rem] text-slate-500 mb-0.5">{label}</span>
                    <span className="block text-sm text-royal font-medium leading-relaxed">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="h-full flex flex-col justify-center border border-slate-200 rounded-xl p-7 md:p-8 bg-white">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.72rem] text-slate-500">First name</span>
                <input
                  name="firstName"
                  placeholder="Ananya"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border-0 border-b border-slate-300 bg-transparent py-2 outline-none text-sm focus:border-emerald-600 transition-colors"
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.72rem] text-slate-500">Last name</span>
                <input
                  name="lastName"
                  placeholder="Rao"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border-0 border-b border-slate-300 bg-transparent py-2 outline-none text-sm focus:border-emerald-600 transition-colors"
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.72rem] text-slate-500">Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-0 border-b border-slate-300 bg-transparent py-2 outline-none text-sm focus:border-emerald-600 transition-colors"
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[0.72rem] text-slate-500">Email address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="ananya@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-0 border-b border-slate-300 bg-transparent py-2 outline-none text-sm focus:border-emerald-600 transition-colors"
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5 sm:col-span-2">
                <span className="text-[0.72rem] text-slate-500">How can we help?</span>
                <textarea
                  name="message"
                  placeholder="Tell us a bit about what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="border-0 border-b border-slate-300 bg-transparent py-2 outline-none text-sm focus:border-emerald-600 transition-colors resize-none"
                  required
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 bg-royal disabled:opacity-60 text-[#D9AF60] font-semibold text-sm py-3.5 rounded-md hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                {loading ? "Sending..." : "Send enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}