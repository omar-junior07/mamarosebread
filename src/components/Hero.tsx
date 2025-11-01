import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bread.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      <div className="container relative z-10 text-center px-4 py-20">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Mama Rose
          <span className="block text-3xl md:text-5xl mt-4 text-primary-foreground/90">
            Baked with Love
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Fresh, handcrafted loaves made daily with traditional methods and the finest ingredients
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-white font-semibold px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Collection
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-white font-semibold px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
