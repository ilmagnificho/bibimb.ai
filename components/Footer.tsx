export default function Footer() {
  return (
    <footer className="bg-text-primary text-bg py-12">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="font-display font-bold text-lg mb-2">Bibimb.ai</p>
        <p className="text-sm text-bg/60 mb-4">Built with 🌶️ in Seoul</p>
        <p className="text-xs text-bg/40">
          © 2026 Bibimb.ai
          {" · "}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bg/80 transition-colors"
          >
            Twitter/X
          </a>
          {" · "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bg/80 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
