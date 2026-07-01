import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
// 👉 Paste each brand's uploaded Cloudinary logo link into `logoUrl` below.
const BRANDS = [
  { id: 1, name: "NxgSecure", logoUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782805405/NxgSecure_jcw0mb.png" },
  { id: 2, name: "Philips", logoUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782805405/philips_vmpp6q.png" },
  { id: 3, name: "Perkpay", logoUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782805405/perkpay_mntger.png" },
  { id: 4, name: "Excellent", logoUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782805689/excellent_l464h8.png" },
  { id: 5, name: "Collabrix", logoUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782805470/collabrix_u7mpvg.png" },
];

const LOGO_W = 140;
const LOGO_H = 32;
const LOGO_GAP = 64;
// Faster than the video carousel (SPEED = 0.6) per the brief.
const LOGO_SPEED = 0.9;

// Three copies for the same reason as the video carousel — always a full
// buffer set on both sides of the visible window, so no empty gap at wrap.
const BRAND_ITEMS = [...BRANDS, ...BRANDS, ...BRANDS];

// Each card carries a video URL and its own thumbnail URL.
// 👉 Paste your uploaded Cloudinary thumbnail link into `thumbUrl` for each card below.
const WORK_CARDS = [
  { id: 1, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782799817/1_phomd9.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840441/1_wmeppi.gif" },
  { id: 2, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782799859/2_zvxyzd.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840442/2_m93fup.gif" },
  { id: 3, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800120/3_setibs.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/3_bm6bkg.gif" },
  { id: 4, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800128/6_nnmfzx.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782809458/6th_f0yvfu.gif" },
  { id: 5, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800140/9_dzbc7x.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840441/9_th_mpd0wl.gif" },
  { id: 6, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800410/14_ud4ab0.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782807698/14_th_ta57s8.gif" },
  { id: 7, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800406/11_najeer.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/11_r6dyn1.gif" },
  { id: 8, videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800409/10_k2prtb.mp4", thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/10_walxej.gif" },
];

const CARD_W = 255;
const CARD_H = 453;
const GAP = 20;
const SPEED = 0.6;

// Three copies — two is not enough once the wrap point is reached, because
// there's no buffer set after the visible window, which is what was causing
// the carousel to show an empty gap right as it looped. Three keeps a full
// extra set on each side of the active scroll window at all times.
const CAROUSEL_ITEMS = [...WORK_CARDS, ...WORK_CARDS, ...WORK_CARDS];

function VideoCard({ card, onHoverChange }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    onHoverChange(true);
    // Mount the <video> only now — nothing loads until this point.
    setShowVideo(true);
  };

  const handleLeave = () => {
    setHovered(false);
    onHoverChange(false);
    setMuted(true);
    // Fully unmount the video element so its buffer/memory is released,
    // not just paused (a paused <video> still holds decoded frames in memory).
    setShowVideo(false);
  };

  // Once the video element mounts, start it playing muted (autoplay-safe).
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = true;
      setMuted(true);
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        position: "relative",
        flexShrink: 0,
        width: CARD_W,
        height: CARD_H,
        borderRadius: 24,
        padding: "2px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.06)",
        transition: "box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 20px 48px rgba(80,110,255,0.2)"
          : "0 6px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Revolving shine border */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        width: "300%", paddingBottom: "300%",
        transform: "translate(-50%,-50%)",
        background: hovered
          ? "conic-gradient(from 0deg,transparent 30%,rgba(180,210,255,0.55) 44%,rgba(255,255,255,0.98) 52%,rgba(180,210,255,0.55) 60%,transparent 74%)"
          : "conic-gradient(from 0deg,transparent 45%,rgba(180,210,255,0.28) 58%,rgba(255,255,255,0.62) 65%,rgba(180,210,255,0.28) 72%,transparent 85%)",
        animation: `card-shine ${hovered ? "1.6s" : "4s"} linear infinite`,
        borderRadius: "075%",
        transition: "background 0.4s ease",
        pointerEvents: "none",
      }} />

      {/* Inner card */}
      <div style={{
        position: "relative", width: "100%", height: "100%",
        borderRadius: 22, overflow: "hidden",
        background: "#0a0e28",
        boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.08)",
      }}>
        {/* Thumbnail — always rendered, fades out once the video is ready */}
        <img
          src={card.thumbUrl}
          alt=""
          loading="lazy"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            transition: "opacity 0.25s ease, filter 0.3s ease",
            filter: hovered ? "brightness(1.05)" : "brightness(1)",
            opacity: showVideo ? 0 : 1,
          }}
        />

        {/* Video — only mounted on hover, fully unmounted on leave */}
        {showVideo && (
          <video
            ref={videoRef}
            src={card.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              transition: "filter 0.3s ease, opacity 0.25s ease",
              filter: hovered ? "brightness(1.05)" : "brightness(1)",
              opacity: showVideo ? 1 : 0, 
            }}
          />
        )}

        {/* Top sheen */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(160deg,rgba(255,255,255,0.09) 0%,transparent 50%)",
        }} />

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: hovered ? "rgba(20,40,100,0.10)" : "rgba(4,6,20,0.15)",
          transition: "background 0.3s ease",
        }} />

        {/* Mute toggle button — shown on hover, once video is active */}
        {showVideo && (
          <button
            onClick={toggleMute}
            style={{
              position: "absolute", bottom: 12, right: 12,
              width: 36, height: 36, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: muted ? "rgba(10,14,40,0.72)" : "rgba(80,120,255,0.28)",
              border: `1px solid ${muted ? "rgba(255,255,255,0.16)" : "rgba(120,170,255,0.5)"}`,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              cursor: "pointer",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1) translateY(0)" : "scale(0.8) translateY(6px)",
              transition: "opacity 0.22s ease, transform 0.22s ease, background 0.2s ease, border-color 0.2s ease",
              zIndex: 10,
            }}
          >
            {muted ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="#8899cc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="#a0c4ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ShivamHero() {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const scrollPos = useRef(0);
  const carouselHovered = useRef(false);
  const rafRef = useRef(null);
  const singleSetW = WORK_CARDS.length * (CARD_W + GAP);

  // Carousel — starts scrolled into the middle set, so there's always a
  // full set of cards rendered both before and after the visible window.
  // The wrap snaps scrollPos back by exactly one set width while staying
  // inside the middle set's range, so the swap is invisible — no empty gap.
  useEffect(() => {
    scrollPos.current = singleSetW;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${singleSetW}px)`;
    }

    const step = () => {
      if (!carouselHovered.current && trackRef.current) {
        scrollPos.current += SPEED;
        if (scrollPos.current >= singleSetW * 2) scrollPos.current -= singleSetW;
        else if (scrollPos.current < singleSetW) scrollPos.current += singleSetW;
        trackRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [singleSetW]);

  // Brand logo ticker — scrolls left → right (opposite direction to the
  // video carousel above) and a touch faster, using the same 3-set
  // buffered-wrap technique so it never shows an empty gap.
  const logoTrackRef = useRef(null);
  const logoScrollPos = useRef(0);
  const logoRafRef = useRef(null);
  const singleLogoSetW = BRANDS.length * (LOGO_W + LOGO_GAP);

  useEffect(() => {
    logoScrollPos.current = singleLogoSetW;
    if (logoTrackRef.current) {
      logoTrackRef.current.style.transform = `translateX(-${singleLogoSetW}px)`;
    }

    const step = () => {
      if (logoTrackRef.current) {
        // Subtracting (instead of adding, as the video carousel does)
        // moves the track to the right, i.e. logos travel left → right.
        logoScrollPos.current -= LOGO_SPEED;
        if (logoScrollPos.current <= 0) logoScrollPos.current += singleLogoSetW;
        else if (logoScrollPos.current > singleLogoSetW * 2) logoScrollPos.current -= singleLogoSetW;
        logoTrackRef.current.style.transform = `translateX(-${logoScrollPos.current}px)`;
      }
      logoRafRef.current = requestAnimationFrame(step);
    };
    logoRafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(logoRafRef.current);
  }, [singleLogoSetW]);

  // Any card hovered → pause carousel motion so the user can inspect it.
  const handleCardHoverChange = (isHovered) => {
    carouselHovered.current = isHovered;
  };

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "100svh", background: "#050818", fontFamily: "'Inter',sans-serif" }}
    >
      <style>{`
        @keyframes card-shine {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes shine-rotate {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
      `}</style>

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 70% 55% at 50% 42%,rgba(30,60,180,0.36) 0%,rgba(20,30,100,0.15) 55%,transparent 80%)",
      }} />
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 38% 28% at 50% 36%,rgba(80,100,255,0.11) 0%,transparent 70%)",
      }} />

      {/* ── Hero Text ── */}
      <motion.div
  initial="hidden"
  animate="visible"
  className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-4"
>

        {/* Badge */}
        <motion.div
  variants={fadeUp}
  custom={0.1}
  initial="hidden"
  animate="visible"
  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-s mb-8"
  style={{
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.13)",
    color: "#c5d0f0"
  }}
>
          <span className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80", flexShrink: 0 }} />
          ✦ Available for new projects
        </motion.div>

        {/* Headline */}
        <motion.h1
  variants={fadeUp}
  custom={0.25}
  initial="hidden"
  animate="visible"
  style={{
    fontSize: "clamp(1.9rem,4.2vw,3.6rem)",
    fontWeight: 700,
    color: "#e8eeff",
    letterSpacing: "-0.02em",
    maxWidth: 780,
    lineHeight: 1.15,
    margin: "0 0 1.1rem",
  }}
>
          I Turn Raw Footage Into{" "}
          <span style={{
            background: "linear-gradient(90deg,#6b8fff,#a78bfa 60%,#c4b5fd)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Viral Content
          </span>{" "}
          That Converts
        </motion.h1>

        {/* Sub */}
        <motion.p
  variants={fadeUp}
  custom={0.4}
  initial="hidden"
  animate="visible"
  style={{
    fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
    color: "#7a8fb8",
    maxWidth: 540,
    lineHeight: 1.7,
    margin: "0 0 2rem",
  }}
>
          From cinematic edits to high-retention reels, I help creators and brands
          boost engagement with scroll-stopping videos that tell powerful stories.
        </motion.p>

        {/* Buttons */}
        <motion.div
  variants={fadeUp}
  custom={0.55}
  initial="hidden"
  animate="visible"
  style={{
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }}
>

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
              <motion.button
                style={{
                  position: "relative", zIndex: 1, padding: "12px 32px",
                  borderRadius: 9999,
                  background: "linear-gradient(160deg,#c8d4f8,#a8b8f0 45%,#8faae8)",
                  color: "#08091c", fontWeight: 600, fontSize: "0.92rem",
                  border: "none", cursor: "pointer", whiteSpace: "nowrap",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onClick={() => navigate("/contact")}
              >
                Place Your Order
              </motion.button>
            </div>
          </div>

          {/* Ghost */}
          <motion.button
            style={{
              padding: "12px 26px", borderRadius: 9999, background: "transparent",
              color: "#c5d0f0", fontWeight: 600, fontSize: "0.92rem",
              border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            whileHover={{
              scale: 1.04,
              background: "rgba(255,255,255,0.07)",
              borderColor: "rgba(255,255,255,0.34)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            onClick={() => {
              const element = document.getElementById("works");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            See My Works
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
  className="relative z-10 mt-8 mb-4"
  variants={scaleIn}
  initial="hidden"
  animate="visible"
>
        {/* Edge fades */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right,#050818,transparent)" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to left,#050818,transparent)" }} />

        <div
          ref={trackRef}
          style={{ display: "flex", gap: GAP, alignItems: "center", willChange: "transform", paddingBottom: 16 }}
        >
          {CAROUSEL_ITEMS.map((card, i) => (
            <VideoCard key={`${card.id}-${i}`} card={card} onHoverChange={handleCardHoverChange} />
          ))}
        </div>
      </motion.div>

      {/* ── Worked for brands ── */}
      <motion.div
  className="relative z-10 mt-auto py-10"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.8,
    ease: [0.22, 1, 0.36, 1]
  }}
  style={{
    borderTop: "1px solid rgba(255,255,255,0.06)"
  }}
>
        <p style={{
          textAlign: "center", fontSize: 15, fontWeight: 600,
          letterSpacing: "0.04em", color: "rgba(220,228,255,0.85)",
          margin: "0 0 22px",
        }}>
          Worked for brands around the world
        </p>

        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Edge fades */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 90, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right,#050818,transparent)" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 90, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to left,#050818,transparent)" }} />

          <div
            ref={logoTrackRef}
            className="flex items-center py-2"
            style={{ gap: LOGO_GAP, willChange: "transform" }}
          >
            {BRAND_ITEMS.map((brand, i) => (
              <img
                key={`${brand.id}-${i}`}
                src={brand.logoUrl}
                alt={brand.name}
                loading="lazy"
                style={{
                  flexShrink: 0,
                  width: LOGO_W,
                  height: LOGO_H,
                  objectFit: "contain",
                  opacity: 0.85,
                  filter: "brightness(0) invert(1)",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}