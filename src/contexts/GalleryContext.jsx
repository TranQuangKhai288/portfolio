import { useState, useRef, useEffect, useCallback } from "react";
import { GalleryContext } from "./useGallery";

export const GalleryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);

  const openGallery = useCallback((images = [], startIndex = 0) => {
    if (!images || images.length === 0) return;
    setActiveImages(images);
    setActiveIndex(startIndex);
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
    setActiveImages([]);
    setActiveIndex(0);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => Math.min(i + 1, activeImages.length - 1));
  }, [activeImages.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!galleryRef.current) return;
    const container = galleryRef.current;
    const child = container.children[activeIndex];
    if (child) {
      const left = child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeIndex]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeGallery, prev, next]);

  return (
    <GalleryContext.Provider
      value={{
        isOpen,
        activeImages,
        activeIndex,
        openGallery,
        closeGallery,
        next,
        prev,
      }}
    >
      {children}

      {/* Screenshot Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image inspection gallery"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 backdrop-blur-md p-4 animate-in fade-in duration-150"
        >
          <div className="relative max-w-5xl w-full bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                  Verified Screenshot Inspection
                </span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 ml-2">
                  [{activeIndex + 1} of {activeImages.length}]
                </span>
              </div>

              <button
                type="button"
                aria-label="Close image viewer"
                onClick={closeGallery}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <i className="bx bx-x text-2xl" />
              </button>
            </div>

            {/* Main image viewer with side arrows */}
            <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-950/80 overflow-hidden">
              <button
                type="button"
                onClick={prev}
                disabled={activeIndex === 0}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-md border border-black/[0.08] dark:border-white/[0.08] text-zinc-800 dark:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <i className="bx bx-chevron-left text-2xl" />
              </button>

              <div className="max-h-[58vh] flex items-center justify-center">
                <img
                  src={activeImages[activeIndex]}
                  alt={`Project capture ${activeIndex + 1}`}
                  className="max-h-[58vh] max-w-full object-contain rounded-lg border border-black/[0.08] dark:border-white/[0.08]"
                />
              </div>

              <button
                type="button"
                onClick={next}
                disabled={activeIndex === activeImages.length - 1}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-md border border-black/[0.08] dark:border-white/[0.08] text-zinc-800 dark:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <i className="bx bx-chevron-right text-2xl" />
              </button>
            </div>

            {/* Thumbnail carousel */}
            {activeImages.length > 1 && (
              <div
                ref={galleryRef}
                className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-950 border-t border-black/[0.06] dark:border-white/[0.06] overflow-x-auto"
              >
                {activeImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-14 w-20 flex-shrink-0 rounded-md overflow-hidden border transition-all cursor-pointer ${
                      i === activeIndex
                        ? "border-emerald-500 ring-2 ring-emerald-500/20"
                        : "border-black/[0.08] dark:border-white/[0.08] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
};
