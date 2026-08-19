import React, { useState } from 'react';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { moreWorkData } from '../data/projectsData';
import { MoreWorkItem } from '../types';

interface MoreWorkSectionProps {
  onSelectProject: (item: MoreWorkItem) => void;
}

export const MoreWorkSection: React.FC<MoreWorkSectionProps> = ({ onSelectProject }) => {
  const [hoveredItem, setHoveredItem] = useState<MoreWorkItem | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      <div className="pt-10 border-t border-[#D9D7D1]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-2">
              INDEX / SECONDARY ARCHIVE
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#0A0A0A] uppercase leading-none">
              MORE WORK
            </h2>
          </div>
          <div className="font-mono-custom text-[11px] uppercase text-[#0A0A0A]/60">
            [4 SELECTED ADDITIONAL PROJECTS]
          </div>
        </div>

        {/* Compact 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreWorkData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectProject(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              data-cursor="project"
              data-cursor-text="PREVIEW →"
              className="group cursor-pointer border border-[#D9D7D1] bg-[#F8F7F4] p-4 flex flex-col justify-between transition-all duration-300 hover:border-[#0A0A0A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Thumbnail Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E2E0D8] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2 left-2 bg-[#0A0A0A]/90 text-white font-mono-custom text-[9px] px-2 py-0.5 uppercase tracking-wider">
                  0{index + 1}
                </div>
              </div>

              {/* Title & Details */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="font-mono-custom text-[10px] uppercase text-[#5B2EFF] font-semibold mb-1">
                    {item.category}
                  </div>
                  <h4 className="font-display font-bold text-base md:text-lg tracking-tight text-[#0A0A0A] uppercase group-hover:text-[#5B2EFF] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-mono-custom text-[10px] uppercase text-[#0A0A0A]/60 mt-2 leading-relaxed line-clamp-2">
                    {item.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9D7D1] flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]/70">
                  <span>{item.year}</span>
                  <span className="inline-flex items-center gap-1 font-semibold group-hover:text-[#5B2EFF]">
                    VIEW <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
