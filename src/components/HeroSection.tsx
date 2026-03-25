const HeroSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative bg-clove overflow-hidden py-20 md:py-32"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-clove via-clove/95 to-primary/80" />

        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Trust Line */}
          <p className="font-body text-saffron text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Trusted Since 1950 | Now Expanding Globally
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-clove-foreground leading-tight mb-6">
            Premium Indian Spices & Dry Fruits
            <br />
            <span className="text-saffron">Global Bulk Exporter</span>
          </h1>

          {/* Export Statement */}
          <p className="font-body text-clove-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            
            <div className="mt-8 text-center text-sm md:text-base text-clove-foreground/80">



</div>
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inquiry"
              className="bg-saffron text-saffron-foreground font-bold text-base px-8 py-3.5 rounded-md hover:brightness-110 transition-all shadow-lg"
            >
              Request Bulk Quote
            </a>

            <a
              href="https://wa.me/917973517901"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-saffron text-saffron font-bold text-base px-8 py-3.5 rounded-md hover:bg-saffron hover:text-saffron-foreground transition-all"
            >
              Contact on WhatsApp
            </a>
          </div>
{/* Export Certifications */}
<div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">

  <div className="bg-saffron/15 text-saffron border border-saffron/40 rounded-full px-5 py-2">
    Indian Exporter
  </div>

  <div className="bg-saffron/15 text-saffron border border-saffron/40 rounded-full px-5 py-2">
    IEC Certified Exporter
  </div>

  <div className="bg-saffron/15 text-saffron border border-saffron/40 rounded-full px-5 py-2">
    Spices & Dry Fruits Bulk Supplier
  </div>

</div>

<div className="mt-4 text-sm md:text-base text-clove-foreground/90 text-center">
  <p><strong> IEC : </strong> AHWPG6001G  |     FSSAI : 12714029000031 |    GSTIN : 09AHWPG6001G1ZA </p> 
  

</div>
        </div>
      </section>

<section className="py-16 bg-clove/190 text-center">
  <div className="container mx-auto px-4">

 <div className="mb-12">
  <p className="text-[#D4A017] text-2xl md:text-3xl font-extrabold tracking-wider">
    TRUSTED BY LEADING DOMESTIC BRANDS
  </p>
  <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-3 rounded"></div>
</div>

    <div className="flex flex-wrap justify-center items-center gap-16">

      <img
        src="/Mahavir%20Misthan%20Bhandar.png"
        alt="Mahavir Misthan Bhandar"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Vaishali%20Rajasthan%20Sweet.png"
        alt="Vaishali Rajasthan Sweet"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/NRS.png"
        alt="NRS"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/SRB.png"
        alt="SRB"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Sri%20Annapurna.png"
        alt="Sri Annapurna"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Agrawal.png"
        alt="Agrawal Mithai & Rasoi"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Shree%20Sweet%20House.png"
        alt="Shree Sweet House"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Shree%20Chappan%20Bhog%20Sweets.png"
        alt="Shree Chappan Bhog Sweets"
        className="h-32 md:h-40 object-contain"
      />

      <img
        src="/Hot.png"
        alt="Hot & Cool"
        className="h-32 md:h-40 object-contain"
      />

    </div>

  </div>
</section>
    </>
  );
};

export default HeroSection;
