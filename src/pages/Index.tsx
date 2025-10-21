import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Advisors } from "@/components/Advisors";
import { Rewards } from "@/components/Rewards";
import { Fundraising } from "@/components/Fundraising";
import { Testimonials } from "@/components/Testimonials";
import { Community } from "@/components/Community";
import { Curriculum } from "@/components/Curriculum";
import { Payment } from "@/components/Payment";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Hero />
      <ValueProposition />
      <About />
      <Founder />
      <Advisors />
      <Fundraising />
      <Rewards />
      <Testimonials />
      <Curriculum />
      <Community />
      <Payment />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
