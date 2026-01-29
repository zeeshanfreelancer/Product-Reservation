export default function Badge({ children, variant = 'default', icon }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0';
  
  const variantClasses = {
    default: 'border-gray-200 bg-white',
    success: 'border-transparent bg-green-600 text-white',
    error: 'border-transparent bg-red-600 text-white',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}