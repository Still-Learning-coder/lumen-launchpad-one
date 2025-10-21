import { Trophy, TrendingUp } from "lucide-react";

export const Rewards = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Special <span className="text-transparent bg-clip-text bg-gradient-primary">Rewards</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">$500 Cash Prize</h3>
              <p className="text-muted-foreground text-lg">
                The best startup pitch at the end of the cohort wins <span className="text-primary font-semibold">$500 cash</span>. 
                Showcase your MVP and business plan to our panel of expert judges.
              </p>
            </div>
          </div>

          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Investment Opportunities</h3>
              <p className="text-muted-foreground text-lg">
                Top 10 startups get exclusive access to our <span className="text-primary font-semibold">investor network</span> and 
                fundraising support from our advisors and founder community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
