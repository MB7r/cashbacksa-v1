export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-6 text-sm text-gray-600">
        {[
          { label: "من نحن", href: "/about" },
          { label: "اتصل بنا", href: "/contact" },
          { label: "الشروط", href: "/terms" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="transition duration-200 hover:text-green-600 hover:scale-105"
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
