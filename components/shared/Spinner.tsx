interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-6 w-6 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-10 w-10 border-4',
};

export default function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  return (
    <div
      className={`rounded-full border-gray-200 border-t-blue-600 animate-spin ${sizes[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}
