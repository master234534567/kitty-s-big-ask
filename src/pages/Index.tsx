import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAT_RESPONSES = [
  { face: "🥺", text: "Will you be my girlfriend?", sub: "— shy kitty" },
  { face: "😿", text: "Are you sure...?", sub: "— sad kitty" },
  { face: "😭", text: "You're breaking my heart!", sub: "— devastated kitty" },
  { face: "🐱", text: "I'll give you a cookie if you say yes! 🍪", sub: "— bribing kitty" },
  { face: "😾", text: "I'm not leaving until you say yes!", sub: "— stubborn kitty" },
  { face: "🙀", text: "PLEASE! I'll be the best boyfriend ever!", sub: "— desperate kitty" },
  { face: "😿", text: "I'll learn to cook for you... 🍳", sub: "— promising kitty" },
  { face: "🐱", text: "I'll watch any movie you want! 🎬", sub: "— negotiating kitty" },
  { face: "😭", text: "Even my 9 lives aren't enough without you!", sub: "— poetic kitty" },
  { face: "🥺", text: "I'll write you love poems every day! 📝", sub: "— romantic kitty" },
  { face: "😿", text: "I already told my mom about you...", sub: "— committed kitty" },
  { face: "🙀", text: "I practiced saying 'I love you' 100 times!", sub: "— dedicated kitty" },
  { face: "😭", text: "My heart is literally in pieces right now 💔", sub: "— shattered kitty" },
  { face: "🐱", text: "I'll share my favorite fish with you! 🐟", sub: "— generous kitty" },
  { face: "😾", text: "I'll hold your purse in public. No shame!", sub: "— brave kitty" },
  { face: "🥺", text: "I'll let you pick where we eat. ALWAYS.", sub: "— sacrificial kitty" },
  { face: "😿", text: "I've been refreshing your texts for hours...", sub: "— anxious kitty" },
  { face: "🐱", text: "I'll carry you when your feet hurt! 💪", sub: "— strong kitty" },
  { face: "😭", text: "My friends are all watching... don't embarrass me!", sub: "— nervous kitty" },
  { face: "🥺", text: "Last chance... pretty please with a cherry on top? 🍒", sub: "— begging kitty" },
];

const FLOATING_HEARTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 12 + Math.random() * 20,
}));

const Index = () => {
  const [stage, setStage] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const noCount = stage;

  const yesScale = 1 + noCount * 0.25;
  const current = CAT_RESPONSES[Math.min(stage, CAT_RESPONSES.length - 1)];

  const handleNo = () => {
    setStage((s) => Math.min(s + 1, CAT_RESPONSES.length - 1));
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
        {/* Celebration hearts */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-4xl select-none pointer-events-none"
            initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 1.5, repeat: Infinity, repeatDelay: Math.random() * 3 }}
          >
            {["❤️", "💕", "💖", "🌸", "✨", "😻", "💗"][i % 7]}
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 8, stiffness: 100 }}
          className="text-center z-10"
        >
          <motion.div
            className="text-8xl md:text-[10rem] mb-4"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            😻
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-primary"
            style={{ fontFamily: "var(--font-display)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            YAY!!!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mt-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I'm the happiest kitty in the world! 💕
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative px-4">
      {/* Floating background hearts */}
      {FLOATING_HEARTS.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-primary/20 select-none pointer-events-none"
          style={{ left: h.left, fontSize: h.size }}
          animate={{ y: ["-10%", "110vh"] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
        >
          ♥
        </motion.div>
      ))}

      <motion.div
        className="bg-card rounded-3xl shadow-xl p-8 md:p-12 max-w-md w-full text-center relative z-10 border border-border"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
      >
        {/* Cat face */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
            transition={{ type: "spring", damping: 10 }}
            className="text-7xl md:text-8xl mb-4"
          >
            {current.face}
          </motion.div>
        </AnimatePresence>

        {/* Question text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <h1
              className="text-2xl md:text-3xl font-bold text-foreground mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {current.text}
            </h1>
            <p className="text-sm text-muted-foreground italic mb-8">
              {current.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.button
            onClick={() => setAccepted(true)}
            className="bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: `${1 + noCount * 0.15}rem`,
              padding: `${0.75 + noCount * 0.1}rem ${2 + noCount * 0.3}rem`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: yesScale }}
            transition={{ type: "spring", damping: 10 }}
          >
            Yes! 💕
          </motion.button>

          {noCount < CAT_RESPONSES.length - 1 && (
            <motion.button
              onClick={handleNo}
              className="bg-muted text-muted-foreground font-semibold rounded-2xl transition-all cursor-pointer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: `${Math.max(0.7, 1 - noCount * 0.05)}rem`,
                padding: `${Math.max(0.4, 0.75 - noCount * 0.03)}rem ${Math.max(0.8, 2 - noCount * 0.15)}rem`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              No...
            </motion.button>
          )}
        </div>

        {noCount > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mt-6"
          >
            You've said no {noCount} time{noCount > 1 ? "s" : ""}... 😿
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Index;
