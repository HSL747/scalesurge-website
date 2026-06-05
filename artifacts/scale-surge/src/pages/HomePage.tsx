import { motion } from "framer-motion";
import { Link } from "wouter";
import { PhoneMissed, MessageSquareText, TrendingUp, Clock, CheckCircle2, Wrench, Zap, ShieldCheck, Tag, Phone, Moon } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Limited-Time Offer Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/10 border-b border-primary/30 py-3 px-4"
      >
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 shrink-0">
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wide">Limited Time</span>
          </div>
          <p className="text-sm text-foreground">
            We are offering free implementation for your first month in exchange for honest feedback and a testimonial.{" "}
            <Link href="/contact" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors">
              Claim your free month
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center text-center gap-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Built for UK Home Service Businesses
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Stop Losing Customers <br className="hidden md:block"/>
              From <span className="text-primary">Missed Calls</span>.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              When you can't answer the phone, your customer gets an instant text from your business. They stop searching Google. You get the job.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Setup Now
              </Link>
              <Link href="/services" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-base font-semibold shadow-sm hover:bg-muted transition-colors">
                See How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">The costly reality of a busy day.</motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
                If you don't answer, 80% of callers won't leave a voicemail. They call the next number on Google.
                Every missed call is a missed job.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4 mt-4">
                {[
                  "You're on a job and can't pick up",
                  "A customer calls your number",
                  "It rings out. No voicemail.",
                  "They immediately call the next business on Google",
                  "You lose the job, and probably that customer for life"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-background border border-border shadow-xl flex flex-col gap-6"
            >
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-4 py-1 rounded-full font-bold shadow-lg transform rotate-6">
                Lost Revenue
              </div>
              <div className="flex items-center gap-4 border-b border-border pb-6">
                <div className="h-14 w-14 rounded-full bg-destructive/10 flex items-center justify-center">
                  <PhoneMissed className="h-7 w-7 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Missed Call</h3>
                  <p className="text-muted-foreground">Today at 10:42 AM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">One system. No extra work on your end.</h2>
            <p className="text-lg text-muted-foreground">Set it up once and it runs quietly in the background, catching the leads you would otherwise lose.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Phone,
                title: "Your Phone Rings First",
                desc: "The system rings you for 20 seconds before doing anything. If you answer, the call goes through as normal."
              },
              {
                icon: MessageSquareText,
                title: "Instant Text If Missed",
                desc: "If unanswered, the customer gets a text from your business name within seconds. They stay engaged instead of calling a competitor."
              },
              {
                icon: TrendingUp,
                title: "Replies Come to You",
                desc: "If the customer texts back, the reply is forwarded to your phone. No new apps. No dashboard to check."
              },
              {
                icon: Moon,
                title: "Business Hours Aware",
                desc: "Different message sent inside and outside your working hours, so customers always get a reply that makes sense."
              }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works.</h2>
            <p className="text-lg text-muted-foreground">Simple, straightforward, no BS.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-12">
              {[
                {
                  step: "01",
                  title: "A customer calls your number",
                  desc: "Call forwarding on your existing number routes the call through our system. Nothing changes for the customer — they're calling your number as normal."
                },
                {
                  step: "02",
                  title: "Your phone rings for 20 seconds",
                  desc: "Our system rings your phone just like a regular call. If you pick up, it's a normal conversation. Nothing else happens."
                },
                {
                  step: "03",
                  title: "Miss it? They get a text immediately",
                  desc: "If you don't answer, the customer receives an automated text in seconds: \"Hi, this is [Your Business]. I'm on a job right now. How can I help you today?\""
                },
                {
                  step: "04",
                  title: "Their reply comes straight to your phone",
                  desc: "If they text back, the message is forwarded to your phone as a normal text. You reply when you're free and book the job. No app needed."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 text-primary font-bold text-4xl mt-1">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-xl text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Hampshire Trades.</h2>
            <p className="text-lg text-muted-foreground">If you run a service business and miss calls, you need this.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Plumbers', 'Electricians', 'Roofers', 'Landscapers', 'HVAC Engineers', 'Builders', 'Cleaners', 'Decorators'].map((trade, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                {trade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Don't just take our word for it.</h2>
          <p className="text-center text-muted-foreground mb-16">We are currently collecting feedback from our first clients. These are coming soon.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mark T.", biz: "MT Plumbing & Heating", text: "I used to miss 3-4 calls a day on site. Now they get an instant text and I've booked extra jobs this month purely from the follow-up." },
              { name: "Sarah J.", biz: "SJ Electrical Services", text: "No complicated software, just a system that works in the background. My phone rings, and if I miss it the customer gets a text straight away. Brilliant." },
              { name: "Tom W.", biz: "Wessex Roofing", text: "It's like having someone answering the phone for me while I'm up on a roof. The customer replies, I get the message, I book the job. Simple." }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between gap-6 opacity-50">
                <p className="text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.biz}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions.</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about the service.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to change my phone number?",
                a: "No. You keep your existing number. You just set up conditional call forwarding on your mobile or landline — a standard network feature. This only activates when a call goes unanswered, so your phone still rings first every time."
              },
              {
                q: "What happens if I answer the call?",
                a: "The system rings your phone for 20 seconds. If you answer, it's a completely normal phone call and no text is sent. The automated message only goes out if the call goes unanswered."
              },
              {
                q: "Will I get spammed with customer replies?",
                a: "No. The same customer won't receive more than one automated text every two hours, so there's no risk of repeat messages going out to the same person."
              },
              {
                q: "How long does setup take?",
                a: "Once we have your details, the system is typically live within 48 hours. There's nothing for you to install or configure yourself."
              },
              {
                q: "Am I locked into a long contract?",
                a: "No. We work on a rolling monthly basis. We keep your business by getting you results, not by locking you in."
              },
              {
                q: "Can I customise the text message?",
                a: "Yes. We set up a personalised message in your business name and tone. You also get a separate message for outside business hours, so customers always get a response that makes sense."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-lg bg-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg">
                    <span>{faq.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-3 group-open:animate-fadeIn px-6 pb-6 border-t border-border pt-4">
                    {faq.a}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop leaving money on the table.</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's get your missed call text back system live this week.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105">
            Setup Now
          </Link>
        </div>
      </section>
    </div>
  );
}
