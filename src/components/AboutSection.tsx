const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Every loaf tells a story of passion, tradition, and dedication. Our bread is made with love, 
              using recipes passed down through generations and techniques perfected over time.
            </p>
            <p>
              We believe in the simple beauty of quality ingredients, patient fermentation, and the artistry 
              of baking. Each morning, fresh dough is carefully shaped by hand and baked to golden perfection.
            </p>
            <p className="text-primary font-semibold">
              From our oven to your table, with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
