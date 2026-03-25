const PackagingSection = () => {
  return (
    <section className="py-24 bg-clove">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-clove-foreground mb-16">
          Packaging Options
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Bulk Packaging */}
          <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-semibold text-white">
              Bulk Packaging
            </h3>
            <p className="text-sm text-white/80 mt-2">
              25 KG / 50 KG PP Export Bags
            </p>
          </div>

          {/* Vacuum Packaging */}
          <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition">
            <div className="text-4xl mb-4">🧊</div>
            <h3 className="text-lg font-semibold text-white">
              Vacuum Packaging
            </h3>
            <p className="text-sm text-white/80 mt-2">
              Freshness sealed packaging for premium export quality
            </p>
          </div>

          {/* Custom Packaging */}
          <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition">
            <div className="text-4xl mb-4">🏷️</div>
            <h3 className="text-lg font-semibold text-white">
              Custom Buyer Packaging
            </h3>
            <p className="text-sm text-white/80 mt-2">
              Private label and customized packaging available
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PackagingSection;