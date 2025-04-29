
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blog-light-gray py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Navigate Offshore Development with Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert guidance for non-technical founders hiring and managing offshore software developers.
            Build your tech team without the technical headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blog-blue hover:bg-blog-dark-blue text-lg transition-colors"
              asChild
            >
              <Link to="/blog">
                Read Latest Articles
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blog-blue text-blog-blue hover:bg-blog-blue/10 text-lg transition-colors"
              asChild
            >
              <Link to="/resources">
                View Resources
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
