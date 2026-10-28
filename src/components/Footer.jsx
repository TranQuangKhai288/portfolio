import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="hairline-t py-12 bg-white dark:bg-[#000000] text-neutral-500 dark:text-[#86868B] text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side Info */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-neutral-900 dark:text-white font-medium">
            {personalInfo.name}
          </span>
          <span>·</span>
          <span>HCMC Local Time:</span>
          <span className="text-neutral-900 dark:text-neutral-200 tabular-nums">
            {time || "ICT (UTC+7)"}
          </span>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-6 text-[11px] text-neutral-400 dark:text-neutral-600 flex justify-between items-center">
        <span>Designed with Apple Minimal Luxury &amp; Rauno Craft principles · Tran Quang Khai © 2026</span>
        <span>Built with React 19 &amp; Vite 6</span>
      </div>
    </footer>
  );
};

export default Footer;
