interface Info {
  label: string;
  value: string | number | JSX.Element;
  valueClassName?: string;
}

interface InfoTableProps {
  name: string;
  items: Info[];
}

export default function InfoTable({ name, items = [] }: InfoTableProps) {
  return (
    <table className="info-table text-sm">
      <tbody>
        {items?.map((item: Info, index: number) => (
          <tr key={`${name}-${index}`}>
            <td>{item?.label}</td>
            <td className={item.valueClassName}>{item?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
