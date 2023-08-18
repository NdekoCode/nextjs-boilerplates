import Link from "next/link";

export default function Navbar() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/cv", name: "Cv" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg shadow-gray-100 ">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="text-gray-800  border-b-2 border-transparent active:border-blue-500 mx-1.5 sm:mx-6"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
