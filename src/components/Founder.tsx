import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Founder = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-primary">Instructor</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-primary p-1 flex-shrink-0">
              <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Venkatesh Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Venkatesh Mishra</h3>
              <p className="text-primary text-xl mb-4">Founder, AskLumenAI</p>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Venkatesh is an experienced AI entrepreneur and the founder of AskLumenAI. With years of experience 
                in building and scaling AI startups, he has helped hundreds of founders turn their ideas into successful 
                ventures. His expertise spans AI product development, fundraising, and building sustainable startup communities.
              </p>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/venkatesh-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
