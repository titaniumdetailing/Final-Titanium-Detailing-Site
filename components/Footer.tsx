const links = [
  { label: "What We Do", href: "#what-is-detailing" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Cities", href: "#cities" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="Titanium Detailing logo" className="h-[60px] w-auto" />
              <p className="font-serif text-xl font-semibold">
                Titanium<span className="text-white font-light"> Detailing</span>
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium mobile auto detailing for the Kansas City Metro Area. We come to you.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Contact</p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>(913) 433-3867</li>
              <li>jonathanzamora@titaniumdetailing.com</li>
              <li>Kansas City Metro Area</li>
              <li>Mon–Fri, 1pm – 9pm</li>
              <li>Sat–Sun, 12pm – 9pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Titanium Mobile Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
