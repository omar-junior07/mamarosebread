import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <footer className="bg-foreground text-background py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Artisan Bread. Baked with ❤️
        </p>
      </footer>
    </main>
  );
};

export default Index;
