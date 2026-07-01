import { motion } from "framer-motion";

function TestimonialCard({ name, role, text }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[340px] rounded-3xl p-[1px] bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10"
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
    >
      <div className="h-full rounded-3xl bg-[#0a1022]/95 backdrop-blur-2xl border border-white/10 px-5 py-5">
        
        {/* Name + Role */}
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold">{name}</h4>
          <p className="text-gray-500 text-xs mt-1">{role}</p>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
            >
              <path d="M11.48 3.499a.563.563 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321 1.012l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.386a.562.562 0 01-.84.61L12 17.77l-4.723 2.794a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L3.336 10.41a.562.562 0 01.321-1.012l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-4" />

        {/* Review */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  const row1 = [
    {
      name: "Alex Morgan",
      role: "YouTube Creator",
      text: "Shivam completely transformed my content. Retention improved massively and edits feel cinematic.",
    },
    {
      name: "Daniel Ross",
      role: "Documentary Producer",
      text: "Amazing storytelling sense. Every cut felt intentional and emotionally powerful.",
    },
    {
      name: "Sarah Lee",
      role: "Personal Brand Coach",
      text: "His short-form edits helped us reach millions of views consistently.",
    },
    {
      name: "Ryan Carter",
      role: "Agency Owner",
      text: "Fast delivery, premium quality, and excellent communication throughout.",
    },
  ];

  const row2 = [
    {
      name: "Emma Stone",
      role: "Real Estate Creator",
      text: "The property videos now feel premium and luxurious. Huge improvement.",
    },
    {
      name: "Noah James",
      role: "Gaming Creator",
      text: "Motion graphics and pacing were insane. Audience watch time increased.",
    },
    {
      name: "Olivia Chen",
      role: "Brand Strategist",
      text: "Professional, creative, and always delivers beyond expectations.",
    },
    {
      name: "Chris Walker",
      role: "Content Agency",
      text: "One of the best editors I have worked with. Highly recommended.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#050818] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Pill */}
        <motion.div
          className="flex justify-center mb-8 "
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="relative inline-block">
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
                What Our Clients Say
              </div>
            </div>
          </div>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          className="relative overflow-hidden mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#050818] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#050818] to-transparent pointer-events-none" />

          <div className="flex gap-6 animate-marquee">
            {[...row1, ...row1].map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#050818] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#050818] to-transparent pointer-events-none" />

          <div className="flex gap-6 animate-marquee-reverse">
            {[...row2, ...row2].map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;