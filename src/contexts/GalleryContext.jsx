import { createContext, useContext, useState, useRef, useEffect } from "react";

const GalleryContext = createContext();

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};

export const GalleryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);
  const scrollYRef = useRef(0);

  const openGallery = (images = [], startIndex = 0) => {
    setActiveImages(images);
    setActiveIndex(startIndex);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setActiveImages([]);
    setActiveIndex(0);
  };

  const next = () => {
    setActiveIndex((i) => Math.min(i + 1, activeImages.length - 1));
  };

  const prev = () => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  };

  // Body scroll lock when modal is open (simple version - no position jumping)
  useEffect(() => {
    if (isOpen) {
      // Simply prevent scroll without changing position
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll active image into view in the horizontal gallery
  useEffect(() => {
    if (!galleryRef.current) return;
    const container = galleryRef.current;
    const child = container.children[activeIndex];
    if (child) {
      const left =
        child.offsetLeft - (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          closeGallery();
          break;
        case "ArrowLeft":
          prev();
          break;
        case "ArrowRight":
          next();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, activeImages.length]);

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

      {/* Global Modal Gallery */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-6xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              aria-label="Close gallery"
              onClick={closeGallery}
              className="absolute top-4 right-4 z-30 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Controls */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={next}
              disabled={activeIndex === activeImages.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="p-6">
              {/* Main image display */}
              <div className="h-72 md:h-96 lg:h-[500px] mb-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={activeImages[activeIndex]}
                  alt={`Demo ${activeIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Image counter */}
              <div className="text-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {activeIndex + 1} / {activeImages.length}
                </span>
              </div>

              {/* Thumbnail strip */}
              {activeImages.length > 1 && (
                <div
                  ref={galleryRef}
                  className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 py-2 px-1"
                  role="list"
                >
                  {activeImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex-none w-20 h-14 md:w-24 md:h-16 lg:w-32 lg:h-20 rounded overflow-hidden border-2 transition-all duration-200 ${
                        i === activeIndex
                          ? "border-blue-500 shadow-lg"
                          : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
};
