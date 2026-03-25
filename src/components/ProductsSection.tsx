import blackPepper from "@/assets/Black_Pepper.png";
import greenCardamom from "@/assets/Green_Cardamom.png";
import blackCardamom from "@/assets/Black_Cardamom.png";
import cashewNuts from "@/assets/Cashew_Nuts.png";
import raisins from "@/assets/Raisins.png";
import copra from "@/assets/Copra.png";
import desiccatedCoconut from "@/assets/Desiccated_Coconut.png";
import coconutOil from "@/assets/Coconut_Oil.png";
import whitePepper from "@/assets/White_Pepper.png";
import redChilli from "@/assets/Red_Chilli.png";

const products = [
  { name: "Whole Black Pepper", hs: "09041120", image: blackPepper, desc: "Premium Malabar & Tellicherry grade black pepper, sourced directly from Indian farms for global buyers." },
  { name: "Whole Green Cardamom", hs: "09083120", image: greenCardamom, desc: "Aromatic Elettaria cardamom pods, handpicked and graded for export-quality standards." },
  { name: "Whole Black Cardamom", hs: "09083110", image: blackCardamom, desc: "Bold, smoky Amomum subulatum pods ideal for culinary and pharmaceutical industries." },
  { name: "Cashew Nuts", hs: "08013100 / 08013200", image: cashewNuts, desc: "Premium W-180 to W-450 grade cashews, processed and packed for bulk international shipment." },
  { name: "Whole Raisins", hs: "08062000", image: raisins, desc: "Sun-dried Indian raisins, naturally sweet and ideal for food manufacturing and retail export." },
  { name: "Copra", hs: "12030000", image: copra, desc: "High oil-content dried coconut copra, sourced from South Indian coconut plantations." },
  { name: "Desiccated Coconut", hs: "08011100", image: desiccatedCoconut, desc: "Fine and medium grade desiccated coconut for confectionery and bakery industries worldwide." },
  { name: "Coconut Oil", hs: "15131100", image: coconutOil, desc: "Cold-pressed virgin and refined coconut oil, available in bulk for food and cosmetic industries." },
  { name: "White Pepper (Whole)", hs: "09041200", image: whitePepper, desc: "Premium quality whole white pepper for bulk export." },
  { name: "Red Chilli (Whole)", hs: "09042110", image: redChilli, desc: "High-quality whole dried red chillies for global bulk supply." },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-saffron text-sm tracking-[0.25em] uppercase mb-3">
            Export Quality Assured
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Premium Whole Spices & Dry Fruits
          </h2>
          <div className="w-20 h-1 bg-saffron mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <span className="inline-block font-body text-xs font-bold tracking-wider bg-saffron/15 text-saffron px-3 py-1 rounded-full mb-3">
                  HS {product.hs}
                </span>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>
                <a
                  href="#inquiry"
                  className="inline-flex font-body font-bold text-sm text-primary hover:text-saffron transition-colors"
                >
                  Request Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
