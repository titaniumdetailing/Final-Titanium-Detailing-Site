"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Loukas S.",
    location: "Olathe, KS",
    rating: 5,
    text: "Jonathan has detailed my interior twice and recently did a ceramic coat for me too. He always has done a good job!",
  },
  {
    name: "Dusty B.",
    location: "Olathe, KS",
    rating: 5,
    text: "Jonathan is very professional and did a great job detailing my car.",
  },
  {
    name: "Ezequiel D.",
    location: "Kansas City, KS",
    rating: 5,
    text: "",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-brand text-brand" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const r = reviews[current];

  return (
    <section id="testimonials" className="bg-sky py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
            What Clients Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug">
            Real Results. Real Reviews.
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Card */}
          <div className="bg-white rounded-lg p-8 border border-brand/10 shadow-sm flex flex-col min-h-[220px]">
            <Stars count={r.rating} />
            <p className="text-brand-dark/70 text-sm leading-relaxed flex-1 mb-5 italic">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="border-t border-brand/10 pt-4">
              <p className="font-semibold text-brand-dark text-sm">{r.name}</p>
              <p className="text-brand text-xs">{r.location}</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-brand/20 bg-white text-brand hover:bg-brand hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous review"
            >
              ‹
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === current ? "bg-brand" : "bg-brand/25"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-brand/20 bg-white text-brand hover:bg-brand hover:text-white transition-colors duration-200 flex items-center justify-center"
              aria-label="Next review"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
