import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
const logoSvg = `${import.meta.env.BASE_URL}logo.svg`;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoSvg} alt="" className="h-9 w-auto" />
              <span className="font-bold text-lg tracking-tight text-foreground">Scale Surge</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The growth partner for trades businesses in Hampshire. We build simple automation that keeps jobs coming in without adding admin.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-primary transition-colors">Missed Call Text Back</Link>
              <span className="text-muted-foreground/50">More coming soon</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=6e25044b-7ace-4d25-8df9-d6c082d02cc8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=408eb457-4a75-424e-9313-59a9d8e8884b" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0c482b6a-de91-4ceb-bb23-d9ef088615a9" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Winchester, Hampshire, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>WIP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>henrylucas@scalesurge.co.uk</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Scale Surge Limited. All rights reserved.</p>
          <p>Built for Hampshire Trades.</p>
        </div>
      </div>
    </footer>
  );
}