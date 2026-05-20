import { motion } from "framer-motion";
import { CheckCircle2, MapPin, User } from "lucide-react";

export function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 border-b border-border bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for Hampshire. <br/>Built for Trades.</h1>
          <p className="text-xl text-muted-foreground">
            We are not a tech company. We are a business growth company that happens to use tech.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold">The Scale Surge Story</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
                We kept seeing the same problem over and over in Hampshire's home service industry. Excellent tradespeople (plumbers, electricians, roofers) were incredibly busy on the tools, but their businesses weren't growing as fast as they should.
              </p>
              <p>
                Why? Because when you're under a sink or up a ladder, you can't answer the phone. And in 2024, a customer who gets voicemail doesn't leave a message. They just call the next person on Google.
              </p>
              <p className="text-foreground font-medium border-l-4 border-primary pl-4 my-6">
                "We don't do tech for the sake of tech. We do what gets your phone ringing and your jobs booked."
              </p>
              <p>
                Scale Surge was built to fix this specific leak in the bucket. We implement practical, no-nonsense automation that runs in the background. It catches the leads you miss, follows up with the quotes you send, and gets you more reviews, all without adding a single minute of admin to your evening.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-primary h-6 w-6" /> Local First
              </h3>
              <p className="text-muted-foreground mb-0">
                Based in Hampshire, we work primarily with local trades. We understand the local market, we speak your language, and we know exactly what your customers expect when they search for a local tradesperson.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "No BS", desc: "Straight talking, clear pricing, and no confusing tech jargon." },
                  { title: "Results over Features", desc: "If a system doesn't make you money or save you time, we don't build it." },
                  { title: "Zero Admin Added", desc: "Our systems run in the background. You focus on the tools, we handle the leads." }
                ].map((value, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block text-foreground mb-1">{value.title}</strong>
                      <span className="text-muted-foreground">{value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-8"
        >
          <div className="p-8 rounded-2xl bg-card border border-border flex flex-col sm:flex-row gap-8 items-start">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-2xl font-bold">Henry Lucas</h3>
                <p className="text-primary font-medium">Founder, Scale Surge</p>
              </div>
              <p className="text-muted-foreground text-lg">
                Henry started Scale Surge after seeing first-hand how many good local tradespeople were losing work simply because they couldn't pick up the phone on the job. His focus is simple: build systems that work quietly in the background so business owners can get on with the work they're actually good at.
              </p>
              <p className="text-muted-foreground">
                Based in Hampshire, Henry works directly with every client to make sure the setup is right, the messaging sounds like them, and the results are real.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}