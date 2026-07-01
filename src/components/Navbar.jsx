import { useNavigate } from "react-router-dom";

function Navbar() {
  const goHome = () => {
  if (window.location.pathname !== "/") {
    navigate("/");
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
  const navigate = useNavigate();
  const navItems = [
  { label: "My Work", id: "works" },
  { label: "My Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "About Me", id: "about" },
];

const scrollToSection = (id) => {
  if (window.location.pathname !== "/") {
    navigate(`/#${id}`);
    return;
  }

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-8 py-2
          rounded-full
          border border-white/20
          bg-white/5
          backdrop-blur-md
          shadow-lg
        "
      >
        {/* Left Side */}
        <div
  onClick={goHome}
  className="flex items-center gap-3 cursor-pointer"
>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
            <img
              src="/images/shivampf.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg">
              Shivam Kushwaha
            </h2>
            <div className="h-5 overflow-hidden">
              <div className="animate-role-slide">
                <p className="text-gray-400 text-sm font-medium h-5">Video Editor</p>
                <p className="text-gray-400 text-sm font-medium h-5">Motion Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center */}
        <ul className="hidden md:flex items-center gap-10">
  {navItems.map((item) => (
    <li
      key={item.label}
      onClick={() => scrollToSection(item.id)}
      className="group cursor-pointer h-6 overflow-hidden"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-6">
        <p className="text-gray-300 font-normal h-6">{item.label}</p>
        <p className="text-white font-semibold h-6">{item.label}</p>
      </div>
    </li>
  ))}
</ul>

        {/* Right Side */}
        {/* Buttons */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>

          {/* Shine CTA */}
          <div style={{ position: "relative", display: "inline-block" }}>
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
                onClick={() => navigate("/contact")}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
