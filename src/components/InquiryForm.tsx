import { useState } from "react";
import { toast } from "sonner";

const productOptions = [
  "Whole Black Pepper",
  "Whole Green Cardamom",
  "Whole Black Cardamom",
  "Cashew Nuts",
  "Whole Raisins",
  "Copra",
  "Desiccated Coconut",
  "Coconut Oil",
  "White Pepper (Whole)",
  "Red Chilli (Whole)",
];

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
  "Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
  "Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica",
  "Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia",
  "Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco",
  "Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "North Korea","North Macedonia","Norway","Oman","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
  "Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia",
  "Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea",
  "South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe"
];

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "", message: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const toggleProduct = (p: string) => {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.phone || !form.country) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (selectedProducts.length === 0) {
      toast.error("Please select at least one product.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        fullname: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        country: form.country,
        products: selectedProducts.join(", "),
        message: form.message,
      };
      await fetch(
        "https://script.google.com/macros/s/AKfycbwgRnlkgd0LL4RqzwhviD-D9_mOz0pCUgtD9UJcJLU-Ohd7bDZFJjRnS2gZYPHBdb7Y/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      toast.success("Thank you. Your inquiry has been submitted successfully. Our export team will contact you shortly.");
      setForm({ name: "", company: "", email: "", phone: "", country: "", message: "" });
      setSelectedProducts([]);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="font-body text-saffron text-sm tracking-[0.25em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Request a Bulk Quote
          </h2>
          <div className="w-20 h-1 bg-saffron mx-auto mt-4 rounded-full" />
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-lg p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-body text-sm font-semibold text-foreground mb-1 block">Full Name *</label>
              <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-foreground mb-1 block">Company Name *</label>
              <input type="text" required maxLength={100} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-foreground mb-1 block">Email *</label>
              <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron" />
            </div>
            <div>
              <label className="font-body text-sm font-semibold text-foreground mb-1 block">Contact Number *</label>
              <input type="tel" required maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron" />
            </div>
          </div>

          {/* Country searchable dropdown */}
          <div className="relative">
            <label className="font-body text-sm font-semibold text-foreground mb-1 block">Country *</label>
            <input
              type="text"
              required
              value={form.country || countrySearch}
              onChange={(e) => { setCountrySearch(e.target.value); setForm({ ...form, country: "" }); setShowDropdown(true); }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search country..."
              className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron"
            />
            {showDropdown && filteredCountries.length > 0 && (
              <ul className="absolute z-20 w-full bg-card border border-border rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
                {filteredCountries.map((c) => (
                  <li key={c} className="px-4 py-2 font-body text-sm hover:bg-saffron/10 cursor-pointer" onClick={() => { setForm({ ...form, country: c }); setCountrySearch(""); setShowDropdown(false); }}>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Product checkboxes */}
          <div>
            <label className="font-body text-sm font-semibold text-foreground mb-2 block">Products Required * (select at least one)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {productOptions.map((p) => (
                <label key={p} className="flex items-center gap-2 font-body text-sm cursor-pointer hover:text-saffron transition-colors">
                  <input type="checkbox" checked={selectedProducts.includes(p)} onChange={() => toggleProduct(p)} className="accent-saffron w-4 h-4" />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-foreground mb-1 block">Message</label>
            <textarea rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-input rounded-md px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron resize-none" />
          </div>

          <button type="submit" disabled={submitting} className="w-full bg-saffron text-saffron-foreground font-body font-bold text-base py-3.5 rounded-md hover:brightness-110 transition-all disabled:opacity-50">
            {submitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
