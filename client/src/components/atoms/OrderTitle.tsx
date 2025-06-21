export default function OrderTitle({ title }: { title: string }) {
  return (
    <div>
      <p className="mb-2 font-medium">{title}</p>
      <hr />
    </div>
  );
}
