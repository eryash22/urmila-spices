const InfrastructureSection = () => {

return (

<section className="py-24 bg-clove-foreground/5">

<div className="container mx-auto px-4 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12 text-clove">
Factory & Warehouse Infrastructure
</h2>

<div className="grid md:grid-cols-3 gap-12">

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">🌾</div>
<h3 className="font-bold text-lg">Direct Sourcing</h3>
<p className="text-sm mt-2">
Sourced from trusted farms and markets.
</p>
</div>

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">🏭</div>
<h3 className="font-bold text-lg">Warehouse Storage</h3>
<p className="text-sm mt-2">
Proper storage to maintain product quality.
</p>
</div>

<div className="p-8 bg-white/5 rounded-xl shadow">
<div className="text-4xl mb-4">🔍</div>
<h3 className="font-bold text-lg">Quality Inspection</h3>
<p className="text-sm mt-2">
Every lot inspected before dispatch.
</p>
</div>

</div>

</div>

</section>

);

};

export default InfrastructureSection;