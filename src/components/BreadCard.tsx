import { Card, CardContent } from "@/components/ui/card";

interface BreadCardProps {
  name: string;
  description: string;
  image: string;
}

const BreadCard = ({ name, description, image }: BreadCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} bread`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">
          {name}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default BreadCard;
