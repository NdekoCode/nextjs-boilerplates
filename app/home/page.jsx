"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [tab, setTab] = useState([1, 2, 3]);
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
      </main>
    </>
  );
}
