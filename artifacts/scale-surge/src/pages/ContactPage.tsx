import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  businessName: z.string().min(2, { message: "Business name is required." }),
  phone: z.string().min(10, { message: "Valid phone number is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  message: z.string().optional(),
});

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 border-b border-border bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's plug the leak.</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch to see how our systems can start capturing your missed calls and booking more jobs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
              <p className="text-muted-foreground mb-8">
                Ready to stop losing customers to competitors? Reach out directly or fill out the form. We respond quickly.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Call Us</div>
                    <div className="font-bold text-lg">01962 123456</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Email Us</div>
                    <div className="font-bold text-lg">hello@scalesurge.co.uk</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Location</div>
                    <div className="font-bold text-lg">Hampshire, UK</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border p-8 md:p-10 rounded-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Request Received</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thanks for reaching out. We'll be in touch shortly to discuss how we can help your business grow.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Smith Plumbing Ltd" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="07123 456789" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-background" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us a bit about your current situation..." 
                              className="min-h-[120px] bg-background"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full font-bold text-base h-14">
                      Submit Details
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}