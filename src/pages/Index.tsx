import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Each question has its own set of "no" responses
const QUESTIONS = [
  {
    question: "Will you be my girlfriend?",
    noResponses: [
      { face: "😿", text: "Are you sure...?", sub: "— sad kitty" },
      { face: "😭", text: "You're breaking my heart!", sub: "— devastated kitty" },
      { face: "🐱", text: "I'll give you a cookie if you say yes! 🍪", sub: "— bribing kitty" },
      { face: "🙀", text: "PLEASE! I'll be the best boyfriend ever!", sub: "— desperate kitty" },
    ],
    face: "🥺",
    sub: "— shy kitty",
  },
  {
    question: "Can I hold your hand? 🤝",
    noResponses: [
      { face: "😿", text: "Not even a pinky?", sub: "— hopeful kitty" },
      { face: "😭", text: "My paws are so cold though...", sub: "— freezing kitty" },
      { face: "🐱", text: "I promise I washed them!", sub: "— hygienic kitty" },
    ],
    face: "🥺",
    sub: "— gentle kitty",
  },
  {
    question: "Will you share your fries with me? 🍟",
    noResponses: [
      { face: "😿", text: "Not even ONE fry?!", sub: "— hungry kitty" },
      { face: "😭", text: "I can see the fries... they're calling me!", sub: "— starving kitty" },
      { face: "😾", text: "I'll just stare at you eating then...", sub: "— guilt-trip kitty" },
    ],
    face: "🐱",
    sub: "— hungry kitty",
  },
  {
    question: "Can I steal your hoodie? 🧥",
    noResponses: [
      { face: "😿", text: "But it smells like you...", sub: "— clingy kitty" },
      { face: "😭", text: "I'll be cold and it'll be YOUR fault!", sub: "— dramatic kitty" },
      { face: "🐱", text: "I'll trade you my favorite blanket!", sub: "— negotiating kitty" },
    ],
    face: "🥺",
    sub: "— cozy kitty",
  },
  {
    question: "Will you watch the sunset with me? 🌅",
    noResponses: [
      { face: "😿", text: "But it's so pretty... like you!", sub: "— smooth kitty" },
      { face: "😭", text: "The sun is literally setting for US!", sub: "— poetic kitty" },
    ],
    face: "🐱",
    sub: "— romantic kitty",
  },
  {
    question: "Will you let me pick the movie tonight? 🎬",
    noResponses: [
      { face: "😿", text: "I promise it won't be a cat documentary... maybe", sub: "— suspicious kitty" },
      { face: "😭", text: "Fine I'll watch YOUR pick but I'll pout!", sub: "— sassy kitty" },
      { face: "🐱", text: "What if we watch BOTH our picks?", sub: "— compromising kitty" },
    ],
    face: "😾",
    sub: "— determined kitty",
  },
  {
    question: "Do you promise to love me forever? 💕",
    noResponses: [
      { face: "😿", text: "Not even a really long time?", sub: "— worried kitty" },
      { face: "😭", text: "I'll use all 9 lives loving you!", sub: "— devoted kitty" },
      { face: "🙀", text: "FOREVER ISN'T EVEN LONG ENOUGH!", sub: "— passionate kitty" },
      { face: "🥺", text: "Please... you're my whole world 🌍", sub: "— soulmate kitty" },
    ],
    face: "🥺",
    sub: "— hopeful kitty",
  },
];

const CAT_NAME = "Meltez OR Neil";

const FLOATING_HEARTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
  size: 12 + Math.random() * 20,
}));

const Index = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [answered, setAnswered] = useState(false); // current question answered yes
  const [allDone, setAllDone] = useState(false);

  const currentQ = QUESTIONS[questionIndex];
  const isLastQuestion = questionIndex >= QUESTIONS.length - 1;

  // What to show: the main question or a "no" response
  const display =
    noCount === 0
      ? { face: currentQ.face, text: currentQ.question, sub: currentQ.sub }
      : currentQ.noResponses[Math.min(noCount - 1, currentQ.noResponses.length - 1)];

  const noExhausted = noCount >= currentQ.noResponses.length;

  const handleNo = () => {
    setNoCount((n) => Math.min(n + 1, currentQ.noResponses.length));
  };

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setAllDone(true);
    } else {
      setQuestionIndex((i) => i + 1);
      setNoCount(0);
      setAnswered(false);
    }
  };

  // Final celebration
  if (allDone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
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
            {CAT_NAME} is the happiest kitty in the world! 💕
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Answered "yes" to current question — show mini celebration + Next button
  if (answered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative px-4">
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
          <motion.div
            className="text-7xl md:text-8xl mb-4"
            animate={{ rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            😻
          </motion.div>
          <h1
            className="text-2xl md:text-3xl font-bold text-primary mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yay! 💕
          </h1>
          <p className="text-sm text-muted-foreground italic mb-2">
            — {CAT_NAME} is so happy!
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            Question {questionIndex + 1} of {QUESTIONS.length} ✓
          </p>
          <motion.button
            onClick={handleNext}
            className="bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", padding: "0.75rem 2.5rem" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLastQuestion ? "Finish! 🎉" : "Next Question →"}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Main question screen
  return (
    <div className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative px-4">
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
        {/* Progress */}
        <p className="text-xs text-muted-foreground mb-4">
          Question {questionIndex + 1} of {QUESTIONS.length}
        </p>

        {/* Cat face + name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${questionIndex}-${noCount}`}
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
            transition={{ type: "spring", damping: 10 }}
            className="mb-4"
          >
            <div className="text-7xl md:text-8xl">{display.face}</div>
            <p className="text-xs text-muted-foreground mt-1 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              — {CAT_NAME}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Question text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${questionIndex}-${noCount}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <h1
              className="text-2xl md:text-3xl font-bold text-foreground mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {display.text}
            </h1>
            <p className="text-sm text-muted-foreground italic mb-8">
              {display.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.button
            onClick={handleYes}
            className="bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: `${1 + noCount * 0.15}rem`,
              padding: `${0.75 + noCount * 0.1}rem ${2 + noCount * 0.3}rem`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: 1 + noCount * 0.2 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Yes! 💕
          </motion.button>

          {!noExhausted && (
            <motion.button
              onClick={handleNo}
              className="bg-muted text-muted-foreground font-semibold rounded-2xl transition-all cursor-pointer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: `${Math.max(0.7, 1 - noCount * 0.06)}rem`,
                padding: `${Math.max(0.4, 0.75 - noCount * 0.05)}rem ${Math.max(0.8, 2 - noCount * 0.2)}rem`,
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
