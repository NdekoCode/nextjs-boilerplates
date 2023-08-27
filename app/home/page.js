"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);
  const fetchData = async (url, setData) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    (async () => {
      await fetchData("https://jsonplaceholder.typicode.com/users", setData);
      setLoading(false);
    })();
  }, [loading]);
  const updateTab = (value = null) => {
    setTab((prevTab) => [...prevTab, !value ? Math.random() * 100 : value]);
  };
  useEffect(() => {
    console.log("Chargement...");
  }, [tab]);
  return (
    <>
      <main>
        <h1>Next.js boilerplate</h1>
        <p>
          <span className="inline-block w-5 h-5 material-icons-outlined"></span>
          <span className="material-icons-outlined">home</span>
        </p>
        <button className="btn btn-secondary" onClick={() => updateTab()}>
          Ajouter un element
        </button>
        {!loading && (
          <div className="container flex flex-wrap gap-2 mt-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="p-3 border border-gray-100 rounded-lg shadow-lg shadow-gray-50"
              >
                <h1>{item.name}</h1>
                <p>{item.email}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
