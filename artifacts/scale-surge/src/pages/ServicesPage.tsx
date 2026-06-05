import { motion } from "framer-motion";
import { MessageSquareText, Bot, Zap, RefreshCw, Users, ArrowRight, Phone, Moon, ShieldCheck, Forward } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 border-b border-border bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">One product. <span className="text-primary">It works.</span></h1>
          <p className="text-xl text-muted-foreground">
            We don't sell a suite of tools you'll never use. Right now we do one thing: stop you losing jobs from missed calls. We do it well.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-16 max-w-5xl mx-auto"
        >
          {/* Main Service — detailed */}
          <motion.div variants={fadeIn} className="relative p-8 md:p-12 rounded-3xl bg-background border border-primary/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MessageSquareText className="w-64 h-64" />
            </div>
            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit mb-6">
                  Available Now
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Missed Call Text Back</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  When a customer calls and you can't answer, they get an automated text from your business within seconds. Their reply comes straight to your phone. You don't need any new apps or software.
                </p>
              </div>

              {/* How it actually works */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Phone,
                    title: "Your phone rings first",
                    desc: "The system rings your phone for 20 seconds before doing anything. If you pick up, it's a normal call. Nothing else happens."
                  },
                  {
                    icon: MessageSquareText,
                    title: "Instant text if missed",
                    desc: "If unanswered, an automated text goes to the customer in seconds. In your business name, in your tone, with your custom message."
                  },
                  {
                    icon: Forward,
                    title: "Replies forwarded to you",
                    desc: "If the customer replies, their message is forwarded straight to your phone as a regular text. No apps, no dashboard."
                  },
                  {
                    icon: Moon,
                    title: "Business hours detection",
                    desc: "A different, appropriate message is sent outside your set working hours. No awkward responses at midnight."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Spam and repeat protection",
                    desc: "The same customer won't receive more than one automated text every two hours. Spam calls are filtered out automatically."
                  },
                  {
                    icon: Zap,
                    title: "No software to install",
                    desc: "Setup is done on your behalf. You add conditional call forwarding to your existing number and you're live. That's it."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-primary font-bold text-primary-foreground hover:bg-primary/90 transition-colors justify-center">
                  Setup Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-8 rounded-md border border-border font-semibold hover:bg-muted transition-colors justify-center">
                  Ask a Question
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon services */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-3">More coming soon.</h3>
              <p className="text-muted-foreground">We are building additional tools for trades businesses. These are not available yet.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Bot,
                  title: "AI Lead Response",
                  desc: "Automatically answer common customer questions about your services, availability, and pricing based on rules you set."
                },
                {
                  icon: RefreshCw,
                  title: "Quote Follow-Up",
                  desc: "Automated reminders sent to customers after you've submitted a quote, so you win more of the work you've already priced."
                },
                {
                  icon: Users,
                  title: "Lead Pipeline",
                  desc: "A simple view of who needs a quote, who needs a follow-up, and who is booked in. Built for trades, not accountants."
                },
                {
                  icon: Zap,
                  title: "Review Requests",
                  desc: "After a job is complete, automatically send a text asking the customer to leave a Google review."
                }
              ].map((service, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4 opacity-60">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground border border-border rounded-full px-3 py-1">Coming Soon</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
