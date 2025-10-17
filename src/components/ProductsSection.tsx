import BreadCard from "./BreadCard";
import sourdoughImage from "@/assets/sourdough.jpg";
import baguetteImage from "@/assets/baguette.jpg";
import wholegrainImage from "@/assets/wholegrain.jpg";
import challahImage from "@/assets/challah.jpg";
import ciabattaImage from "@/assets/ciabatta.jpg";
import ryeImage from "@/assets/rye.jpg";

const breads = [
  {
    name: "Sourdough",
    description: "Classic artisan sourdough with a crispy crust and tangy flavor",
    image: sourdoughImage,
  },
  {
    name: "French Baguette",
    description: "Traditional baguette with a golden, crispy exterior",
    image: baguetteImage,
  },
  {
    name: "Whole Grain",
    description: "Hearty whole grain loaf packed with seeds and nutrients",
    image: wholegrainImage,
  },
  {
    name: "Challah",
    description: "Sweet, braided bread perfect for special occasions",
    image: challahImage,
  },
  {
    name: "Ciabatta",
    description: "Italian classic with an airy, open crumb structure",
    image: ciabattaImage,
  },
  {
    name: "Rye Bread",
    description: "Dense, flavorful rye with caraway seeds",
    image: ryeImage,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each loaf is carefully crafted using time-honored techniques and the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breads.map((bread) => (
            <BreadCard key={bread.name} {...bread} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
