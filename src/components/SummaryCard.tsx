import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  icon: ReactNode;
  variant?: "default" | "highlight";
  colors?: {
    cardBg?: string;
    title?: string;
    value?: string;
    iconBg?: string;
  };
};

export default function SummaryCard({
  title,
  value,
  icon,
  variant = "default",
  colors,
}: Props) {
  // Default Style
  const defaultStyle = {
    cardBg: "#4f506b",
    title: "#FFFFFF",
    value: "#FFFFFF",
    iconBg: "#d8a801",
  };

  const highlightStyle = {
    cardBg: colors?.cardBg || "#4f506b",
    title: colors?.title || "#E0E7FF",
    value: colors?.value || "#FFFFFF",
    iconBg: colors?.iconBg || "#4338CA",
  };

  const style = variant === "highlight" ? highlightStyle : defaultStyle;

  return (
    <div
      className="p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition-all justify-between"
      style={{ backgroundColor: style.cardBg }}
    >
      <div>
        <p className="text-sm" style={{ color: style.title }}>
          {title}
        </p>
        <p
          className="text-2xl font-semibold mt-1"
          style={{ color: style.value }}
        >
          {value}
        </p>
      </div>

      <div
        className="p-3 rounded-xl text-white text-2xl"
        style={{ backgroundColor: style.iconBg }}
      >
        {icon}
      </div>
    </div>
  );
}
