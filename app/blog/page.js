"use client";
import Link from "next/link";
import useAppContext from "../context/AppContext";
export default function Blog() {
  const { articles, loading } = useAppContext();
  console.log(articles);
  return (
    <main>
      <h1>Mon blog</h1>

      {!loading && (
        <div className="container flex flex-wrap gap-2 mt-5">
          {articles.map((item, index) => (
            <div
              key={index}
              className="relative p-3 border border-gray-100 rounded-lg shadow-lg shadow-gray-50"
            >
              <h1 className="mb-3 text-xl font-bold text-gray-700">
                {item.title}
              </h1>
              <p>{item.body}</p>
              <Link
                href={`/blog/${item.id}`}
                className="absolute inset-0 opacity-0"
              ></Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
