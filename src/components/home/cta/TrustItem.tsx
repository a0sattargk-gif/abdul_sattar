interface TrustItemProps {
  text: string;
}

export default function TrustItem({ text }: TrustItemProps) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid size-6 place-items-center rounded-full bg-emerald-brand-500 text-xs font-bold text-navy-950">
        ✓
      </span>

      <span className="text-cool-gray-200">{text}</span>
    </li>
  );
}
