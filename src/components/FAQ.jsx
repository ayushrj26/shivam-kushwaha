import { useState } from "react";

const FAQS = [
  {
    question: "What types of videos do you edit?",
    answer:
      "I specialize in short-form content, talking-head videos, documentaries, motion graphics, cinematic edits, and social media reels optimized for engagement.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Turnaround depends on project complexity. Short-form edits usually take 24–72 hours, while long-form and documentary edits may take 3–7 days.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes, I offer revision rounds to ensure the final edit perfectly matches your expectations and creative vision.",
  },
  {
    question: "Can you handle full production workflow?",
    answer:
      "Yes. From organizing raw footage to editing, motion graphics, sound design, color grading, and final delivery — I can manage the complete workflow.",
  },
  {
    question: "Which software do you use?",
    answer:
      "I primarily use Adobe Premiere Pro, After Effects, DaVinci Resolve, and Photoshop depending on project requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple — book a call, discuss your goals, share references or footage, and we’ll create a workflow tailored to your content needs.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div
      className="
        rounded-[28px]
        border border-white/10
        bg-[#090d18]/95
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-300
        hover:border-white/20
      "
    >
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full px-7 py-5 flex justify-between items-center text-left"
      >
        <span className="text-white text-medium font-semibold">
          {item.question}
        </span>

        {/* Arrow */}
        <div
          className={`
            w-10 h-10 rounded-full
            bg-white/[0.04]
            border border-white/10
            flex items-center justify-center
            transition-all duration-500
            ${isOpen ? "rotate-180" : ""}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 15l-7-7-7 7"
            />
          </svg>
        </div>
      </button>

      {/* Divider */}
      <div
        className={`
          mx-7 h-px bg-white/10 transition-all duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Answer */}
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <p className="px-7 py-5 text-gray-400 text-base leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-32 bg-[#050818] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-10">
        {/* FAQ Pill */}
        <div className="flex justify-center mb-8 ">
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
                Got Questions?
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-14">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Answers to common questions about my workflow, delivery, and collaboration process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}