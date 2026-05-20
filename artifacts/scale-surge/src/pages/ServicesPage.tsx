import { motion } from "framer-motion";
import { MessageSquareText, Bot, Zap, RefreshCw, Users, ArrowRight } from "lucide-react";
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Practical solutions for <span className="text-primary">real problems</span>.</h1>
          <p className="text-xl text-muted-foreground">
            We don't build tech for the sake of tech. We build systems that stop you from losing money, save you time, and get you more jobs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-12 max-w-5xl mx-auto"
        >
          {/* Main Service */}
          <motion.div variants={fadeIn} className="relative p-8 md:p-12 rounded-3xl bg-background border border-primary/30 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)] overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <MessageSquareText className="w-64 h-64" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold w-fit">
                  Flagship Service
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Missed Call Text Back</h2>
                <p className="text-lg text-muted-foreground">
                  The simplest, most effective way to increase your revenue immediately. When a customer calls and you can't answer, our system instantly texts them back.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary"/> <span className="font-medium">Stop leads going to competitors</span></div>
                  <div className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary"/> <span className="font-medium">Capture jobs while you're busy</span></div>
                  <div className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary"/> <span className="font-medium">Looks like a personal response</span></div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors mt-2">
                  Setup This System <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Lead Response",
                desc: "Don't just text them back — engage them. Our AI can answer basic questions about your services, pricing, and availability based on rules you set.",
                problem: "Customers have simple questions but you don't have time to answer texts all day."
              },
              {
                icon: RefreshCw,
                title: "Lead Capture & Follow-Up",
                desc: "Automated sequences that follow up with quotes you've sent, ensuring you win more of the work you've already priced.",
                problem: "You send a quote and forget to follow up. The customer forgets too. The job dies."
              },
              {
                icon: Users,
                title: "CRM & Pipeline Tracking",
                desc: "A simple dashboard to see exactly who needs a quote, who needs a follow-up, and who is booked in. Built for trades, not accountants.",
                problem: "You're tracking jobs in a notebook or your head, leading to double bookings or forgotten work."
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                desc: "Connecting your existing tools together. When a job is marked 'done', automatically send an invoice and request a Google review.",
                problem: "You spend your evenings doing admin instead of resting."
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-6 group hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <div className="bg-background/50 p-4 rounded-lg border border-border/50 text-sm">
                    <span className="font-bold text-foreground">The Problem it Solves:</span> {service.problem}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}