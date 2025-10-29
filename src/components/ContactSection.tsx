import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">Call us anytime</p>
            <a href="tel:0201382828" className="text-primary hover:text-accent transition-colors mt-2">
              0201382828
            </a>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">Send us a message</p>
            <a href="https://mail.google.com/mail/?view=cm&to=johnkyei070@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors mt-2">
              johnkyei070@gmail.com
            </a>
          </div>
          
          <a 
            href="https://maps.google.com/?q=Anyinam+Taxi+Station" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Visit our bakery</p>
            <p className="text-primary mt-2">Anyinam Taxi Station</p>
          </a>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-white font-semibold px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://wa.me/233201382828?text=Hello,%20I%20want%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
              Place an Order
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
