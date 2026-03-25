import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TrustSection from "@/components/TrustSection";
import InquiryForm from "@/components/InquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import GlobalExport from "@/components/GlobalExport";
import ShippingSection from "@/components/ShippingSection";
import PackagingSection from "@/components/PackagingSection";
import InfrastructureSection from "@/components/InfrastructureSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />

        <ProductsSection />
       <GlobalExport />

        <ShippingSection />

        <PackagingSection />

        <InfrastructureSection />

        <TrustSection />

        <InquiryForm />

        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default Index;