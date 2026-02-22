import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display font-bold text-[17px] text-text-primary hover:text-primary transition-colors">
              🍚 Bibimb.ai
            </Link>
            <p className="text-sm text-text-secondary mt-2 max-w-[260px] leading-relaxed">
              Where AI agent creators come to earn — one bowl at a time.
            </p>
            <p className="text-xs text-text-secondary/50 mt-3">Built with 🌶️ in Seoul</p>
          </div>

          {/* Links */}
          <div className="flex gap-10 sm:gap-14">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-3">Product</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><Link href="/#how-it-works" className="hover:text-text-primary transition-colors">How it works</Link></li>
                <li><Link href="/#demo" className="hover:text-text-primary transition-colors">Pricing demo</Link></li>
                <li><Link href="/#community" className="hover:text-text-primary transition-colors">Community</Link></li>
                <li><Link href="/#waitlist" className="hover:text-text-primary transition-colors">Join waitlist</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-3">Company</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><Link href="/about" className="hover:text-text-primary transition-colors">About</Link></li>
                <li><a href="mailto:info@tetracorp.co.kr" className="hover:text-text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/40 mb-3">Legal</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary/50">© 2026 Bibimb.ai · Tetra Corporation. All rights reserved.</p>
          <p className="text-xs text-text-secondary/35">The pricing demo is a simulation only. No real purchases are processed.</p>
        </div>
      </div>
    </footer>
  );
}
