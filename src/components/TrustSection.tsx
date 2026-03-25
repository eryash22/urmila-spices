import { useEffect, useRef, useState } from "react";

const badges = [
  { icon: "🏛️", label: "Since 1950", desc: "70+ years of legacy" },
  { icon: "✅", label: "Quality Assured", desc: "Rigorous quality control" },
  { icon: "🌍", label: "Export Ready", desc: "Global shipping capabilities" },
  { icon: "🔬", label: "Lab Tested", desc: "Certified purity standards" },
];

const TrustSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust" className="py-20 bg-clove">
      <div className="container mx-auto px-4" ref={ref}>

        {/* ===== Heading ===== */}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-clove-foreground text-center mb-12">
          Three Generations of Trusted Excellence
        </h2>

        {/* ===== Badges ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`text-center bg-clove-foreground/5 border border-clove-foreground/10 rounded-lg p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-display text-lg font-bold text-saffron mb-1">
                {badge.label}
              </h3>
              <p className="font-body text-clove-foreground/70 text-sm">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Leadership Section (Now 4 Members) ===== */}
        <div className="grid md:grid-cols-4 gap-12 justify-items-center text-center">

          {/* Dadaji */}
          <div className="max-w-xs">
            <img
              src="/brij-bhushan-gupta.png"
              alt="Brij Bhushan Gupta"
              className="w-44 h-44 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-6 text-lg font-bold text-clove-foreground">
              Brij Bhushan Gupta
            </h3>
            <p className="text-saffron font-semibold mt-2 text-sm">
              Founding Generation – Legacy Architect
            </p>
            <p className="text-clove-foreground/70 mt-3 text-sm leading-relaxed">
              Established the foundation of our family trade in 1950,
              Built trust-based supply networks across regional markets.
            </p>
          </div>

          {/* Father */}
          <div className="max-w-xs">
            <img
              src="/pankaj-gupta.png"
              alt="Pankaj Kumar Gupta"
              className="w-44 h-44 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-6 text-lg font-bold text-clove-foreground">
              Pankaj Kumar Gupta
            </h3>
            <p className="text-saffron font-semibold mt-2 text-sm">
              Domestic Market Specialist
            </p>
            <p className="text-clove-foreground/70 mt-3 text-sm leading-relaxed">
              With over 50 years of hands-on experience in spices and dry fruits trade, he possesses deep product knowledge and exceptional expertise in quality grading and sourcing precision.
            </p>
          </div>

          {/* Yash */}
          <div className="max-w-xs">
            <img
              src="/yash-gupta.png"
              alt="Yash Kumar Gupta"
              className="w-44 h-44 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-6 text-lg font-bold text-clove-foreground">
              Yash Kumar Gupta
            </h3>
            <p className="text-saffron font-semibold mt-2 text-sm">
              Director – Global Expansion
            </p>
            <p className="text-clove-foreground/70 mt-3 text-sm leading-relaxed">
              M.Tech graduate from IIT Guwahati, leading international outreach, export compliance, and structured bulk supply operations.
            </p>
          </div>

          {/* Swayam */}
          <div className="max-w-xs">
            <img
              src="/swayam-gupta.png"
              alt="Swayam Gupta"
              className="w-44 h-44 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-6 text-lg font-bold text-clove-foreground">
              Swayam Gupta
            </h3>
            <p className="text-saffron font-semibold mt-2 text-sm">
              Operations & Supply Chain
            </p>
            <p className="text-clove-foreground/70 mt-3 text-sm leading-relaxed">
              B.Com (Hons.) graduate managing procurement coordination,
              vendor partnerships, and timely dispatch
              for domestic orders.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustSection;