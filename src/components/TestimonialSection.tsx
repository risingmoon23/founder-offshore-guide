
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "This blog has been an incredible resource for me. As a founder with zero technical background, I now feel confident managing my offshore development team.",
      name: "Sarah Johnson",
      role: "Founder, HealthTech Startup",
      avatar: "SJ"
    },
    {
      quote: "The practical tips on evaluating developers without technical knowledge have saved me from making several costly hiring mistakes.",
      name: "Michael Chen",
      role: "CEO, E-commerce Platform",
      avatar: "MC"
    },
    {
      quote: "I credit this blog for helping me build a solid offshore development team that has stayed with my company for over 3 years now.",
      name: "Emma Rodriguez",
      role: "Founder, EdTech Company",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Founders Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from non-technical founders who've successfully built and managed offshore development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="relative">
                  <div className="absolute -top-6 left-0 text-6xl text-blog-blue/20">"</div>
                  <p className="text-gray-700 mb-6 relative z-10 pt-4">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-blog-blue text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
