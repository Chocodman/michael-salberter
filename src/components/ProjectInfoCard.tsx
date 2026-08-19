import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectInfoCardProps {
  title: string;
  year: string;
  role: string;
  client: string;
  disciplines: string[];
  formatOutput: string;
  overviewTitle?: string;
  overview: string;
  concept?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({
  title,
  year,
  role,
  client,
  disciplines,
  formatOutput,
  overviewTitle = 'PROJECT OVERVIEW',
  overview,
  concept,
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`w-full p-6 md:p-8 bg-[#EAE8E0]/70 border border-[#D9D7D1] ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Technical Metadata Grid (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              PROJECT
            </div>
            <div className="font-display font-bold text-base text-[#0A0A0A] uppercase">
              {title}
            </div>
          </div>

          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              YEAR
            </div>
            <div className="font-mono-custom font-semibold text-sm text-[#0A0A0A]">
              {year}
            </div>
          </div>

          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              ROLE
            </div>
            <div className="font-mono-custom text-xs text-[#0A0A0A] font-medium leading-relaxed">
              {role}
            </div>
          </div>

          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              CLIENT
            </div>
            <div className="font-mono-custom text-xs text-[#0A0A0A] font-medium leading-relaxed">
              {client}
            </div>
          </div>

          <div className="col-span-2">
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              DISCIPLINES
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono-custom text-[11px] uppercase text-[#0A0A0A]">
              {disciplines.map((cat, i) => (
                <span key={i} className="bg-white/80 border border-[#D9D7D1] px-2 py-0.5">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
              FORMAT / OUTPUT
            </div>
            <div className="font-mono-custom text-xs text-[#0A0A0A]/80 leading-relaxed">
              {formatOutput}
            </div>
          </div>
        </div>

        {/* Right Contextual Narrative (5 cols) */}
        <div className="md:col-span-5 md:pl-6 md:border-l md:border-[#D9D7D1] flex flex-col justify-between h-full">
          <div>
            <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#5B2EFF] mb-2 font-semibold">
              {overviewTitle}
            </div>
            <p className="font-sans text-sm text-[#0A0A0A]/85 leading-relaxed">
              {overview}
            </p>
            {concept && (
              <p className="font-sans text-xs text-[#0A0A0A]/70 leading-relaxed mt-3">
                {concept}
              </p>
            )}
          </div>

          {actionText && onAction && (
            <div className="mt-6 pt-4 border-t border-[#D9D7D1]">
              <button
                onClick={onAction}
                data-cursor="project"
                data-cursor-text="VIEW →"
                className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider text-[#0A0A0A] font-semibold hover:text-[#5B2EFF] transition-colors"
              >
                <span>{actionText}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
