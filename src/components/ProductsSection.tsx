import BreadCard from "./BreadCard";
import sourdoughImage from "@/assets/sourdough.jpg";
import baguetteImage from "@/assets/baguette.jpg";
import wholegrainImage from "@/assets/wholegrain.jpg";
import challahImage from "@/assets/challah.jpg";
import ciabattaImage from "@/assets/ciabatta.jpg";
import ryeImage from "@/assets/rye.jpg";

const breads = [
  {
    name: "Sugar Bread",
    description: "Sweet, fluffy loaf with a delicate golden crust",
    image: sourdoughImage,
  },
  {
    name: "Butter Bread",
    description: "Rich and soft bread with a buttery, melt-in-your-mouth texture",
    image: baguetteImage,
  },
  {
    name: "Wheat Bread",
    description: "Wholesome wheat loaf perfect for everyday enjoyment",
    image: wholegrainImage,
  },
  {
    name: "Hot Oven",
    description: "Fresh from the oven, warm and aromatic perfection",
    image: challahImage,
  },
  {
    name: "A1 Bread",
    description: "Our signature premium loaf, simply the best",
    image: ciabattaImage,
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
