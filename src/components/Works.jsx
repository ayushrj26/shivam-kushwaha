import { useEffect, useRef, useState } from "react";

/* -------------------- PLACEHOLDER DATA -------------------- */
/* Replace with your Cloudinary links later */

const LONG_FORM = [
  {
    id: 1,
    videoUrl: "YOUR_CLOUDINARY_VIDEO_LINK",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
  {
    id: 2,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782855192/6_xz0tyq.mp4",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
  {
    id: 3,
    videoUrl: "YOUR_CLOUDINARY_VIDEO_LINK",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
  {
    id: 4,
    videoUrl: "YOUR_CLOUDINARY_VIDEO_LINK",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
  {
    id: 5,
    videoUrl: "YOUR_CLOUDINARY_VIDEO_LINK",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
  {
    id: 6,
    videoUrl: "YOUR_CLOUDINARY_VIDEO_LINK",
    thumbUrl: "YOUR_THUMBNAIL_LINK",
  },
];

const SHORT_FORM = [
  {
    id: 1,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800410/14_ud4ab0.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782807698/14_th_ta57s8.gif",
  },
  {
    id: 2,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782799817/1_phomd9.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840441/1_wmeppi.gif",
  },
  {
    id: 3,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782799859/2_zvxyzd.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840442/2_m93fup.gif",
  },
  {
    id: 4,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800120/3_setibs.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/3_bm6bkg.gif",
  },
  {
    id: 5,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800140/9_dzbc7x.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840441/9_th_mpd0wl.gif",
  },
  {
    id: 6,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800406/11_najeer.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/11_r6dyn1.gif",
  },
  {
    id: 7,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800416/13_t6f2vf.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840451/13_ercds3.gif",
  },
  {
    id: 8,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800409/10_k2prtb.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/10_walxej.gif",
  },
  {
    id: 9,
    videoUrl: "https://res.cloudinary.com/dnkycods9/video/upload/v1782800426/12_egypry.mp4",
    thumbUrl: "https://res.cloudinary.com/dnkycods9/image/upload/v1782840440/12_mfx8g3.gif",
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

function VideoCard({ item, isShort = false }) {
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    setShowVideo(true);
  };

  const handleLeave = () => {
    setHovered(false);
    setMuted(true);
    setShowVideo(false);
  };

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  const toggleMute = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`
        group relative rounded-3xl p-[1.5px] overflow-hidden
        transition-all duration-500 hover:-translate-y-2
      `}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="shine-border absolute inset-[-150%]" />
      </div>

      {/* Inner Card */}
      <div
        className={`
          relative z-10 rounded-3xl overflow-hidden
          bg-[#0a1022]/95 border border-white/10
          ${isShort ? "aspect-[9/16]" : "aspect-video"}
        `}
      >
        {/* Thumbnail */}
        <img
          src={item.thumbUrl}
          alt={item.title}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-300
            ${showVideo ? "opacity-0" : "opacity-100"}
          `}
        />

        {/* Video */}
        {showVideo && (
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />


        {/* Mute Button */}
        {showVideo && (
          <button
            onClick={toggleMute}
            className="
              absolute bottom-4 right-4
              w-10 h-10 rounded-full
              bg-black/40 backdrop-blur-xl
              border border-white/20
              flex items-center justify-center
              text-white
            "
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </div>
    </div>
  );
}
export default function Works() {
  const [activeTab, setActiveTab] = useState("long");

  const currentVideos =
    activeTab === "long" ? LONG_FORM : SHORT_FORM;

  return (
    <section className="relative py-32 bg-[#050818] overflow-hidden">
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
    A collection of long-form storytelling and high-performing short-form edits.
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
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >
          {currentVideos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              isShort={activeTab === "short"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}