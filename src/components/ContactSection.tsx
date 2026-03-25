const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-saffron text-sm tracking-[0.25em] uppercase mb-3">Reach Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
          <div className="w-20 h-1 bg-saffron mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Our Address</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Sadar Bazar Rd, Keyari Tola, Main Chowk, Mau, Uttar Pradesh 275101, India
            </p>
            <a
              href="https://maps.app.goo.gl/48K1eVDv7T4BVx1G7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-body text-sm font-bold text-saffron hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Email</h3>
            <a href="mailto:urmilaspices@gmail.com" className="font-body text-muted-foreground text-sm hover:text-saffron transition-colors">
              urmilaspices@gmail.com
            </a>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Phone</h3>
            <a href="tel:+917973517901" className="font-body text-muted-foreground text-sm hover:text-saffron transition-colors">
              +91 7973517901
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 max-w-4xl mx-auto">
          <p className="font-body text-muted-foreground text-xs"><span className="font-bold">IEC:</span> AHWPG6001G</p>
          <p className="font-body text-muted-foreground text-xs"><span className="font-bold">GSTIN:</span> 09AHWPG6001G1ZA</p>
          <p className="font-body text-muted-foreground text-xs"><span className="font-bold">FSSAI No:</span> 12714029000031</p>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
