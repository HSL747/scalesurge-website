import { motion } from "framer-motion";
import { Link } from "wouter";
import { PhoneMissed, MessageSquareText, TrendingUp, Clock, CheckCircle2, Wrench, Zap, ShieldCheck, Tag, Phone, Moon, ArrowDown, MessageCircle } from "lucide-react";

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

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="relative rounded-[40px] bg-zinc-950 border-[5px] border-zinc-800 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-zinc-950 rounded-b-2xl z-10" />
        <div className="bg-zinc-900 pt-10 pb-6 px-4 space-y-3 min-h-[500px] flex flex-col">
          <div className="text-center py-3">
            <div className="text-4xl font-light text-white tracking-tight">10:42</div>
            <div className="text-xs text-zinc-500 mt-0.5">Tuesday, 14 January</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-zinc-800/90 rounded-2xl p-3 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
              <PhoneMissed className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wide">Phone · now</div>
              <div className="text-sm font-medium text-white">Missed call</div>
              <div className="text-xs text-zinc-400">07712 345 678</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-zinc-800/90 rounded-2xl p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquareText className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wide">Messages · 5s ago</div>
                <div className="text-xs font-semibold text-white">Your Business</div>
              </div>
            </div>
            <div className="text-xs text-zinc-300 leading-relaxed pl-0.5">
              "Hi! I missed your call. I'm on a job right now — how can I help you today?"
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="bg-zinc-800/90 rounded-2xl p-3"
          >
            <div className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1.5">Customer · 2 min ago</div>
            <div className="text-xs text-zinc-300 leading-relaxed">
              "Could you quote for a new bathroom? We're in Petersfield."
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.4 }}
            className="mt-auto border border-primary/40 bg-primary/10 rounded-xl p-3 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <div className="text-xs text-primary font-medium">Reply forwarded to your phone</div>
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}

