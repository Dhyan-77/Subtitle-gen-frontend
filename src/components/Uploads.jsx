import { useState, useRef } from "react";
import {
  Upload,
  Loader2,
  CheckCircle,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

export default function StudioPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const videoRef = useRef(null);

  const handleUpload = async () => {
    if (!file) return;

    setStatus("uploading");
    setDownloadUrl(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://subtitle-gen-backend-2.onrender.com/generate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setDownloadUrl(data.download_url);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className=" overflow-x-hidden min-h-screen absolute inset-0 bg-gradient-to-r from-black/80 via-black/90 to-black  text-white p-6 bg-center bg-cover  " >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] relative top-24">

        {/* LEFT: VIDEO PREVIEW */}
        <motion.div
          className="
            relative rounded-2xl
            bg-white/5 border border-white/10
            backdrop-blur-xl
            flex items-center justify-center
            overflow-hidden
          "
        >
          {!file && (
            <label className="
              w-full h-full
              flex flex-col items-center justify-center
              border-2 border-dashed border-white/20
              hover:border-cyan-400
              transition cursor-pointer
            ">
              <Upload size={40} className="text-gray-400 mb-3" />
              <p className="text-gray-300">
                Drag video here to load into studio
              </p>
              <p className="text-xs text-gray-500 mt-2">
                MP4, MOV · Max 500MB · Secure & Private
              </p>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          )}

          {file && (
            <>
              <video
                ref={videoRef}
                src={
                  status === "success"
                    ? downloadUrl
                    : URL.createObjectURL(file)
                }
                controls={status === "success"}
                className="w-full h-full object-contain"
              />

              {status === "uploading" && (
                <div className="
                  absolute inset-0
                  bg-black/40
                  flex items-center justify-center
                ">
                  <div className="animate-pulse text-cyan-400">
                    Processing…
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>

        {/* RIGHT: CONTROL PANEL */}
        <motion.div
          className="
            rounded-2xl
            bg-white/5 border border-white/10
            backdrop-blur-xl
            p-6 flex flex-col justify-between
          "
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Subtitle Studio
            </h2>

            {/* STEP LOADER */}
            {status === "uploading" && (
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400" /> Uploading video
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-green-400" /> Extracting audio
                </li>
                <li className="flex gap-2">
                  <Loader2 className="animate-spin text-cyan-400" />
                  Generating subtitles
                </li>
                <li className="flex gap-2 text-gray-500">
                  Rendering final cut
                </li>
              </ul>
            )}


            {status === "uploading" && (
  <div className="relative w-full max-w-lg relative left-20 overflow-hidden rounded-xl border border-white/10 shadow-2xl z-10">
    
    {/* 1. The User's Video Playing in Background */}
    <video 
      src={"/output.mp4"} 
      autoPlay 
      loop 
      muted 
      className="w-full h-64 object-cover  shadow-2xl shadow-cyan-700" // Blurred for focus on loader
    />


  </div>
)}

            {status === "idle" && (
              <p className="text-gray-400 text-sm">
                Upload a video to generate word-by-word subtitles
                burned directly into the footage.
              </p>
            )}

          </div>


          <div>
            {status === "success" && (
              <img className="relative left-30 rounded-2xl"
                src="/hen.jpg"
              />
            )}
            
            {status === "success" && (
              <p className="text-green-400 text-sm relative left-45 top-2">
                Your video is ready. daddy it on the left.
              </p>
            )}

          </div>


          {/* ACTION BUTTON */}
          {status !== "success" && (
            <button
              onClick={handleUpload}
              disabled={!file || status === "uploading"}
              className="
                mt-6 w-full py-3 rounded-xl
                bg-cyan-400 text-black font-medium
                hover:opacity-90
                disabled:opacity-50
              "
            >
              {status === "uploading"
                ? "Processing…"
                : "Generate Subtitles"}
            </button>
          )}

          {/* DOWNLOAD */}
          {status === "success" && (
            <a
              href={downloadUrl}
              download
              className="
                mt-6 flex items-center justify-center gap-2
                py-3 rounded-xl font-medium
                bg-cyan-400 text-black
                shadow-[0_0_20px_rgba(34,211,238,0.5)]
              "
            >
              <Download size={18} /> Download Video
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
