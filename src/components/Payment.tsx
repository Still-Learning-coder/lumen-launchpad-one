import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Payment = () => {
  const handlePayment = (plan: string, amount: number) => {
    // Placeholder for Razorpay integration
    toast.info(`Payment integration coming soon! Selected: ${plan} - $${amount}`);
    
    // This is where you'll integrate Razorpay
    // const options = {
    //   key: "YOUR_RAZORPAY_KEY",
    //   amount: amount * 100,
    //   currency: "USD",
    //   name: "AI Startup Launchpad",
    //   description: plan,
    //   handler: function (response) {
    //     toast.success("Payment successful!");
    //   }
    // };
    // const rzp = new window.Razorpay(options);
    // rzp.open();
  };

  return (
    <section id="payment" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-primary">Plan</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Early bird pricing ends in 5 days. Secure your spot now!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Early Bird */}
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              Early Bird
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="text-5xl font-bold mb-2">$5.99</div>
              <div className="text-muted-foreground">First 5 days only</div>
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
              onClick={() => handlePayment("Early Bird", 5.99)}
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow-blue text-primary-foreground"
            >
              Enroll Now - $5.99
            </Button>
          </div>

          {/* Standard */}
          <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-2">$9.99</div>
              <div className="text-muted-foreground">After early bird period</div>
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
              onClick={() => handlePayment("Standard", 9.99)}
              size="lg"
              variant="outline"
              className="w-full border-primary/40 hover:border-primary hover:bg-primary/10"
            >
              Enroll - $9.99
            </Button>
          </div>

          {/* Premium */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-primary/20 to-card/50 backdrop-blur-sm border-2 border-primary hover:border-primary transition-all duration-300 shadow-glow-blue">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="text-5xl font-bold mb-2">$99</div>
              <div className="text-muted-foreground">Premium Mentorship</div>
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
              onClick={() => handlePayment("Premium Mentorship", 99)}
              size="lg"
              className="w-full bg-gradient-primary hover:shadow-glow-blue-strong text-primary-foreground"
            >
              Get Premium - $99
            </Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Secure payment powered by Razorpay. Money-back guarantee within 7 days.
        </p>
      </div>
    </section>
  );
};
