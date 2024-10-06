interface BoxProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function Box({ title, children }: BoxProps) {
  return (
    <div className="p-4 md:p-5 rounded-xl box-shadow space-y-5 h-full">
      {title && <h2 className="font-bold text-lg">{title}</h2>}
      {children}
    </div>
  );
}
