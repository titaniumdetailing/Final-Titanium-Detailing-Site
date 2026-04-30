"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("https://formspree.io/f/xbdwrebb", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-sky py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug mb-6">
              Book Your Detail
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-10">
              Fill out the form and we&apos;ll reach out within a few hours with
              availability and a personalized quote. No obligation.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📞", label: "Phone", value: "(913) 433-3867" },
                { icon: "✉️", label: "Email", value: "jonathanzamora@titaniumdetailing.com" },
                { icon: <Image src="/pin.png" alt="location pin" width={24} height={24} />, label: "Service Area", value: "Kansas City Metro Area" },
                { icon: "🕐", label: "Weekdays", value: "Mon–Fri, 1pm – 9pm" },
                { icon: "🕐", label: "Weekends", value: "Sat–Sun, 12pm – 9pm" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-brand uppercase tracking-wider font-medium">
                      {c.label}
                    </p>
                    <p className="text-brand-dark font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-xl p-8 border border-brand/10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark mb-3">
                  Message Received!
                </h3>
                <p className="text-brand-dark/60 text-sm">
                  We&apos;ll be in touch within a few hours to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark placeholder:text-brand/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(647) 000-0000"
                      className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark placeholder:text-brand/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark placeholder:text-brand/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                      Your City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Oakville"
                      className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark placeholder:text-brand/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                      Service *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                    >
                      <option value="">Select a package</option>
                      <option>Interior Detail</option>
                      <option>Exterior Detail</option>
                      <option>Full Premium Detail</option>
                      <option>Ceramic Coating</option>
                      <option>Headlight Restoration</option>
                      <option>Engine Bay Cleaning</option>
                      <option>Not Sure — Need a Quote</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-brand uppercase tracking-wider font-medium mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Vehicle type, preferred date, anything we should know..."
                    className="w-full px-4 py-3 rounded border border-brand/20 bg-sky/30 text-brand-dark placeholder:text-brand/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors duration-200 text-sm tracking-wide"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
