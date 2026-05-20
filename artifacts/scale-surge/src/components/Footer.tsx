import { Link } from "wouter";
import { Zap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">Scale Surge</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The growth partner for trades businesses in Hampshire. We build simple automation that keeps jobs coming in without adding admin.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-primary transition-colors">Missed Call Text Back</Link>
              <Link href="/services" className="hover:text-primary transition-colors">AI Lead Response</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Lead Capture</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Workflow Automation</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Hampshire, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>01962 123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@scalesurge.co.uk</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Scale Surge. All rights reserved.</p>
          <p>Built for Hampshire Trades.</p>
        </div>
      </div>
    </footer>
  );
}