function ToolCard({ name, icon, subtitle, className = "", rotate = "" }) {
  return (
    <div
      className={`
        group absolute ${className} ${rotate}
        w-72 rounded-3xl p-[1.5px]
        overflow-hidden
        hover:-translate-y-3 hover:rotate-0 hover:scale-105
        transition-all duration-500 ease-out
      `}
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="shine-border absolute inset-[-150%]" />
      </div>

      <div
        className="
          relative z-10
          rounded-3xl
          bg-[#0a1022]/95
          backdrop-blur-2xl
          border border-white/10
          px-6 py-5
          flex items-center gap-4
        "
      >
        <img src={icon} alt={name} className="w-14 h-14 rounded-xl" />

        <div>
          <p className="text-white font-semibold text-lg">{name}</p>
          <p className="text-gray-400 text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  const services = [
    "Documentary Edits",
    "Cinematic Edits",
    "Talking Head Videos",
    "Viral Reel Edits",
    "Full Production Handling",
  ];

  return (
    <section id="about" className="relative py-32 bg-[#050818] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="relative rounded-full p-[1px] overflow-hidden">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="pill-shine absolute inset-[-250%]" />
            </div>

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
                About Me
              </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[600px] [perspective:1000px]">
          <div className="absolute w-[550px] h-[550px] rounded-full border border-white/10" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10" />

          {/* Premiere uses old DaVinci rotation */}
          <ToolCard
            name="Premiere Pro"
            subtitle="Video Editing"
            icon="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
            className="left-30 top-30"
            rotate="rotate-2"
          />

          {/* After Effects uses old Photoshop rotation */}
          <ToolCard
            name="After Effects"
            subtitle="Motion Graphics"
            icon="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
            className="right-30 top-30"
            rotate="-rotate-2"
          />

          {/* DaVinci uses old Premiere rotation */}
          <ToolCard
            name="DaVinci Resolve"
            subtitle="Color Grading"
            icon="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
            className="left-28 bottom-50"
            rotate="-rotate-2"
          />

          {/* Photoshop uses old After Effects rotation */}
          <ToolCard
            name="Photoshop"
            subtitle="Thumbnail Design"
            icon="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
            className="right-28 bottom-50"
            rotate="rotate-2"
          />

          <img
            src="https://res.cloudinary.com/dnkycods9/image/upload/v1782904690/shivam_c4ajzx.png"
            alt="Shivam"
            className="relative z-20 h-[500px] object-contain drop-shadow-[0_0_40px_rgba(80,100,255,0.4)]"
          />
        </div>

        <div className="mt-14 flex justify-center">
          <div className="group relative w-full max-w-6xl rounded-[30px] border border-white/10 bg-[#070d18]/90 backdrop-blur-xl px-8 py-8 overflow-hidden">
            {/* DOT PATTERN BACKGROUND - PUT YOUR IMAGE PATH HERE */}
            <img
              src="/images/dot-pattern.avif"
              alt="Dot Pattern"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.75] pointer-events-none"
            />

            {/* Blue Glow */}
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* LEFT SIDE */}
                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-6xl font-bold text-white/10 leading-none">
                      01
                    </span>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 leading-tight">
                        Hello, I am{" "}
                        <span className="text-blue-400">Shivam</span>
                      </h2>

                      <p className="mt-2 text-gray-400 text-lg">
                        Welcome to my creative space
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
                    Professional video editor specializing in short-form
                    content, motion graphics, and documentary storytelling with
                    over
                    <span className="text-blue-400 font-medium">
                      {" "}
                      2+ years{" "}
                    </span>
                    of experience.
                  </p>

                  <div style={{ position: "relative", display: "inline-block", paddingTop: "10px" }}>
            <div style={{
              position: "relative", borderRadius: 9999, padding: "3px",
              background: "rgba(255,255,255,0.07)", overflow: "hidden", display: "inline-block",
            }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                width: "280%", paddingBottom: "280%",
                transform: "translate(-50%,-50%)",
                background: "conic-gradient(from 0deg,transparent 45%,rgba(180,210,255,0.6) 58%,#fff 65%,#fff 70%,rgba(180,210,255,0.6) 77%,transparent 88%)",
                animation: "shine-rotate 2.4s linear infinite",
                borderRadius: "50%", pointerEvents: "none",
              }} />
              <button
                style={{
                  position: "relative", zIndex: 1, padding: "12px 32px",
                  borderRadius: 9999,
                  background: "linear-gradient(160deg,#c8d4f8,#a8b8f0 45%,#8faae8)",
                  color: "#08091c", fontWeight: 600, fontSize: "0.92rem",
                  border: "none", cursor: "pointer", whiteSpace: "nowrap",
                  transition: "transform 0.18s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                Place Your Order
              </button>
            </div>
          </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative h-[250px] flex items-center justify-center">
                  {/* After Effects */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
                    className="
  absolute top-8 left-38 w-14 h-14
  grayscale brightness-75
  rotate-[-8deg]
  
  transition-all duration-700 ease-out
  group-hover:left-30
  group-hover:top-1
  group-hover:scale-110
  group-hover:grayscale-0
  group-hover:brightness-100
"
                    alt="AE"
                  />

                  {/* Premiere */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
                    className="
  absolute top-10 left-55 w-14 h-14
  grayscale brightness-75
  rotate-[4deg]
  transition-all duration-700 ease-out
  group-hover:left-50
  group-hover:top-4
  group-hover:scale-110
  group-hover:grayscale-0
  group-hover:brightness-100
"
                    alt="PR"
                  />

                  {/* Photoshop */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                    className="
  absolute top-10 right-45 w-14 h-14
  grayscale brightness-75
  rotate-[-4deg]
  transition-all duration-700 ease-out
  group-hover:right-42
  group-hover:top-4
  group-hover:scale-110
  group-hover:grayscale-0
  group-hover:brightness-100
"
                    alt="PS"
                  />

                  {/* Davinci */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
                    className="
  absolute top-8 right-28 w-14 h-14
  grayscale brightness-75
  rotate-[8deg]
  bg-black p-1 rounded-xl
  transition-all duration-700 ease-out
  group-hover:right-22
  group-hover:top-1
  group-hover:scale-110
  group-hover:grayscale-0
  group-hover:brightness-100
"
                    alt="Davinci"
                  />

                  {/* Small Glass Card */}
                  <div
                    className="
      absolute bottom-5 w-full max-w-sm
      rounded-3xl border border-white/10
      bg-white/[0.03] backdrop-blur-xl
      px-5 py-4 z-10
      scale-95
      transition-all duration-700 ease-out
      group-hover:scale-105
    "
                  >
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>✦ Short-form edits with strong retention</p>
                      <p>✦ Advanced motion graphics in After Effects</p>
                      <p>✦ Cinematic color grading in DaVinci</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
