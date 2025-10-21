import { Rocket, Users, DollarSign } from "lucide-react";

export const Fundraising = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-primary">Fundraising Opportunity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Top 10 startups get direct access to our investor network and professional fundraising support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Pitch to Investors</h3>
            <p className="text-muted-foreground">
              Present your startup to our curated panel of angel investors and VCs actively looking for AI startups
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Advisor Network</h3>
            <p className="text-muted-foreground">
              Get introductions to our network of 50+ advisors and successful founders who can help you raise funds
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Fundraising Support</h3>
            <p className="text-muted-foreground">
              One-on-one pitch deck reviews, term sheet guidance, and ongoing fundraising support from our team
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <p className="text-lg text-foreground mb-2">
              <span className="font-bold text-primary text-2xl">Previous cohorts raised $2.5M+</span>
            </p>
            <p className="text-muted-foreground">
              3 startups got into Y Combinator • 8 secured angel funding • 12 joined accelerators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
