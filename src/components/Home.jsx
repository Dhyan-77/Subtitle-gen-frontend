import { motion } from "framer-motion";
import { Upload, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden overflow-x-hidden">

      {/* Background image */}

      {/* Navbar */}
      

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28">

        {/* AI Subtitle Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            mb-6
            flex items-center gap-3
            bg-white/10
            border border-white/20
            backdrop-blur-lg
            shadow-lg
            rounded-full
            hover:scale-110  transition-all 2s
            hover:shadow-black transition-all 2s
            px-5 py-2
          "
        >
          <img
            src="/lll.png"
            alt="AI Logo"
            className="w-20 h-10 object-contain"
          />
          <span className="text-sm text-gray-200 whitespace-nowrap ">
            AI Subtitle Generator
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight"
        >
          <span className="text-white">VIDEO </span>
          <span
            className="
              bg-gradient-to-r
              from-gray-400 via-white to-gray-400
              bg-clip-text text-transparent
              drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]
            "
          >
            GENIUS
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-gray-300"
        >
          Generate professional, word-by-word subtitles with AI.
          Upload your video and get cinematic captions instantly.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            <Play size={18} /> Watch Video
          </button>

          <Link to = "/uploads"><button className="flex items-center gap-4 border border-white/20 px-6 py-3 rounded-xl text-gray-200 hover:bg-white/10 transition">
          <Upload size={18} /> Upload Video
          </button>
          </Link>
        </motion.div>
      </main>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 relative bottom-5">
        <section
          className="
            relative z-10 bottom-10 mt-24
            flex justify-between gap-10
            text-center text-sm text-gray-300
            bg-white/10
            border border-white/20
            backdrop-blur-lg
            shadow-lg
            
            rounded-full
            px-12 py-5
          "
        >
          <div>
            <p className="text-xl font-semibold text-white">90%</p>
            <p>Time Saved</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">10k+</p>
            <p>Videos Processed</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">AI</p>
            <p>Powered</p>
          </div>
          <div>
           <img  className="w-full h-10 scale-300 bg-center bg-cover relative right-5 "   src="/pp.png"/>

            </div>
        </section>
      </div>

    </div>
  );
}
