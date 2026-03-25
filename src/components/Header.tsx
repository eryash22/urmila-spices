import logo from "@/assets/Urmila_Spices_Logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Spices", href: "#products" },
  { label: "Why Us", href: "#trust" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <>
      <div className="bg-clove text-clove-foreground/70 text-[10px] md:text-xs font-body text-center py-1.5 tracking-wide">
        GSTIN: 09AHWPG6001G1ZA &nbsp;|&nbsp; FSSAI No: 12714029000031 &nbsp;|&nbsp; IEC: AHWPG6001G
      </div>
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Urmila Spices Logo"
            className="h-[85px] md:h-[120px] w-auto drop-shadow-md"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold tracking-wide uppercase text-foreground hover:text-saffron transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#inquiry"
          className="hidden md:inline-flex bg-saffron text-saffron-foreground font-body font-bold text-sm px-6 py-2.5 rounded-md hover:brightness-110 transition-all"
        >
          Request Quote
        </a>
      </div>
    </header>
    </>
  );
};

export default Header;
