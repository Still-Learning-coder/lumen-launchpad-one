import { Rocket, Users, Trophy } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Live Founder-Led Sessions + Community",
      description: "Learn directly from successful founders in live sessions. Get lifetime access to an exclusive community of AI entrepreneurs."
    },
    {
      icon: Users,
      title: "Real Startup Experience + Fundraising",
      description: "Build a real MVP, pitch to investors, and get direct access to our network of VCs and angels. Top 10 startups get fundraising support."
    },
    {
      icon: Trophy,
      title: "AskLumenAI Ecosystem Beta Access",
      description: "Exclusive early access to AskLumenAI platform, tools, and resources. Plus, lifetime community membership and ongoing mentorship."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-primary">Launch & Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From zero to investor-ready in just 12 weeks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue text-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
