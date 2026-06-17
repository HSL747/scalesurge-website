import { motion } from "framer-motion";
import { MessageSquareText, Bot, Zap, RefreshCw, Users, ArrowRight, Phone, ShieldCheck, Forward, Clock, Star, BarChart3 } from "lucide-react";
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Two services. <span className="text-primary">Both live.</span></h1>
          <p className="text-xl text-muted-foreground">
            We don't sell tools you'll never use. Right now we do two things: stop you losing jobs from missed calls, and help you collect more reviews. We do them well.
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

          {/* Service 1 — Missed Call Text Back */}
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
                  When a customer calls and you can't answer, they get an automated text from your business within seconds. Their reply comes straight to your phone. If they don't reply, a follow-up lands two hours later. You don't need any new apps or software.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Phone,
                    title: "Your phone rings first",
                    desc: "The system rings your phone before doing anything. If you pick up, it's a normal call. Nothing else happens."
                  },
                  {
                    icon: MessageSquareText,
                    title: "Instant text if missed",
                    desc: "If unanswered, an automated text goes to the customer in seconds. In your tone, with your custom message."
                  },
                  {
                    icon: Forward,
                    title: "Replies forwarded to you",
                    desc: "If the customer replies, their message is forwarded straight to your phone as a regular text. No apps, no dashboard."
                  },
                  {
                    icon: Clock,
                    title: "Auto follow-up after 2 hours",
                    desc: "No response? A second message is sent automatically two hours later. You get two chances at the lead without lifting a finger."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Opt-out & spam protection",
                    desc: "Customers can reply STOP at any time to opt out of automated messages. Spam calls are filtered automatically."
                  },
                  {
                    icon: BarChart3,
                    title: "Every missed call logged",
                    desc: "All missed calls, customer responses, and reply times are logged so you have a full record of every lead that came through."
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

          {/* Service 2 — Review Requests */}
          <motion.div variants={fadeIn} className="relative p-8 md:p-12 rounded-3xl bg-background border border-primary/30 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Star className="w-64 h-64" />
            </div>
            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit mb-6">
                  Available Now
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Review Request System</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  When a job is done, send a customer's number directly to your business line via text. They automatically receive a review request with a link to your review page — no app, no manual effort. More five-star reviews, less chasing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MessageSquareText,
                    title: "One text triggers it",
                    desc: "Text a customer's number to your Scale Surge line after completing a job. That's all you do — the system takes care of the rest."
                  },
                  {
                    icon: Star,
                    title: "Custom review message",
                    desc: "You provide the message and review page link. The customer receives it in your words, pointing them to exactly where you want the review."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Opt-out respected",
                    desc: "If a customer has previously replied STOP to any of your automated messages, they won't receive a review request. Fully compliant."
                  },
                  {
                    icon: Zap,
                    title: "No extra setup",
                    desc: "Works through the same system as Missed Call Text Back. Nothing new to install or configure once you're live."
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
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Pricing / Trial */}
          <motion.div variants={fadeIn} className="p-8 md:p-12 rounded-3xl bg-card border border-border text-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold">Free to try. Simple to keep.</h3>
              <p className="text-muted-foreground text-lg">
                Your first month is completely free. No card required. At the end of the trial, you'll receive a Stripe payment link to continue with a monthly subscription. If you decide it's not for you, you simply don't pay — there's nothing to cancel.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> No automatic charges</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> No card at sign-up</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Cancel any time</span>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-primary font-bold text-primary-foreground hover:bg-primary/90 transition-colors justify-center">
                  Start Your Free Month <ArrowRight className="w-4 h-4" />
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
            <div className="grid md:grid-cols-3 gap-6">
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
