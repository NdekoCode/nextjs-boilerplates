import HomePage from "./home/page";

export const metadata = {
  title: "Acceuil",
  description: "My home page",
};
export default function Home() {
  console.log("Loading Home");

  return <HomePage />;
}
