import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const navLinkClass =
    "relative w-fit text-[13px] text-gray-400 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-11"
      >
        <div className="grid md:grid-cols-[1.4fr_0.6fr_0.6fr] gap-12">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2.5">
              Shivam Kushwaha
            </h2>

            <p className="text-gray-400 text-[13px] max-w-sm leading-relaxed">
              Professional video editor transforming raw footage into cinematic,
              high-retention content that boosts engagement and drives results.
            </p>

            <p className="mt-4 text-[13px] text-gray-300">
              Get in Touch:{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                shivam.kushwaha@gmail.com
              </span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4.5">
              <a
                href="https://www.instagram.com/shivamm.editzzz_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="mailto:shivam.kushwaha@gmail.com"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-white hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                <MdEmail size={18} />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div className="md:text-right">
            <h3 className="text-white text-[13px] font-semibold mb-3.5">Sections</h3>

            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/#about" className={navLinkClass}>
                About
              </Link>
              <Link to="/#works" className={navLinkClass}>
                Works
              </Link>
              <Link to="/#services" className={navLinkClass}>
                Services
              </Link>
              <Link to="/#testimonials" className={navLinkClass}>
                Testimonials
              </Link>
              <Link to="/#faq" className={navLinkClass}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="md:text-right">
            <h3 className="text-white text-[13px] font-semibold mb-3.5">Pages</h3>

            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Shivam Kushwaha. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}