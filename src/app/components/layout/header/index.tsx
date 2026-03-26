"use client";

import Logo from "../logo";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Work", id: "work" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <header className="navbar top-0 left-0 z-50 w-full sticky bg-gradient-to-r from-sky-700 via-blue-500 to-indigo-600 shadow-[0_8px_30px_rgba(7,89,133,0.35)] border-b border-white/20">
            <div className="container">
                <nav className="py-4 md:py-5">
                    <div className="flex items-center justify-between gap-4 sm:gap-8">
                        <div className="flex items-center gap-3">
                            <Logo />
                            <div className="hidden md:block text-white font-extrabold text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 to-indigo-100 drop-shadow-lg">
                                Udhayan
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.id);
                                    }}
                                    className="relative px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full hover:bg-white/20 group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-orange-400 transition-all duration-300 transform -translate-x-1/2 group-hover:w-8"></span>
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden cursor-pointer btn-cta py-2 px-5 rounded-full border border-orange-400 bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg shadow-orange-500/25"
                        >
                            Download Resume
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
