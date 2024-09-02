export default function Button({ className, children, ...props }) {
  return (
    <button
      className={`p-2 text-slate-200 bg-slate-600 rounded active:bg-slate-800 
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
