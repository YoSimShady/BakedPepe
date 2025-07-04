
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    document.title = "BakedPepe | The Baked Frog Memecoin";
  }, []);

  const playBongSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <audio ref={audioRef} src="/bong-hit.mp3" preload="auto" />

      <img
        src="/bakedpepe-room.png"
        alt="BakedPepe Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Smoke Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-48 left-20 w-16 h-16 bg-white rounded-full blur-3xl opacity-30 z-10"
      ></motion.div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-16 text-white z-10">
        <div className="flex justify-between">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-green-600 px-6 py-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => alert("Tokenomics: 420B Supply. 0% Tax. 100% Baked.")}
          >
            <h2 className="text-2xl font-bold">TOKENOMICS</h2>
          </motion.div>
        </div>

        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-green-700 px-6 py-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => {
              playBongSound();
              alert("Every trade burns supply! The more you trade, the more you burn.");
            }}
          >
            <h2 className="text-2xl font-bold">TRADE TO BURN!</h2>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
