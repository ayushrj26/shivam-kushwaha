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

function ServiceCard({ service }) {
  return (
    <div
      className="
        group relative rounded-[28px] p-[1px] overflow-hidden
        hover:-translate-y-2 transition-all duration-500
      "
    >
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/20 via-white/5 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Card */}
      <div className="relative z-10 h-full rounded-[28px] bg-[#091120]/95 border border-white/10 backdrop-blur-xl p-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl mb-5">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>

        {/* Software Badges */}
        <div className="flex gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
            className="w-8 h-8 rounded-lg"
            alt="PR"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
            className="w-8 h-8 rounded-lg"
            alt="AE"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
            className="w-8 h-8 rounded-lg bg-black p-1"
            alt="DV"
          />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#050818] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Services Pill */}
        <div className="flex justify-center mb-8">
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
                Services
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-14">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From short-form viral content to cinematic storytelling — I provide
            complete editing solutions tailored to your brand and audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          {SERVICES.slice(4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}