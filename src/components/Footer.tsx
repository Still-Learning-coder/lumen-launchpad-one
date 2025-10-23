import { Linkedin } from "lucide-react";
export const Footer = () => {
  return <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-primary">AskLumenAI</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 AskLumenAI. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-muted-foreground">Powered by: Ask Lumen AI</p>
            <a href="https://www.linkedin.com/in/foundervenkateshmishra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-colors">
              <Linkedin className="w-5 h-5 text-primary" />
              <span>Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};