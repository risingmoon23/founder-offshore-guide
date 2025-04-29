
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Link as LinkIcon } from "lucide-react";

const Resources = () => {
  // Sample resources data
  const downloadableResources = [
    {
      title: "Offshore Developer Interview Template",
      description: "A comprehensive template to help non-technical founders interview and assess offshore developers effectively.",
      type: "PDF Template",
      icon: <FileText className="h-10 w-10 text-blog-blue" />,
    },
    {
      title: "Project Brief Template for Developers",
      description: "Learn how to communicate your vision clearly to developers without technical jargon.",
      type: "Word Document",
      icon: <FileText className="h-10 w-10 text-blog-blue" />,
    },
    {
      title: "Offshore Team Communication Framework",
      description: "A proven system for maintaining clear communication with your offshore development team.",
      type: "PDF Guide",
      icon: <FileText className="h-10 w-10 text-blog-blue" />,
    }
  ];

  const externalResources = [
    {
      title: "Top Platforms for Hiring Offshore Developers",
      description: "A curated list of the most reliable platforms for finding quality offshore development talent.",
      link: "#",
      icon: <LinkIcon className="h-10 w-10 text-blog-blue" />,
    },
    {
      title: "Project Management Tools for Remote Teams",
      description: "Reviews and comparisons of the best tools for managing remote development projects.",
      link: "#",
      icon: <LinkIcon className="h-10 w-10 text-blog-blue" />,
    },
    {
      title: "Technical Role Descriptions for Non-Technical Founders",
      description: "Sample job descriptions for various technical roles to help you understand what skills to look for.",
      link: "#",
      icon: <LinkIcon className="h-10 w-10 text-blog-blue" />,
    }
  ];

  const handleDownload = (resourceTitle: string) => {
    alert(`In a real implementation, this would download ${resourceTitle}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Resources Header */}
        <section className="bg-blog-light-gray py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                Resources for Founders
              </h1>
              <p className="text-xl text-gray-600">
                Free tools, templates, and guides to help you succeed with your offshore development team.
              </p>
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
              Downloadable Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {downloadableResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {resource.icon}
                    </div>
                    <CardTitle className="font-playfair text-xl">{resource.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{resource.type}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      onClick={() => handleDownload(resource.title)}
                      className="bg-blog-blue hover:bg-blog-dark-blue transition-colors"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-12 bg-blog-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">
              Useful Links & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {externalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {resource.icon}
                    </div>
                    <CardTitle className="font-playfair text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button 
                      variant="outline"
                      className="border-blog-blue text-blog-blue hover:bg-blog-blue/10 transition-colors"
                      asChild
                    >
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Visit Resource
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Banner */}
        <section className="py-12 bg-blog-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold mb-4">
                Need Personalized Help?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Book a consultation with our experts for personalized guidance on hiring and managing your offshore development team.
              </p>
              <Button className="bg-white text-blog-dark-blue hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
