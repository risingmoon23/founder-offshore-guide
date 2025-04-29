
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import WhyThisBlog from "@/components/WhyThisBlog";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhyThisBlog />
        <FeaturedArticles />
        <TestimonialSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
