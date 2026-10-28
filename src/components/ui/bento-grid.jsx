import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "View Architecture",
  tags = [],
  metrics,
  children,
}) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        // Strict Design-Engineer hairline borders & surface
        "bg-white dark:bg-zinc-900/50",
        "border border-black/[0.08] dark:border-white/[0.08]",
        "hover:border-black/20 dark:hover:border-white/20",
        "transition-all duration-200 ease-out",
        className
      )}
    >
      {/* Background Graphic / Blueprint Layer */}
      {background && (
        <div className="relative w-full overflow-hidden border-b border-black/[0.06] dark:border-white/[0.06]">
          {background}
        </div>
      )}

      {/* Main Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Header Row: Icon, Metrics Badge, Arrow */}
          <div className="flex items-center justify-between gap-2 mb-3">
            {Icon && (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-zinc-100 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200">
                <Icon className="h-4 w-4" />
              </div>
            )}
            {metrics && (
              <span className="font-mono text-xs tabular-nums px-2.5 py-1 rounded border border-black/[0.06] dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                {metrics}
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1.5">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {description}
          </p>

          {/* Tech stack tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-black/[0.05] dark:border-white/[0.06] bg-zinc-100/70 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {children}
        </div>

        {/* Footer Link / CTA */}
        {href && (
          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
            <a
              href={href}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
            >
              <span>{cta}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoGrid;

