
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Share } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, you would fetch the blog post based on the slug
  // For demo purposes, we'll use hardcoded content for one specific post
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  // Sample blog post data
  const post = {
    title: "5 Key Steps to Hiring Your First Offshore Developer",
    excerpt: "Learn the essential steps to finding, vetting, and onboarding offshore talent successfully as a non-technical founder.",
    category: "Hiring",
    readTime: "8 min read",
    author: "Jennifer Lawrence",
    authorRole: "Founder & Editor-in-Chief",
    authorInitials: "JL",
    date: "April 15, 2025",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "For non-technical founders, hiring offshore developers can feel like navigating uncharted waters without a compass. You know you need technical talent to bring your vision to life, but without a technical background, how do you ensure you're making the right hiring decisions?"
      },
      {
        type: "paragraph",
        text: "After helping dozens of founders build their offshore teams and making plenty of mistakes along the way, I've distilled the process into five critical steps that will help you hire effectively, even without technical expertise."
      },
      {
        type: "heading",
        text: "1. Define Your Project Requirements Clearly"
      },
      {
        type: "paragraph",
        text: "Before you start looking for developers, you need to have a clear understanding of what you're building. This doesn't mean you need to know how to code, but you should be able to articulate:"
      },
      {
        type: "list",
        items: [
          "The core functionality of your product",
          "Your target users and their needs",
          "Any specific technical requirements you're aware of",
          "Your timeline and budget constraints"
        ]
      },
      {
        type: "paragraph",
        text: "The more specific you can be about your requirements, the better. This clarity will help you communicate effectively with potential hires and ensure they understand your vision."
      },
      {
        type: "heading",
        text: "2. Determine the Skills You Need"
      },
      {
        type: "paragraph",
        text: "Even as a non-technical founder, you can identify the basic skills required for your project. Research similar products or consult briefly with a technical advisor to determine the appropriate technology stack."
      },
      {
        type: "paragraph",
        text: "For example, if you're building a web application, you might need developers with experience in React, Node.js, or Python. For mobile apps, look for iOS (Swift) or Android (Kotlin/Java) expertise."
      },
      {
        type: "paragraph",
        text: "Don't worry about understanding these technologies in depth—just knowing what to look for is enough at this stage."
      },
      {
        type: "heading",
        text: "3. Use Reputable Platforms for Hiring"
      },
      {
        type: "paragraph",
        text: "Where you look for developers can significantly impact the quality of candidates you find. Consider these platforms:"
      },
      {
        type: "list",
        items: [
          "Toptal: For premium, pre-vetted developers",
          "Upwork: For a wide range of talent at various price points",
          "Arc: Specifically for remote developers",
          "GitHub Jobs: To find developers passionate about open source"
        ]
      },
      {
        type: "paragraph",
        text: "Each platform has its strengths and weaknesses. Toptal is more expensive but offers highly vetted talent, while Upwork provides more options but requires more screening on your part."
      },
      {
        type: "heading",
        text: "4. Develop an Effective Screening Process"
      },
      {
        type: "paragraph",
        text: "This is the most challenging part for non-technical founders, but there are strategies to help you evaluate candidates effectively:"
      },
      {
        type: "list",
        items: [
          "Review portfolios and past work thoroughly",
          "Check references from previous clients",
          "Ask about their process and how they handle challenges",
          "Assess communication skills and responsiveness",
          "Consider hiring a technical consultant for final interviews"
        ]
      },
      {
        type: "paragraph",
        text: "Remember that technical skills alone don't make a great hire. Look for developers who communicate clearly, show problem-solving abilities, and take the time to understand your business goals."
      },
      {
        type: "heading",
        text: "5. Start with a Small Test Project"
      },
      {
        type: "paragraph",
        text: "Before committing to a long-term engagement, start with a small, well-defined test project. This allows you to:"
      },
      {
        type: "list",
        items: [
          "Evaluate the developer's work quality",
          "Assess their communication and reliability",
          "Determine if there's a good cultural fit",
          "Minimize financial risk"
        ]
      },
      {
        type: "paragraph",
        text: "A test project could be a simple feature or component of your larger application. Be prepared to pay for this work—quality developers won't work for free, even on test projects."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Hiring your first offshore developer as a non-technical founder is challenging but entirely doable with the right approach. By clearly defining your needs, knowing what skills to look for, using reputable platforms, developing a solid screening process, and starting with test projects, you can build a successful working relationship with offshore talent."
      },
      {
        type: "paragraph",
        text: "Remember that your first hire is just the beginning. As you work together, you'll learn more about the technical aspects of your project, making future hiring decisions easier and more informed."
      }
    ],
    relatedPosts: [
      {
        title: "How to Evaluate Technical Skills When You're Not Technical",
        slug: "evaluate-technical-skills"
      },
      {
        title: "Building a Communication System That Works with Offshore Teams",
        slug: "communication-system-offshore-teams"
      },
      {
        title: "The Hidden Costs of Offshore Development",
        slug: "hidden-costs-offshore-development"
      }
    ]
  };

  // If the slug doesn't match our demo post, we'd normally fetch data or show a not found page
  // For simplicity, we'll just display the demo post regardless of slug

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Article Header with Featured Image */}
        <div className="relative">
          <div className="h-64 md:h-96 overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto -mt-16 md:-mt-24 relative z-10">
              <Badge className="inline-block mb-4 bg-blog-blue text-white">
                {post.category}
              </Badge>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Meta Info */}
        <div className="bg-white py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-blog-blue text-white">{post.authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="text-sm text-gray-500">{post.date}</div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share size={14} />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose lg:prose-lg">
              {post.content.map((section, index) => {
                if (section.type === "paragraph") {
                  return <p key={index} className="mb-6 text-gray-700">{section.text}</p>;
                } else if (section.type === "heading") {
                  return <h2 key={index} className="font-playfair text-2xl font-bold text-gray-900 mt-8 mb-4">{section.text}</h2>;
                } else if (section.type === "list") {
                  return (
                    <ul key={index} className="list-disc pl-5 mb-6 space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <section className="py-8 bg-blog-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarFallback className="bg-blog-blue text-white text-xl">{post.authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-700 mb-4">
                    Former non-technical startup founder who built and sold two SaaS companies with entirely offshore development teams. Jennifer now shares her experiences and strategies to help other founders succeed.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-blog-blue text-blog-blue hover:bg-blog-blue/10 transition-colors"
                    asChild
                  >
                    <Link to="/about">More About the Author</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded">
                    <Link to={`/blog/${relatedPost.slug}`} className="font-medium text-blog-blue hover:text-blog-dark-blue transition-colors">
                      {relatedPost.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
