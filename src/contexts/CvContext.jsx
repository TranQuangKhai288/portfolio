import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { cvVersions } from "../data/portfolioData";
import { FileText, ArrowUpRight, Download, X, Layers, Sparkles, MousePointer } from "lucide-react";

const CvContext = createContext({
  isOpen: false,
  openCvModal: () => {},
  closeCvModal: () => {},
});

export const useCvModal = () => useContext(CvContext);

export const CvProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCvModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCvModal = useCallback(() => {
    setIsOpen(false);
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

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeCvModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCvModal]);

  return (
    <CvContext.Provider value={{ isOpen, openCvModal, closeCvModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeCvModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0D0E12] border border-neutral-200/80 dark:border-white/10 p-5 md:p-7 shadow-2xl space-y-5 text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-neutral-200/80 dark:border-white/10">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
                  <Layers className="w-3 h-3" />
                  <span>CV Profiles · Phiên bản hồ sơ</span>
                </div>
                <h3 id="cv-modal-title" className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  Chọn phiên bản CV để xem
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Kích hoạt từ phím tắt chuột phải. Chọn phiên bản hồ sơ HTML phù hợp với vị trí ứng tuyển:
                </p>
              </div>

              <button
                type="button"
                onClick={closeCvModal}
                className="p-2 rounded-full text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Đóng bảng chọn CV"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of CVs */}
            <div className="space-y-3">
              {cvVersions.map((cv) => (
                <div
                  key={cv.id}
                  className={`group relative rounded-2xl p-4 md:p-5 border transition-all duration-200 ${
                    cv.isPrimary
                      ? "border-emerald-500/40 dark:border-emerald-400/30 bg-emerald-500/[0.04] dark:bg-emerald-400/[0.03] hover:border-emerald-500"
                      : "border-neutral-200 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] hover:border-neutral-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-sm md:text-base text-neutral-900 dark:text-white">
                          {cv.title}
                        </span>
                        {cv.badge && (
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                              cv.isPrimary
                                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
                                : "bg-neutral-200/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300"
                            }`}
                          >
                            {cv.isPrimary && <Sparkles className="w-2.5 h-2.5" />}
                            <span>{cv.badge}</span>
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                        {cv.roleFocus}
                      </div>

                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {cv.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 md:pt-0 shrink-0">
                      <a
                        href={cv.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-all shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Xem HTML</span>
                        <ArrowUpRight className="w-3 h-3 opacity-70" />
                      </a>

                      {cv.pdfUrl && (
                        <a
                          href={cv.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-neutral-700 dark:text-neutral-300"
                          title="Tải bản PDF in chuẩn A4"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer / Hint */}
            <div className="pt-2 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
              <div className="inline-flex items-center gap-1.5">
                <MousePointer className="w-3 h-3 text-blue-500" />
                <span>
                  <strong>Chuột trái:</strong> Mở bản mới nhất · <strong>Chuột phải:</strong> Mở lại danh sách này
                </span>
              </div>
              <span className="font-mono text-[10px] hidden sm:inline-block">Nhấn ESC để đóng</span>
            </div>
          </div>
        </div>
      )}
    </CvContext.Provider>
  );
};

