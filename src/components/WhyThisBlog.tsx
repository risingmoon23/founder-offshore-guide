
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, Users } from "lucide-react";

const WhyThisBlog = () => {
  const reasons = [
    {
      icon: <BookOpen className="w-10 h-10 text-blog-blue" />,
      title: "Expert Insights",
      description: "Learn from experienced founders and project managers who've successfully built offshore development teams from scratch."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blog-blue" />,
      title: "Practical Guidance",
      description: "Get actionable advice, tools, and frameworks specifically designed for non-technical founders navigating tech projects."
    },
    {
      icon: <Users className="w-10 h-10 text-blog-blue" />,
      title: "Community Support",
      description: "Join a community of like-minded founders sharing experiences and strategies for working with offshore development teams."
    }
  ];

  return (
    <section className="py-16 bg-blog-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why This Blog Exists</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Created to bridge the gap between non-technical founders and the world of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center">
                {reason.icon}
                <CardTitle className="mt-4 font-playfair text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisBlog;
