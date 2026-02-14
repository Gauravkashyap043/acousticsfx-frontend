"use client";

type GetQuoteButtonProps = React.ComponentProps<"button">;

export default function GetQuoteButton({ className = "", ...props }: GetQuoteButtonProps) {
  return (
    <button
      className={`border border-white px-6 py-3 text-[16px] sm:text-[18px] poppins-font font-normal hover:bg-white hover:text-black transition ${className}`}
      {...props}
    >
      Get Quote →
    </button>
  );
}
