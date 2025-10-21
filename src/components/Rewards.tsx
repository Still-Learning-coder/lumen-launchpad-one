import { Trophy } from "lucide-react";

export const Rewards = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm animate-glow-pulse">
              🏆 COMPETITION PRIZE
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Win <span className="text-transparent bg-clip-text bg-gradient-primary">$500 Cash Prize</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The best-performing startup wins $500. All participants compete for glory and investor opportunities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-12 rounded-2xl bg-gradient-to-br from-primary/20 via-card/50 to-card/50 backdrop-blur-sm border-2 border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-glow-blue overflow-hidden group text-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-primary" />
              </div>
              
              <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-primary">$500</div>
              <h3 className="text-3xl font-bold mb-6">Cash Prize</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Present your MVP and business plan to our panel of expert judges at Demo Day. 
                The best pitch wins the grand prize, plus valuable feedback from industry leaders.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/20">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Judges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Live</div>
                  <div className="text-sm text-muted-foreground">Demo Day</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Public</div>
                  <div className="text-sm text-muted-foreground">Pitch Event</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
