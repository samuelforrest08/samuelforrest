const links = [
  { label: "linkedin", href: "#" },
  { label: "github", href: "#" },
  { label: "youtube", href: "#" },
  { label: "email", href: "#" },
];

export function AboutLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 font-mono text-sm text-neutral-400">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-100 transition-colors inline-flex items-center gap-1"
        >
          <span>↗</span>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
