interface CardInfoProps {
  header: string;
  subheader: string;
  children: React.ReactNode;
}
export const CardInfo: React.FC<CardInfoProps> = ({
  header,
  subheader,
  children,
}) => {
  return (
    <div className="flex flex-col p-4 shadow-md border rounded-xl gap-3">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {header && <span className="text-base font-bold">{header}</span>}
          {subheader && (
            <span className="text-sm text-primary">{subheader}</span>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
