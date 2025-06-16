import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./Stack.css";

function CardRotate({ children, onDragStart, onDragEnd }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragStart={onDragStart}
      onDragEnd={() => {
        x.set(0);
        y.set(0);
        onDragEnd();
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 300, height: 300 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  autoRotate = true,
  autoRotateInterval = 2500
}) {
  const [cards, setCards] = useState(
    cardsData.length ? cardsData : [
      { id: 1, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Hector/11869/1721899015829/front-left-side-47.jpg" },
      { id: 2, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volvo/XC60/10589/1692870711844/front-left-side-47.jpg" },
      { id: 3, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/F-Pace/10644/1701246382378/front-left-side-47.jpg" },
      { id: 4, img: "https://cdn.bikedekho.com/processedimages/kawasaki/2020-z900/source/2020-z900683e7512e4390.jpg" }
    ]
  );

  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const sendToBack = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const card = newCards.pop();
      newCards.unshift(card);
      return newCards;
    });
  };

  useEffect(() => {
    if (autoRotate && !isDragging) {
      intervalRef.current = setInterval(sendToBack, autoRotateInterval);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoRotate, isDragging, cards]);

  const handleDragStart = () => {
    setIsDragging(true);
    clearInterval(intervalRef.current); // Pause auto-rotation
    clearTimeout(timeoutRef.current);
  };

  const handleDragEnd = () => {
    // Resume auto-rotate after a short delay
    timeoutRef.current = setTimeout(() => {
      setIsDragging(false);
    }, 3000); // Wait 3 seconds before resuming auto-rotate
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate
            key={card.id}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              className="card"
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
