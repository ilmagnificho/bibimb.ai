export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-[15px] text-text-primary">Bibimb.ai</span>
        <p className="text-sm text-text-secondary">Built with 🌶️ in Seoul · © 2026</p>
        <div className="flex items-center gap-5 text-sm text-text-secondary">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
