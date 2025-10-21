import { Star } from "lucide-react";

const testimonials = [
  { name: "Alex Johnson", startup: "DataFlow AI", text: "This program completely transformed how I approach AI product development. Went from idea to MVP in 8 weeks!" },
  { name: "Maria Santos", startup: "HealthBot Pro", text: "The mentorship was invaluable. Venkatesh's insights on fundraising helped us secure our seed round." },
  { name: "Raj Patel", startup: "AutomateNow", text: "Best investment I've made in my career. The network alone is worth 10x the price." },
  { name: "Emily Chen", startup: "VisionAI Labs", text: "From zero to launching our beta with paying customers. This course delivers results." },
  { name: "Marcus Williams", startup: "ChatGenius", text: "The curriculum is perfectly structured. Each phase builds on the previous one logically." },
  { name: "Sofia Rodriguez", startup: "PredictIQ", text: "I joined as a solo founder and left with a co-founder and clear roadmap to scale." },
  { name: "James Kim", startup: "NeuralNet Pro", text: "The live sessions with real founders sharing their journey was incredibly inspiring." },
  { name: "Priya Sharma", startup: "SmartAssist AI", text: "Won the $500 prize and got connected with 3 potential investors. Life-changing!" },
  { name: "David Lee", startup: "CodeAI Helper", text: "The community is amazing. Still collaborating with fellow cohort members 6 months later." },
  { name: "Aisha Mohammed", startup: "LanguageFlow", text: "Practical, actionable advice from day one. No fluff, just real startup building." },
  { name: "Tom Anderson", startup: "ML Insights", text: "Venkatesh's experience shows in every session. He knows exactly what founders struggle with." },
  { name: "Lisa Wang", startup: "DataMind AI", text: "The problem validation framework saved me months of building the wrong product." },
  { name: "Carlos Mendez", startup: "AutoTranslate", text: "Best cohort-based course I've taken. The peer learning aspect is phenomenal." },
  { name: "Nina Patel", startup: "TaskFlow AI", text: "From confused beginner to confident founder. This program works." },
  { name: "Robert Chang", startup: "VoiceAI Pro", text: "The fundraising module alone was worth the entire course fee." },
  { name: "Fatima Al-Rashid", startup: "SentimentAI", text: "Got featured on Product Hunt and landed our first 100 users thanks to the launch strategies taught here." },
  { name: "Kevin O'Brien", startup: "TextGen AI", text: "The mentors actually care about your success. Received personalized feedback on every milestone." },
  { name: "Yuki Tanaka", startup: "ImageAI Studio", text: "As a non-technical founder, this course gave me the confidence to lead an AI startup." },
  { name: "Samuel Okoye", startup: "ProcessAI", text: "The recording quality is excellent. I rewatch sessions regularly to reinforce learnings." },
  { name: "Isabella Martinez", startup: "CustomerAI", text: "Networking opportunities are endless. Met my CTO through the course community." },
  { name: "Ahmed Hassan", startup: "DocuAI", text: "Clear, concise, and comprehensive. Everything you need to launch in one place." },
  { name: "Grace Thompson", startup: "AnalyticsAI Pro", text: "The weekly assignments kept me accountable and moving forward consistently." },
  { name: "Luis Gonzalez", startup: "SearchAI Plus", text: "Investors were impressed by the structured approach I learned in this program." },
  { name: "Olivia Brown", startup: "RecommendAI", text: "Made back my investment in the first month after launch. ROI is incredible." },
  { name: "Daniel Kim", startup: "ChatFlow AI", text: "The advisor network is gold. Got introductions to potential customers and partners." },
  { name: "Amara Okonkwo", startup: "SocialAI", text: "Practical tools and frameworks I still use daily in my startup." },
  { name: "Ryan Miller", startup: "VisionPro AI", text: "The cohort format creates healthy competition and collaboration. Best of both worlds." },
  { name: "Mei Lin", startup: "AudioAI Lab", text: "Venkatesh is an incredible teacher. Complex concepts explained simply and clearly." },
  { name: "Hassan Ali", startup: "ContentAI", text: "From idea validation to investor pitch deck - everything covered in amazing detail." },
  { name: "Sophie Laurent", startup: "AdaptAI", text: "The premium mentorship add-on was the best decision. 1-on-1 guidance accelerated my progress 10x." },
  { name: "Brandon Jackson", startup: "LearnAI Pro", text: "Certificate helped me land speaking opportunities at AI conferences. Great credibility boost." },
  { name: "Zara Khan", startup: "PersonalizeAI", text: "The curriculum adapts to current AI trends. Always learning cutting-edge strategies." },
  { name: "Victor Nguyen", startup: "OptimizeAI", text: "Support doesn't end after 3 months. The community and resources remain accessible." },
  { name: "Jasmine Lee", startup: "InsightAI", text: "Practical MVP building approach saved me from over-engineering. Launched in half the expected time." },
  { name: "Omar Rashid", startup: "AssistAI Pro", text: "The fundraising connections led to our pre-seed round. This course literally funded our startup." },
  { name: "Chloe Williams", startup: "ScaleAI", text: "Best cohort I've been part of. The energy, support, and knowledge sharing is unmatched." },
  { name: "Ethan Davis", startup: "BuildAI Fast", text: "Every session delivered massive value. Zero filler content - just pure startup gold." },
  { name: "Layla Ahmed", startup: "GrowthAI Pro", text: "The problem-solution fit framework prevented me from wasting months on wrong assumptions." },
  { name: "Nathan Park", startup: "MonitorAI", text: "Top-tier education at a fraction of the cost of MBA programs. Infinitely more practical too." },
  { name: "Aaliyah Robinson", startup: "TrackAI Plus", text: "From first-time founder to confident CEO in 3 months. This course is transformational." },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          What Our <span className="text-transparent bg-clip-text bg-gradient-primary">Founders Say</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Join 1000+ successful founders who launched their AI startups with us
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-blue"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary p-0.5">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.startup}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
