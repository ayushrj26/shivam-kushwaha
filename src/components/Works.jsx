import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- PLACEHOLDER DATA -------------------- */
/* Replace with your Cloudinary links later */

const LONG_FORM = [
  {
    id: 1,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782897011/long_1_hqy73e.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903856/1_long_th_m7xyfe.png",
  },
  {
    id: 2,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782908119/long_6_re_swzeed.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903854/long_6_bhmbhd.png",
  },
  {
    id: 3,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782897016/long_2_ch3ews.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903853/long_2_th_f7qg2i.png",
  },
  {
    id: 4,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782897013/long_3_bzuugt.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903854/long_3_th_b67ygz.png",
  },
  {
    id: 5,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782897028/long_4_sbajgv.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903853/long_4_krerjq.png",
  },
  {
    id: 6,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782908125/long_5_re_vihqtc.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903853/long_5_pnljw6.png",
  },
];

const SHORT_FORM = [
  {
    id: 1,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800410/14_ud4ab0.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903854/14_th_vu4n7t.png",
  },
  {
    id: 2,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782799817/1_phomd9.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782840441/1_wmeppi.gif",
  },
  {
    id: 3,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782799859/2_zvxyzd.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903855/2_th_adcsg9.png",
  },
  {
    id: 4,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800120/3_setibs.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903856/3_th_fblnz1.png",
  },
  {
    id: 5,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800140/9_dzbc7x.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903855/9_th_ev7ezb.png",
  },
  {
    id: 6,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800406/11_najeer.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903854/11_th_ljolvc.png",
  },
  {
    id: 7,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800416/13_t6f2vf.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903855/13_th_v6vwue.png",
  },
  {
    id: 8,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800409/10_k2prtb.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903855/10_th_lxgrtq.png",
  },
  {
    id: 9,
    videoUrl:
      "https://res.cloudinary.com/dnkycods9/video/upload/v1782800426/12_egypry.mp4",
    thumbUrl:
      "https://res.cloudinary.com/dnkycods9/image/upload/v1782903855/12_th_s89dvo.png",
  },
  {
    id: 10,
    videoUrl: "SHORT_10_VIDEO",
    thumbUrl: "SHORT_10_THUMB",
  },
  {
    id: 11,
    videoUrl: "SHORT_11_VIDEO",
    thumbUrl: "SHORT_11_THUMB",
  },
  {
    id: 12,
    videoUrl: "SHORT_12_VIDEO",
    thumbUrl: "SHORT_12_THUMB",
  },
];

/* -------------------- ANIMATION VARIANTS -------------------- */

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

/* -------------------- VIDEO CARD -------------------- */

function VideoCard({ item, isShort = false, activeVideoId, setActiveVideoId, index }) {
  const previewRef = useRef(null);
  const playerRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const opened = activeVideoId === item.id;

  const handleEnter = () => {
    if (!opened) setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (hovered && previewRef.current) {
      previewRef.current.play().catch(() => {});
    }
  }, [hovered]);

  const openPlayer = () => {
    setActiveVideoId(item.id);
    setHovered(false);

    setTimeout(() => {
      playerRef.current?.play().catch(() => {});
    }, 100);
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onContextMenu={(e) => e.preventDefault()}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      className="group relative rounded-3xl p-[1.5px] overflow-hidden"
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="shine-border absolute inset-[-150%]" />
      </div>

      {/* Card */}
      <div
        className={`
          relative z-10 rounded-3xl overflow-hidden
          bg-[#0a1022]/95 border border-white/10
          ${isShort ? "aspect-[9/16]" : "aspect-video"}
        `}
      >
        {!opened ? (
          <>
            {/* Thumbnail */}
            <motion.img
              src={item.thumbUrl}
              alt=""
              animate={{ opacity: hovered ? 0 : 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hover Preview */}
            {hovered && (
              <motion.video
                ref={previewRef}
                src={item.videoUrl}
                muted
                loop
                playsInline
                preload="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/30"
              animate={{ opacity: hovered ? 0.15 : 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Play Button */}
            <button
              onClick={openPlayer}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="
                  w-20 h-20 rounded-full
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  flex items-center justify-center
                  shadow-lg shadow-black/30
                "
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{
                  scale: hovered ? 1.08 : 1,
                  opacity: hovered ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </button>
          </>
        ) : (
          <motion.video
            ref={playerRef}
            src={item.videoUrl}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
}

/* -------------------- WORKS SECTION -------------------- */

export default function Works() {
  const [activeTab, setActiveTab] = useState("long");
  const [activeVideoId, setActiveVideoId] = useState(null);

  const currentVideos = activeTab === "long" ? LONG_FORM : SHORT_FORM;

  return (
    <section id="works" className="relative py-24 bg-[#050818] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Pill Header */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 16 }}
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
                className="relative z-10 px-8 py-2.5 rounded-full text-[#08091c] font-semibold text-base tracking-wide"
                style={{
                  background: "linear-gradient(160deg,#c8d4f8,#a8b8f0 45%,#8faae8)",
                }}
              >
                My Works
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            A collection of long-form storytelling and high-performing
            short-form edits.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
        >
          <div className="relative inline-flex rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-xl">
            {/* Sliding pill */}
            <motion.div
              className="absolute top-1 bottom-1 w-[130px] rounded-full bg-white"
              animate={{ x: activeTab === "long" ? 0 : 130 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />

            <button
              onClick={() => {
                setActiveTab("long");
                setActiveVideoId(null);
              }}
              className={`
                relative z-10 w-[130px] py-2.5 rounded-full font-medium
                transition-colors duration-300
                ${activeTab === "long" ? "text-black" : "text-gray-400"}
              `}
            >
              Long Form
            </button>

            <button
              onClick={() => {
                setActiveTab("short");
                setActiveVideoId(null);
              }}
              className={`
                relative z-10 w-[130px] py-2.5 rounded-full font-medium
                transition-colors duration-300
                ${activeTab === "short" ? "text-black" : "text-gray-400"}
              `}
            >
              Short Form
            </button>
          </div>
        </motion.div>

        {/* Grid — stagger triggers on scroll into view, AnimatePresence handles tab-switch exit */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.05 }}
            className={`
              grid gap-6
              ${
                activeTab === "long"
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto"
              }
            `}
          >
            {currentVideos.map((item, i) => (
              <VideoCard
                key={item.id}
                item={item}
                index={i}
                isShort={activeTab === "short"}
                activeVideoId={activeVideoId}
                setActiveVideoId={setActiveVideoId}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
