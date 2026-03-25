const Footer = () => {
  return (
    <footer className="bg-clove py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-xl font-bold text-clove-foreground mb-2">URMILA SPICES</h3>
        <p className="font-body text-clove-foreground/60 text-sm mb-6">Trusted Since 1950 | Now Expanding Globally</p>
        <p className="font-body text-clove-foreground/40 text-xs leading-relaxed max-w-3xl mx-auto mb-6">
          Indian Whole Black Pepper Exporter | Cashew Nuts Exporter India | Copra Supplier India | Whole Cardamom Exporter | Bulk Whole Spices Supplier India
        </p>
        <p className="font-body text-clove-foreground/50 text-xs mb-6">
          GSTIN: 09AHWPG6001G1ZA &nbsp;|&nbsp; FSSAI No: 12714029000031 &nbsp;|&nbsp; IEC: AHWPG6001G
        </p>
        <div className="border-t border-clove-foreground/10 pt-6">
          <p className="font-body text-clove-foreground/40 text-xs">
            © {new Date().getFullYear()} Urmila Spices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
