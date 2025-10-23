import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

// Stripe price IDs
const PRICE_IDS = {
  earlyBird: "price_1SKdzgALEZvEdhyZaBuqc26F",
  standard: "price_1SKdztALEZvEdhyZncS1ebbj",
  premium: "price_1SKe0JALEZvEdhyZRKkmbfyA",
};

export const Payment = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePayment = async (plan: string, priceId: string, planName: string, amount: string) => {
    setLoading(plan);
    
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { 
          priceId,
          planName,
          amount,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe Checkout in a new tab
        window.open(data.url, "_blank");
        toast.success(`Opening checkout for ${planName}...`);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="payment" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-primary">Investment</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
          Early bird pricing ends in 5 days. Secure your spot now!
        </p>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary">
            🔒 Secure Payment via Stripe • 7-Day Money-Back Guarantee
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Early Bird */}
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              Early Bird
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="text-2xl text-muted-foreground line-through mb-1">$99</div>
              <div className="text-5xl font-bold mb-2 text-primary">$5.99</div>
              <div className="text-muted-foreground font-semibold">94% OFF - First 5 Days Only</div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Full course access",
                "Live + recorded sessions",
                "Course materials & resources",
                "Community access",
                "Certificate of completion",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handlePayment("earlyBird", PRICE_IDS.earlyBird, "Early Bird", "$5.99")}
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow-blue text-primary-foreground"
              disabled={loading === "earlyBird"}
            >
              {loading === "earlyBird" ? "Processing..." : "Enroll Now - $5.99"}
            </Button>
          </div>

          {/* Standard */}
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="text-2xl text-muted-foreground line-through mb-1">$99</div>
              <div className="text-5xl font-bold mb-2">$9.99</div>
              <div className="text-muted-foreground font-semibold">90% OFF - After Early Bird</div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Full course access",
                "Live + recorded sessions",
                "Course materials & resources",
                "Community access",
                "Certificate of completion",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handlePayment("standard", PRICE_IDS.standard, "Standard", "$9.99")}
              size="lg"
              variant="outline"
              className="w-full border-primary/40 hover:border-primary hover:bg-primary/10"
              disabled={loading === "standard"}
            >
              {loading === "standard" ? "Processing..." : "Enroll - $9.99"}
            </Button>
          </div>

          {/* Premium */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-primary/20 to-card/50 backdrop-blur-sm border-2 border-primary hover:border-primary transition-all duration-300 shadow-glow-blue">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="text-2xl text-muted-foreground line-through mb-1">$299</div>
              <div className="text-5xl font-bold mb-2 text-primary">$99</div>
              <div className="text-muted-foreground font-semibold">Premium Mentorship + Direct Access</div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Everything in Standard",
                "1-on-1 mentorship sessions",
                "Personalized feedback",
                "Priority support",
                "Exclusive networking events",
                "Direct access to Venkatesh",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handlePayment("premium", PRICE_IDS.premium, "Premium Mentorship", "$99")}
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow-blue-strong text-primary-foreground"
              disabled={loading === "premium"}
            >
              {loading === "premium" ? "Processing..." : "Get Premium - $99"}
            </Button>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">What Happens After You Enroll?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary font-bold text-xl">1</div>
              <h4 className="font-semibold mb-2">Instant Confirmation</h4>
              <p className="text-sm text-muted-foreground">Get email confirmation within 5 minutes with access to community</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary font-bold text-xl">2</div>
              <h4 className="font-semibold mb-2">Pre-Course Materials</h4>
              <p className="text-sm text-muted-foreground">Receive prep materials and introductory videos within 24 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary font-bold text-xl">3</div>
              <h4 className="font-semibold mb-2">First Live Session</h4>
              <p className="text-sm text-muted-foreground">Join the kickoff session on November 10th, 2025 and start building</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">100% Money-Back Guarantee</p>
              <p className="text-xs text-muted-foreground">Attend live sessions for 7 days. Not satisfied? Get a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
