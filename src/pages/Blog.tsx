
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample blog articles data
  const allArticles = [
    {
      id: 1,
      title: "5 Key Steps to Hiring Your First Offshore Developer",
      excerpt: "Learn the essential steps to finding, vetting, and onboarding offshore talent successfully as a non-technical founder.",
      category: "Hiring",
      readTime: "8 min read",
      slug: "hiring-first-offshore-developer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "Apr 15, 2025"
    },
    {
      id: 2,
      title: "How to Evaluate Technical Skills When You're Not Technical",
      excerpt: "Practical strategies for assessing developer skills without being a coder yourself.",
      category: "Evaluation",
      readTime: "6 min read",
      slug: "evaluate-technical-skills",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "Apr 10, 2025"
    },
    {
      id: 3,
      title: "Managing Remote Developer Teams Across Time Zones",
      excerpt: "Best practices for effective communication, project management, and team collaboration with your offshore development team.",
      category: "Management",
      readTime: "10 min read",
      slug: "managing-remote-developer-teams",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "Apr 5, 2025"
    },
    {
      id: 4,
      title: "The Hidden Costs of Offshore Development (And How to Budget for Them)",
      excerpt: "Beyond hourly rates: Understanding the complete cost structure and how to budget effectively for offshore development.",
      category: "Finance",
      readTime: "9 min read",
      slug: "hidden-costs-offshore-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "Mar 28, 2025"
    },
    {
      id: 5,
      title: "Building a Communication System That Works with Offshore Teams",
      excerpt: "How to establish clear communication channels, protocols, and tools for effective collaboration with your offshore team.",
      category: "Communication",
      readTime: "7 min read",
      slug: "communication-system-offshore-teams",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "Mar 20, 2025"
    },
    {
      id: 6,
      title: "Top 10 Project Management Tools for Non-Technical Founders",
      excerpt: "A comprehensive review of the best tools to manage your development projects without needing technical expertise.",
      category: "Tools",
      readTime: "12 min read",
      slug: "project-management-tools-non-technical-founders",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      date: "Mar 15, 2025"
    },
  ];

  const filteredArticles = allArticles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Blog Header */}
        <section className="bg-blog-light-gray py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                Offshore Development Articles
              </h1>
              <p className="text-xl text-gray-600">
                Practical insights and guides to help non-technical founders succeed with offshore development teams.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative max-w-md mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
                    <div className="text-sm text-gray-500 mt-1">Published on {article.date}</div>
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

            {filteredArticles.length === 0 && (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">No articles matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
