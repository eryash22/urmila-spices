const ShippingSection = () => {

return (

<section className="py-24 bg-clove-foreground/5">

<div className="container mx-auto px-4 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-14 text-clove">
Shipping & Container Capacity
</h2>

<div className="grid md:grid-cols-3 gap-12">

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">🚢</div>
<h3 className="font-bold text-lg">20FT Container Supply</h3>
<p className="text-sm mt-2 opacity-80">
Efficient bulk shipment capability.
</p>
</div>

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">📦</div>
<h3 className="font-bold text-lg">Bulk Packaging</h3>
<p className="text-sm mt-2 opacity-80">
25kg / 50kg export packaging.
</p>
</div>

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">⚡</div>
<h3 className="font-bold text-lg">Fast Dispatch</h3>
<p className="text-sm mt-2 opacity-80">
Reliable supply chain and timely shipments.
</p>
</div>

</div>

</div>

</section>

);

};

export default ShippingSection;