import Navbar from "../components/Navbar";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050818] text-white">
      <Navbar />

      <section className="pt-40 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Let's Work Together
          </h1>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Have a project in mind? Whether it's long-form editing,
            viral shorts, motion graphics, or cinematic storytelling —
            let's discuss how I can help.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
              />

              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;