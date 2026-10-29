import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { useCvModal } from "../contexts/CvContext";
import { Sun, Moon, ArrowUpRight, Menu, X, Command, Search, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Craft Lab", href: "#craft-lab" },
  { label: "Experience", href: "#experience" },
  { label: "Background", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const { openCvModal } = useCvModal();

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-white/85 dark:bg-black/80 backdrop-blur-2xl border-black/[0.08] dark:border-white/10 shadow-2xl"
              : "bg-white/70 dark:bg-black/60 backdrop-blur-xl border-black/[0.06] dark:border-white/10 shadow-lg"
          }`}
        >
          {/* Brand Station */}
          <a
            href="#hero"
            className="flex items-center gap-2 pl-1 pr-2 py-1 text-slate-900 dark:text-white transition-opacity hover:opacity-80"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-xs sm:text-sm tracking-tight">
              Khai Tran
            </span>
          </a>

          <div className="hidden sm:block w-[1px] h-3.5 bg-black/10 dark:bg-white/10" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:block w-[1px] h-3.5 bg-black/10 dark:bg-white/10" />

          {/* Tech Actions: Command Palette ⌘K & Theme */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/5 hover:bg-black/[0.06] dark:hover:bg-white/10 rounded-full hairline-border transition-colors cursor-pointer"
              title="Open Command Palette (⌘K)"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onContextMenu={(e) => {
                e.preventDefault();
                openCvModal();
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-sm ml-1 cursor-pointer"
              title="Chuột trái: mở CV chính · Chuột phải: chọn các phiên bản CV"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-white/95 dark:bg-black/95 backdrop-blur-2xl hairline-border shadow-2xl flex flex-col gap-4 text-center md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 hairline-t flex justify-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setCmdOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-neutral-400 bg-white/5 rounded-full hairline-border"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search & Quick Jump (⌘K)</span>
            </button>
          </div>
        </div>
      )}

      {/* Command Palette Modal (⌘K) */}
      {cmdOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#0F1015] border border-white/10 p-4 shadow-2xl space-y-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hairline-border">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search projects, architecture, or skills..."
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                autoFocus
              />
              <kbd className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-400">
                ESC
              </kbd>
            </div>

            <div className="space-y-1 text-xs">
              <div className="px-3 py-1 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                Flagship Projects
              </div>
              <a
                href="#work"
                onClick={() => setCmdOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="font-medium">ZenFlow Spa Booking Engine</span>
                </div>
                <span className="font-mono text-neutral-500 text-[11px]">Concurrency &amp; Redis</span>
              </a>
              <a
                href="#work"
                onClick={() => setCmdOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-medium">Cupid Real-Time Dating App</span>
                </div>
                <span className="font-mono text-neutral-500 text-[11px]">Cloudflare Edge</span>
              </a>
              <a
                href="#work"
                onClick={() => setCmdOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="font-medium">Tripdata Vietnam Analytics</span>
                </div>
                <span className="font-mono text-neutral-500 text-[11px]">15k+ Endpoints</span>
              </a>

              <div className="px-3 pt-3 pb-1 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                Quick Actions
              </div>
              <button
                type="button"
                onClick={() => {
                  setCmdOpen(false);
                  openCvModal();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left cursor-pointer"
              >
                <span>Select &amp; View All CV Profiles (Node.js / Fullstack / Frontend)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>
              <a
                href="mailto:dev.khaitran@gmail.com"
                onClick={() => setCmdOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <span>Send Direct Email</span>
                <span className="font-mono text-neutral-500 text-[11px]">dev.khaitran@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
