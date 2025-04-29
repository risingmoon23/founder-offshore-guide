
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-blog-light-gray py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                About Offshore Guide
              </h1>
              <p className="text-xl text-gray-600">
                Your trusted resource for navigating offshore software development as a non-technical founder.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Offshore Guide, we believe that you shouldn't need to have a computer science degree to build a successful tech company. Our mission is to empower non-technical founders with the knowledge, tools, and confidence to effectively hire and manage offshore development teams.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through practical guides, expert interviews, and real-world case studies, we aim to demystify the world of software development and help you bridge the gap between your business vision and technical execution.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're hiring your first developer or managing an established offshore team, we're here to help you navigate the challenges and leverage the incredible opportunities that global talent can bring to your business.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 bg-blog-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6 text-center">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-700 mb-10 text-center">
                Our team combines decades of experience in entrepreneurship, offshore development, and project management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <div className="h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80" 
                      alt="Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-1">Jennifer Lawrence</h3>
                    <p className="text-blog-blue font-medium mb-3">Founder & Editor-in-Chief</p>
                    <p className="text-gray-700">
                      Former non-technical startup founder who built and sold two SaaS companies with entirely offshore development teams. Jennifer now shares her experiences and strategies to help other founders succeed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80" 
                      alt="Technical Advisor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-1">David Rodriguez</h3>
                    <p className="text-blog-blue font-medium mb-3">Technical Advisor</p>
                    <p className="text-gray-700">
                      With 15+ years of experience in software development and team management, David brings technical expertise to our content, ensuring our advice is both practical and technically sound.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Offshore Guide was born from our founder's own struggle as a non-technical entrepreneur trying to build software products. After making countless expensive mistakes and navigating the learning curve of working with offshore teams, Jennifer realized there was no comprehensive resource for non-technical founders facing these challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a personal blog documenting lessons learned has grown into a trusted resource for founders around the world. Today, Offshore Guide helps thousands of entrepreneurs bridge the technical knowledge gap and build successful products with offshore development teams.
              </p>
              <p className="text-lg text-gray-700">
                We're committed to providing practical, honest, and actionable guidance based on real-world experience rather than theory. Our content comes from those who have actually built and managed offshore teams, not just written about it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
