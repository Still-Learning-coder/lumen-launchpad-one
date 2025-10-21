import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";

export const Community = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-primary">Founder Community</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Network with 1000+ AI founders, get ongoing support, and grow together
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            <span className="text-primary font-semibold">Lifetime access</span> to community • Monthly expert sessions • Job opportunities • Co-founder matching
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
              <p className="text-muted-foreground mb-6">
                24/7 support, weekly expert AMAs, co-founder matching, job board, and exclusive channels for alumni networking
              </p>
              <Button 
                size="lg"
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
              >
                Join Discord
              </Button>
            </div>

            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">WhatsApp Group</h3>
              <p className="text-muted-foreground mb-6">
                Daily AI news, quick wins, instant peer support, and accountability partners for your startup journey
              </p>
              <Button 
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white"
              >
                Join WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