function SmsMockup() {
  const messages = [
    { from: "auto", text: "Hi! I missed your call. I'm on a job right now — how can I help you today?", delay: 0.2 },
    { from: "customer", text: "Could you quote for a new bathroom? We're in Petersfield.", delay: 0.7 },
    { from: "auto", text: "[Forwarded to your mobile]", delay: 1.1, forwarded: true },
    { from: "you", text: "Hi! Absolutely — I can come Friday between 9 and 12. Does that work?", delay: 1.4 },
    { from: "customer", text: "Perfect, Friday 9am is great!", delay: 1.8 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl overflow-hidden">
        <div className="bg-zinc-900 px-4 py-3 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Your Business</div>
            <div className="text-xs text-zinc-500">Text conversation</div>
          </div>
        </div>
        <div className="p-4 space-y-3 min-h-[280px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: msg.delay, duration: 0.4 }}
              className={`flex ${msg.from === "you" || msg.from === "auto" ? "justify-end" : "justify-start"}`}
            >
              {msg.forwarded ? (
                <div className="w-full border border-dashed border-primary/40 rounded-lg px-3 py-2 flex items-center gap-2">
                  <Phone className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary">{msg.text}</span>
                </div>
              ) : (
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                  msg.from === "you"
                    ? "bg-primary text-white rounded-br-sm"
                    : msg.from === "auto"
                    ? "bg-primary/20 text-primary rounded-br-sm"
                    : "bg-zinc-800 text-zinc-200 rounded-bl-sm"
                }`}>
                  {msg.from === "auto" && (
                    <div className="text-[10px] text-primary/70 mb-0.5 font-medium">Automated reply</div>
                  )}
                  {msg.text}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 px-4">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-7"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium w-fit">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Built for UK Home Service Businesses
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                Stop Losing Customers From{" "}
                <span className="text-primary">Missed Calls</span>.
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-lg">
                When you can't answer the phone, your customer gets an instant text from your business. They stop searching Google. You get the job.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                  Setup Now
                </Link>
                <Link href="/services" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-base font-semibold shadow-sm hover:bg-muted transition-colors">
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border bg-card py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { stat: "80%", label: "of callers won't leave a voicemail" },
              { stat: "< 5s", label: "automated text response time" },
              { stat: "1 in 3", label: "missed calls becomes a booked job" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="py-4 sm:py-0 sm:px-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
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
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mt-2">
                {[
                  { icon: "📞", text: "You're on a job and can't pick up" },
                  { icon: "📵", text: "A customer calls your number" },
                  { icon: "🔇", text: "It rings out. No voicemail." },
                  { icon: "🔍", text: "They immediately call the next business on Google" },
                  { icon: "💸", text: "You lose the job — and probably that customer for life" },
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-foreground text-sm font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border shadow-xl">
                <div className="absolute -top-3 -right-3 bg-destructive text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg rotate-3">
                  Lost Revenue
                </div>
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-border">
                  <div className="h-12 w-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <PhoneMissed className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Missed Call</div>
                    <div className="text-muted-foreground text-sm">Today at 10:42 AM · 07712 345 678</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    No voicemail left
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    No text sent
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    Customer called 3 other businesses
                  </div>
                  <div className="mt-5 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                    <div className="text-sm text-destructive font-medium">Estimated job value lost: £350</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground text-xs">
                <span>With Scale Surge</span>
                <ArrowDown className="h-3 w-3 text-primary" />
              </div>

              <div className="relative p-6 rounded-2xl bg-card border border-primary/30 shadow-xl mt-3">
                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg rotate-3">
                  Job Booked
                </div>
                <div className="flex items-center gap-4 pb-5 mb-5 border-b border-border">
                  <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MessageSquareText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Auto-Text Sent</div>
                    <div className="text-muted-foreground text-sm">Today at 10:42 AM · 5 seconds later</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    Customer got an instant reply
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    They texted back with details
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    You replied on your lunch break
                  </div>
                  <div className="mt-5 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-sm text-primary font-medium">Job booked: Friday 9am · £350</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card border-y border-border">
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
              <motion.div key={i} variants={fadeIn} className="bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="flex flex-col gap-8">
              {[
                {
                  step: "01",
                  icon: Phone,
                  title: "A customer calls your number",
                  desc: "Call forwarding routes the call through our system invisibly. Nothing changes for the customer."
                },
                {
                  step: "02",
                  icon: PhoneMissed,
                  title: "Your phone rings for 20 seconds",
                  desc: "If you pick up, it's a completely normal call. Nothing else happens."
                },
                {
                  step: "03",
                  icon: MessageSquareText,
                  title: "Miss it? They get a text immediately",
                  desc: "The customer receives an automated text in seconds: \"Hi, I'm on a job right now. How can I help?\""
                },
                {
                  step: "04",
                  icon: TrendingUp,
                  title: "Their reply comes straight to your phone",
                  desc: "You reply when you're free and book the job. No app needed."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-5 items-start"
                >
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {i < 3 && <div className="w-px h-8 bg-border" />}
                  </div>
                  <div className="pt-1.5">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Step {item.step}</div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SmsMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Hampshire Trades.</h2>
            <p className="text-lg text-muted-foreground">If you run a service business and miss calls, you need this.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Plumbers', emoji: '🔧' },
              { name: 'Electricians', emoji: '⚡' },
              { name: 'Roofers', emoji: '🏠' },
              { name: 'Landscapers', emoji: '🌿' },
              { name: 'HVAC Engineers', emoji: '❄️' },
              { name: 'Builders', emoji: '🧱' },
              { name: 'Cleaners', emoji: '🧹' },
              { name: 'Decorators', emoji: '🖌️' },
            ].map((trade, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-5 py-3 rounded-full bg-background border border-border text-foreground font-medium flex items-center gap-2 hover:border-primary/50 transition-colors"
              >
                <span className="text-lg">{trade.emoji}</span>
                {trade.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Don't just take our word for it.</h2>
          <p className="text-center text-muted-foreground mb-16">We are currently collecting feedback from our first clients. These are coming soon.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mark T.", biz: "MT Plumbing & Heating", text: "I used to miss 3-4 calls a day on site. Now they get an instant text and I've booked extra jobs this month purely from the follow-up." },
              { name: "Sarah J.", biz: "SJ Electrical Services", text: "No complicated software, just a system that works in the background. My phone rings, and if I miss it the customer gets a text straight away. Brilliant." },
              { name: "Tom W.", biz: "Wessex Roofing", text: "It's like having someone answering the phone for me while I'm up on a roof. The customer replies, I get the message, I book the job. Simple." }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-between gap-6 opacity-50">
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
      <section className="py-24 bg-card border-y border-border">
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
                a: "Once we have your details, the system is typically live the same day. There's nothing for you to install or configure yourself."
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
              <div key={i} className="border border-border rounded-lg bg-background overflow-hidden">
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
