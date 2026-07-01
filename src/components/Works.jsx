import { useEffect, useRef, useState } from "react";

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

/* -------------------- VIDEO CARD -------------------- */

function VideoCard({ item, isShort = false, activeVideoId, setActiveVideoId }) {
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
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onContextMenu={(e) => e.preventDefault()}
      className="
        group relative rounded-3xl p-[1.5px] overflow-hidden
        transition-all duration-500 hover:-translate-y-2
      "
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
            <img
              src={item.thumbUrl}
              alt=""
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-300
                ${hovered ? "opacity-0" : "opacity-100"}
              `}
            />

            {/* Hover Preview */}
            {hovered && (
              <video
                ref={previewRef}
                src={item.videoUrl}
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}
            <button
              onClick={openPlayer}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="
                  w-20 h-20 rounded-full
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  flex items-center justify-center
                  shadow-lg shadow-black/30
                  hover:scale-110 transition-all duration-300
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </>
        ) : (
          <video
            ref={playerRef}
            src={item.videoUrl}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
export default function Works() {
  const [activeTab, setActiveTab] = useState("long");
  const [activeVideoId, setActiveVideoId] = useState(null);

  const currentVideos = activeTab === "long" ? LONG_FORM : SHORT_FORM;

  return (
    <section id="works" className="relative py-32 bg-[#050818] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Pill Header */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            {/* Outer Border */}
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
                My Works
              </div>
            </div>
          </div>
        </div>

        {/* Small Description */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of long-form storytelling and high-performing
            short-form edits.
          </p>
        </div>
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-xl">
            {/* Sliding pill with bounce */}
            <div
              className={`
        absolute top-1 bottom-1 w-[145px] rounded-full bg-white
        transition-all duration-500
        ${
          activeTab === "long"
            ? "left-1 scale-100"
            : "translate-x-[145px] scale-[1.03]"
        }
      `}
              style={{
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            <button
              onClick={() => setActiveTab("long")}
              className={`
        relative z-10 w-[145px] py-3 rounded-full font-medium
        transition-all duration-300
        ${activeTab === "long" ? "text-black" : "text-gray-400"}
      `}
            >
              Long Form
            </button>

            <button
              onClick={() => setActiveTab("short")}
              className={`
        relative z-10 w-[145px] py-3 rounded-full font-medium
        transition-all duration-300
        ${activeTab === "short" ? "text-black" : "text-gray-400"}
      `}
            >
              Short Form
            </button>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`
    grid gap-8
    ${
      activeTab === "long"
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto"
    }
  `}
        >
          {currentVideos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              isShort={activeTab === "short"}
              activeVideoId={activeVideoId}
              setActiveVideoId={setActiveVideoId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
