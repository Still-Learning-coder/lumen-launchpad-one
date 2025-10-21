import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const features = [
    "Live + Recorded sessions with real startup founders",
    "Problem validation & market research frameworks",
    "AI MVP building from scratch to launch",
    "Fundraising strategies and investor connections",
    "Lifetime access to all course materials",
    "Certificate of completion",
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About the <span className="text-transparent bg-clip-text bg-gradient-primary">Program</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Transform your AI idea into a funded startup with our comprehensive 3-month cohort-based program
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-blue"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The AI Startup Launchpad is designed for aspiring founders who want to build and launch their AI startups 
              with expert guidance. Through live sessions, hands-on projects, and personalized mentorship, you'll gain 
              the skills and network needed to succeed in the AI startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
