const advisors = [
  { name: "Dr. Sarah Chen", role: "AI Research Lead", company: "TechVentures AI" },
  { name: "Michael Rodriguez", role: "Serial Entrepreneur", company: "3x AI Startup Founder" },
  { name: "Priya Sharma", role: "VP of Product", company: "CloudAI Solutions" },
  { name: "James Peterson", role: "Investment Partner", company: "NextGen Ventures" },
  { name: "Aisha Okonkwo", role: "ML Engineer", company: "DeepMind Alumni" },
  { name: "David Kim", role: "Growth Strategist", company: "ScaleAI Advisor" },
  { name: "Elena Volkov", role: "AI Ethics Expert", company: "Responsible AI Institute" },
  { name: "Robert Thompson", role: "CTO", company: "AutomateAI Inc" },
  { name: "Fatima Al-Rashid", role: "Data Scientist", company: "Google AI" },
  { name: "Carlos Mendez", role: "Product Manager", company: "Microsoft AI" },
];

export const Advisors = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Learn from <span className="text-transparent bg-clip-text bg-gradient-primary">Expert Advisors</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Get mentored by 10 successful founders and AI professionals who have built and scaled AI companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-gradient-primary p-0.5">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-1">{advisor.name}</h3>
              <p className="text-sm text-primary mb-1">{advisor.role}</p>
              <p className="text-xs text-muted-foreground">{advisor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
