"use client";

type GetQuoteButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "outline";
};

export default function GetQuoteButton({
  className = "",
  variant = "primary",
  ...props
}: GetQuoteButtonProps) {
  const base =
    "px-6 py-3 text-[16px] sm:text-[18px] poppins-font font-normal transition";
  const styles =
    variant === "outline"
      ? "border border-white hover:bg-white hover:text-black text-white"
      : "bg-[#EA8E39] text-white hover:bg-[#d97d2e] rounded";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      Get Quote →
    </button>
  );
}
