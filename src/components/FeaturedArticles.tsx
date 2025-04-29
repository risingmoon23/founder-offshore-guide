
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const FeaturedArticles = () => {
  // Sample featured articles data
  const articles = [
    {
      id: 1,
      title: "5 Key Steps to Hiring Your First Offshore Developer",
      excerpt: "Learn the essential steps to finding, vetting, and onboarding offshore talent successfully as a non-technical founder.",
      category: "Hiring",
      readTime: "8 min read",
      slug: "hiring-first-offshore-developer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 2,
      title: "How to Evaluate Technical Skills When You're Not Technical",
      excerpt: "Practical strategies for assessing developer skills without being a coder yourself.",
      category: "Evaluation",
      readTime: "6 min read",
      slug: "evaluate-technical-skills",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Managing Remote Developer Teams Across Time Zones",
      excerpt: "Best practices for effective communication, project management, and team collaboration with your offshore development team.",
      category: "Management",
      readTime: "10 min read",
      slug: "managing-remote-developer-teams",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Practical insights to help you build and manage your offshore development team with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={`${article.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary" className="bg-blog-light-gray text-blog-dark-gray hover:bg-blog-light-gray/80">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="font-playfair text-xl hover:text-blog-blue transition-colors">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{article.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-blog-blue hover:text-blog-dark-blue font-medium inline-flex items-center transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-blog-blue hover:text-blog-dark-blue font-medium text-lg transition-colors"
          >
            View All Articles
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
