"use client";

import { useEffect, useState } from "react";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setOpen(window.location.hash === "#book");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4"
      onClick={() => { window.location.hash = " "; setOpen(false); }}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-lg h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => { window.location.hash = " "; setOpen(false); }}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-brand-dark/10 text-brand-dark text-lg font-bold hover:bg-brand-dark/20 transition-colors"
          aria-label="Close booking"
        >
          ×
        </button>
        <iframe
          src="https://app.squareup.com/appointments/book/c4n0nycof14aez/LF40Y9N68AYV7/start"
          className="w-full h-full"
          title="Book an Appointment"
        />
      </div>
    </div>
  );
}
