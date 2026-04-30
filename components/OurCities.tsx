export default function OurCities() {
  return (
    <section id="cities" className="bg-baby-blue py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-brand uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Service Area
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-snug mb-6">
              We Detail Where You Live
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
              Titanium Mobile Detailing proudly serves the Kansas City Metro Area and
              surrounding cities. If you don&apos;t see your city listed, reach out —
              we&apos;re always expanding.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors duration-200 text-sm tracking-wide"
            >
              Check Availability
            </a>
          </div>

          {/* Right: map */}
          <div className="rounded-xl overflow-hidden shadow-md border border-brand/10 w-full aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99374.20217208788!2d-94.82084795000006!3d38.89096505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c097a5101f4f41%3A0xc18238569d7e7db0!2sOlathe%2C%20KS!5e0!3m2!1sen!2sus!4v1776459467237!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* City grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Olathe", "Overland Park", "Lenexa", "Shawnee", "Kansas City", "Lee's Summit", "Blue Springs", "Independence"].map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 bg-white px-5 py-4 rounded-lg border border-brand/10 shadow-sm group hover:bg-brand hover:border-brand transition-all duration-200"
            >
              <div className="w-2 h-2 rounded-full bg-brand group-hover:bg-white transition-colors flex-shrink-0" />
              <span className="text-brand-dark group-hover:text-white font-medium text-sm transition-colors">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
