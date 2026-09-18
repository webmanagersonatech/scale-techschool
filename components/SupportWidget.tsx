import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";
import { faqs } from "../data/faqs";

// TODO(client): confirm the WhatsApp Business number to use here (may differ
// from the call number). Using the published contact number as a placeholder.
const WHATSAPP_NUMBER = "919442592175";
const WHATSAPP_DEFAULT_MESSAGE = "Hi! I'd like to know more about Sona Tech School programmes.";

export default function SupportWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE
  )}`;

  return (
    <>
      {/* Floating action stack */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
        {/* FAQ chatbot toggle */}
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open FAQ chat"
          className="group w-12 hover:w-44 h-12 hover:bg-royal/90 relative bg-royal border border-royal/70 rounded-full text-white duration-700 before:duration-700 font-bold flex justify-center hover:justify-start items-center px-3 overflow-hidden shadow-lg"
        >
          {chatOpen ? (
            <FaTimes size={18} className="shrink-0" />
          ) : (
            <FaCommentDots size={20} className="shrink-0" />
          )}
          <span className="max-w-0 group-hover:max-w-[8rem] group-hover:ml-2 overflow-hidden inline-block duration-100 group-hover:duration-300 group-hover:delay-300 opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm transition-all">
            {chatOpen ? "Close Chat" : "Ask a Question"}
          </span>
        </button>

        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group w-12 hover:w-44 h-12 hover:bg-[#1ebe57] relative bg-[#25D366] border border-[#1ebe57] rounded-full text-white duration-700 before:duration-700 font-bold flex justify-center hover:justify-start items-center px-3 overflow-hidden shadow-lg"
        >
          <FaWhatsapp size={22} className="shrink-0" />
          <span className="max-w-0 group-hover:max-w-[8rem] group-hover:ml-2 overflow-hidden inline-block duration-100 group-hover:duration-300 group-hover:delay-300 opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm transition-all">
            WhatsApp Us
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+919442592175"
          aria-label="Call an advisor"
          className="group w-12 hover:w-44 h-12 hover:bg-emerald-700 relative bg-emerald-500 border border-emerald-700 rounded-full text-white duration-700 before:duration-700 font-bold flex justify-center hover:justify-start items-center px-3 overflow-hidden shadow-lg"
        >
          <FaPhoneAlt size={16} className="shrink-0" />
          <span className="max-w-0 group-hover:max-w-[8rem] group-hover:ml-2 overflow-hidden inline-block duration-100 group-hover:duration-300 group-hover:delay-300 opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm transition-all">
            Call Advisor
          </span>
        </a>
      </div>

      {/* FAQ chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[90vw] max-w-sm rounded-2xl bg-white shadow-2xl border border-slate-200 z-50 overflow-hidden font-poppins"
          >
            <div className="bg-royal text-white p-4 flex justify-between items-center">
              <p className="font-semibold text-sm">Ask us anything</p>
              <FaTimes className="cursor-pointer hover:text-gold" onClick={() => setChatOpen(false)} />
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-2 text-sm">
              {activeFaq === null ? (
                <>
                  <p className="text-slate-500 mb-2">Quick answers to common questions:</p>
                  {faqs.map((f, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFaq(i)}
                      className="w-full text-left px-3 py-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      {f.question}
                    </button>
                  ))}
                </>
              ) : (
                <div>
                  <button
                    onClick={() => setActiveFaq(null)}
                    className="text-xs text-emerald-600 mb-3 hover:underline"
                  >
                    ← Back to questions
                  </button>
                  <p className="font-semibold text-royal mb-1">{faqs[activeFaq].question}</p>
                  <p className="text-slate-600 leading-relaxed">{faqs[activeFaq].answer}</p>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-700 font-semibold hover:underline"
              >
                Didn't find your answer? Chat with us on WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}