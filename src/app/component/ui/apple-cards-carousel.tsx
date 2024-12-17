"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type CardData = {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
};

export function Card({ card }: { card: CardData }) {
  return (
    <motion.div
      className="relative w-full h-[70vh] rounded-3xl overflow-hidden bg-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="absolute top-8 left-8">
        <p className="text-white/60 text-sm font-medium mb-2">{card.category}</p>
        <h3 className="text-white text-4xl font-bold">{card.title}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        {card.content}
      </div>
    </motion.div>
  );
}

export function Carousel({ items }: { items: CardData[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <Card key={current} card={items[current]} />
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/20"
            }`}
            aria-label={`切换到第 ${index + 1} 张幻灯片`}
          />
        ))}
      </div>
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
        aria-label="上一张"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
        aria-label="下一张"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
