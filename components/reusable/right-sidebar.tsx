export function RightSidebar({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="w-1/3 h-screen p-4 px-6 border-l sticky top-0 self-start">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Quick Links</h2>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-gray-500 hover:text-gray-800">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
