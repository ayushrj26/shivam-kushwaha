import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ContactPage() {
  const [widgetHeight, setWidgetHeight] = useState("600px");

  useEffect(() => {
    const handleCalendlyEvents = (e) => {
      if (e.origin === "https://calendly.com") {
        if (e.data?.event === "calendly.page_height") {
          const height = e.data?.payload?.height;
          if (height) {
            const numericHeight = parseInt(height, 10);
            // Only update if parsed height is greater than 540px to prevent collapse
            if (!isNaN(numericHeight) && numericHeight > 540) {
              setWidgetHeight(height);
            }
          }
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvents);
    return () => {
      window.removeEventListener("message", handleCalendlyEvents);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050818] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-20 top-40 w-96 h-96 bg-blue-500/20 blur-[180px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-96 h-96 bg-purple-500/20 blur-[180px] rounded-full" />
      </div>

      {/* Shared Navbar */}
      <Navbar />

      {/* Main Section */}
      <section
        id="contact"
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 md:pt-34 pb-16"
      >
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative inline-block mb-6">
              <div className="relative rounded-full p-[2px] bg-white/5 overflow-hidden inline-block">
                {/* Rotating Shine */}
                <div
                  className="absolute top-1/2 left-1/2 w-[280%] aspect-square rounded-full pointer-events-none"
                  style={{
                    transform: "translate(-50%, -50%)",
                    background:
                      "conic-gradient(from 0deg, transparent 45%, rgba(180,210,255,0.6) 58%, #fff 65%, #fff 70%, rgba(180,210,255,0.6) 77%, transparent 88%)",
                    animation: "shine-rotate 2.4s linear infinite",
                  }}
                />

                {/* Pill Body */}
                <div
                  className="
                    relative z-10 px-8 py-2.5 rounded-full
                    text-[#08091c] font-semibold text-base tracking-wide
                  "
                  style={{
                    background:
                      "linear-gradient(160deg,#c8d4f8,#a8b8f0 45%,#8faae8)",
                  }}
                >
                  Reach Me Out
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-[-0.03em]">
              Hire Me For Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next Viral Project
              </span>
              <br />
              or Just Say Hi!
            </h1>

            <div className="mt-6 space-y-3 text-gray-400 text-sm">
              <p>✦ Book a free discovery call</p>
              <p>✦ Get premium cinematic edits</p>
              <p>✦ Response within 24 hours</p>
            </div>

            <div className="mt-8 space-y-3">
              {/* Email Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4">
                <h3 className="text-lg font-semibold mb-1 text-white">Reach Out To Me</h3>
                <p className="text-gray-400 text-xs mb-2">
                  Need assistance? Drop me a message anytime.
                </p>
                <p className="text-blue-400 text-sm break-all font-medium">
                  shivam.kushwaha@gmail.com
                </p>
              </div>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/shivamm.editzzz_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 hover:bg-white/[0.05] transition"
              >
                <h3 className="text-lg font-semibold mb-1 text-white">Instagram</h3>
                <p className="text-purple-300 text-sm font-medium">@shivamm.editzzz_</p>
              </a>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <p className="text-lg font-bold text-white">2+</p>
                  <p className="text-gray-500 text-xs mt-0.5">Years</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <p className="text-lg font-bold text-white">24h</p>
                  <p className="text-gray-500 text-xs mt-0.5">Response</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <p className="text-lg font-bold text-white">100%</p>
                  <p className="text-gray-500 text-xs mt-0.5">Premium</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 w-full">
            {/* RIGHT SIDE — CALENDLY */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              className="relative rounded-[28px] p-[1px] overflow-hidden"
            >
              {/* Animated Premium Border */}
              <div className="absolute inset-0 rounded-[28px] overflow-hidden">
                <div
                  className="absolute inset-[-150%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 35%, rgba(120,160,255,0.4) 46%, rgba(255,255,255,0.95) 50%, rgba(180,120,255,0.45) 54%, transparent 65%)",
                    animation: "spin-border 6s linear infinite",
                  }}
                />
              </div>

              {/* Glass Container */}
              <div className="relative z-10 rounded-[26px] bg-[#0a1022]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Book Discovery Call
                    </h2>
                    <p className="text-gray-500 mt-0.5 text-xs">
                      Let’s discuss your next project
                    </p>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-300">
                    30 Min Call
                  </div>
                </div>

                {/* Calendly */}
                <div className="rounded-[20px] overflow-hidden border border-white/5 transition-all duration-300">
                  <InlineWidget
                    url="https://calendly.com/kushwahashivam9454/shivam-discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=03002c&text_color=ffffff&primary_color=c8e0ff"
                    styles={{
                      height: widgetHeight,
                      minHeight: "560px",
                      transition: "height 0.25s ease-out",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* WHATSAPP CONTACT CARD */}
            <motion.a
              href="https://wa.me/919824274036"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              className="group relative flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-lg transition-colors cursor-pointer overflow-hidden"
            >
              {/* Green Glow effect behind icon on hover */}
              <div className="absolute -left-10 -top-10 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full group-hover:bg-emerald-500/20 transition-all duration-500" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] transition-colors group-hover:text-emerald-300">
                    Contact me on WhatsApp
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium">
                    +91 98242 74036
                  </p>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300 relative z-10 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes spin-border {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}