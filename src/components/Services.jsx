import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Documentary Edit",
    desc: "Story-driven edits with pacing, sound design, and cinematic transitions.",
    icon: "🎥",
  },
  {
    title: "Viral Shorts",
    desc: "Retention-focused reels and shorts optimized for social growth.",
    icon: "🚀",
  },
  {
    title: "Motion Graphics",
    desc: "Dynamic animations, callouts, lower thirds, and visual effects.",
    icon: "✨",
  },
  {
    title: "Real Estate Edit",
    desc: "Luxury property showcases with smooth transitions and cinematic feel.",
    icon: "🏠",
  },
  {
    title: "Cinematic Edit",
    desc: "High-end color grading, transitions, and emotional storytelling.",
    icon: "🎬",
  },
  {
    title: "Gaming Edit",
    desc: "High-energy edits with effects, memes, subtitles, and sound sync.",
    icon: "🎮",
  },
  {
    title: "Custom Projects",
    desc: "Podcasts, ads, YouTube, courses, and any custom editing needs.",
    icon: "⚡",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
  hover: {
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 22,
    },
  },
};

const badgeVariants = {
  initial: { scale: 1, y: 0 },
  hover: (i) => ({
    scale: 1.15,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: i * 0.04,
    },
  }),
};

function ServiceCard({ service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="
        group relative rounded-[28px] p-[1px] overflow-hidden
      "
      whileHover="hover"
      initial="initial"
    >
      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/20 via-white/5 to-purple-500/20"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.3 } },
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full rounded-[28px] bg-[#091120]/95 border border-white/10 backdrop-blur-xl p-5">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl mb-4"
          variants={{
            hidden: { scale: 1, rotate: 0 },
            visible: { scale: 1, rotate: 0 },
            hover: {
              scale: 1.18,
              rotate: 8,
              transition: { type: "spring", stiffness: 300, damping: 14 },
            },
          }}
        >
          {service.icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-white text-lg font-semibold mb-2.5"
          variants={{
            hidden: { color: "#ffffff" },
            visible: { color: "#ffffff" },
            hover: { color: "#60a5fa", transition: { duration: 0.2 } },
          }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-[13px] leading-relaxed mb-5"
          variants={{
            hidden: { color: "#9ca3af" },
            visible: { color: "#9ca3af" },
            hover: { color: "#e5e7eb", transition: { duration: 0.2 } },
          }}
        >
          {service.desc}
        </motion.p>

        {/* Software Badges */}
        <div className="flex gap-3">
          <motion.img
            custom={0}
            variants={badgeVariants}
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
            className="w-8 h-8 rounded-lg"
            alt="PR"
          />
          <motion.img
            custom={1}
            variants={badgeVariants}
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
            className="w-8 h-8 rounded-lg"
            alt="AE"
          />
          <motion.img
            custom={2}
            variants={badgeVariants}
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
            className="w-8 h-8 rounded-lg bg-black p-1"
            alt="DV"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#050818] overflow-hidden">
      {/* DOT PATTERN BACKGROUND */}
      <img
        src="/images/dot-pattern.avif"
        alt="Dot Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.75] pointer-events-none"
      />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Services Pill */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="relative inline-block">
            <div className="relative rounded-full p-[2px] bg-white/5 overflow-hidden inline-block">
              <div
                className="absolute top-1/2 left-1/2 w-[280%] aspect-square rounded-full pointer-events-none"
                style={{
                  transform: "translate(-50%, -50%)",
                  background:
                    "conic-gradient(from 0deg, transparent 45%, rgba(180,210,255,0.6) 58%, #fff 65%, #fff 70%, rgba(180,210,255,0.6) 77%, transparent 88%)",
                  animation: "shine-rotate 2.4s linear infinite",
                }}
              />
              <div
                className="relative z-10 px-8 py-2.5 rounded-full text-[#08091c] font-semibold text-base tracking-wide"
                style={{
                  background:
                    "linear-gradient(160deg,#c8d4f8,#a8b8f0 45%,#8faae8)",
                }}
              >
                What I Offer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            From short-form viral content to cinematic storytelling — I provide
            complete editing solutions tailored to your brand and audience.
          </p>
        </motion.div>

        {/* Grid 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Grid 2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.slice(4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}