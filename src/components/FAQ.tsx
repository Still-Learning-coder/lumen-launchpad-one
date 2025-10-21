import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is the course?",
    answer: "The AI Startup Launchpad is a 12-week (3-month) intensive program. We have live sessions twice a week, plus you get lifetime access to all recorded content and materials.",
  },
  {
    question: "What's the difference between live and recorded sessions?",
    answer: "Live sessions happen in real-time where you can interact with instructors and ask questions. All sessions are recorded so you can rewatch them anytime. Even if you miss a live session, you'll have full access to the recording within 24 hours.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes! Upon successful completion of the course and final project submission, you'll receive a verified certificate of completion from AskLumenAI that you can share on LinkedIn and your resume.",
  },
  {
    question: "What if I can't attend live sessions?",
    answer: "No problem! All sessions are recorded and you'll have lifetime access. We also have a vibrant community where you can ask questions and get support from instructors and peers anytime.",
  },
  {
    question: "Is the early bird price really for 5 days only?",
    answer: "Yes, the $5.99 early bird pricing is only available for the first 5 days after launch. After that, the price increases to $9.99. We want to reward early supporters of the program.",
  },
  {
    question: "What's included in the Premium Mentorship add-on?",
    answer: "The $99 premium add-on gives you 4 exclusive 1-on-1 mentorship sessions with Venkatesh Mishra (one per month), personalized feedback on your startup, priority support in community channels, and invitations to exclusive networking events.",
  },
  {
    question: "Do I need technical skills to join?",
    answer: "No! While some technical knowledge is helpful, we teach everything from the ground up. We have both technical and non-technical founders in our cohorts. You'll learn what you need to build and launch your AI startup.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course within the first week, we'll provide a full refund—no questions asked.",
  },
  {
    question: "How are the $500 prize and investment opportunities awarded?",
    answer: "At the end of the cohort, you'll pitch your startup to our panel of expert judges. The best pitch wins $500 cash. Top 10 startups get introduced to our investor network and receive fundraising support from our advisors.",
  },
  {
    question: "Can I access the course from anywhere in the world?",
    answer: "Absolutely! The course is 100% online and accessible from anywhere. Live sessions are scheduled to accommodate multiple time zones, and all recordings are available immediately after each session.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-primary">Questions</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Everything you need to know about the AI Startup Launchpad
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-xl bg-card/50 backdrop-blur-sm px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
