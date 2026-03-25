"use client";

/** Renders a product or sub-product name with optional ™ when enabled in the admin. */
export default function TrademarkTitle({
  title,
  showTrademark,
  className,
}: {
  title: string;
  showTrademark?: boolean;
  className?: string;
}) {
  if (!showTrademark) {
    return <span className={className}>{title}</span>;
  }
  return (
    <span className={className}>
      {title}
      <sup className="text-[0.45em] font-normal align-super ml-px">™</sup>
    </span>
  );
}
