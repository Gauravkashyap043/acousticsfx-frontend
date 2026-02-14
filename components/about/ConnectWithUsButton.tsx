"use client";

type ConnectWithUsButtonProps = React.ComponentProps<"button">;

export default function ConnectWithUsButton({ className = "", ...props }: ConnectWithUsButtonProps) {
  return (
    <button
      className={`bg-orange-500 px-6 py-3 text-[16px] sm:text-[18px] poppins-font font-normal hover:bg-orange-600 transition ${className}`}
      {...props}
    >
      Connect With Us →
    </button>
  );
}
