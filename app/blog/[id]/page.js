"use client";
import { useParams } from "next/navigation";

async function getServerSideProps(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function Single() {
  const params = useParams();
  const { id } = params;
  const post = await getServerSideProps(id);
  console.log(post);
  return (
    <main>
      {post && (
        <div>
          <h1 className="mb-3 text-xl font-bold text-gray-700">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </main>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return { paths, fallback: false };
}
