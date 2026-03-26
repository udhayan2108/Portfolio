import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-300 max-w-sm">
              I am a college student building professional-grade web and mobile
              experiences. Let us build something amazing together.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-orange-400 transition">Skills</a></li>
              <li><a href="#work" className="hover:text-orange-400 transition">Works</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-slate-300">Email: udhayan.b@example.com</p>
            <p className="text-sm text-slate-300">Phone: +91 98765 43210</p>
            <div className="mt-3 flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-slate-700 hover:bg-orange-500 transition">
                <span>Li</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-slate-700 hover:bg-orange-500 transition">
                <span>Gh</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-slate-700 hover:bg-orange-500 transition">
                <span>Tw</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Udhayan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
