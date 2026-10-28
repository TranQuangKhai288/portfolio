import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 w-9 h-9 flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border border-black/[0.08] dark:border-white/[0.08] hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
      aria-label="Scroll to Top"
      title="Return to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
