import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToPayment = () => {
    document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="AI Startup Accelerator Environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4 animate-slide-in">
          <span className="text-sm font-semibold text-primary">🔥 Only 100 Founder Seats Available • 5 Days Left</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in" style={{ animationDelay: "0.1s" }}>
          Launch Your AI Startup in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-primary">90 Days</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: "0.2s" }}>
          Live founder-led sessions • Build & launch your MVP • Pitch to investors
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.25s" }}>
          12-week intensive program with expert mentorship, $500 cash prize, and exclusive investor access
        </p>

        <div className="mb-12 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            onClick={scrollToPayment}
            className="group bg-gradient-primary hover:shadow-glow-blue-strong text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Reserve Your Spot – Enroll Now for $5.99
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Limited to 100 founders per batch
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.4s" }}>
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
