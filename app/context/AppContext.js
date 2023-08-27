"use client";
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AppContext = createContext();
export const AppContextProvider = memo(({ children }) => {
  const [blogData, setBlogData] = useState({
    articles: [],
    categories: [],
    users: [],
  });
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchArticle = async (url, setData) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    (async () => {
      try {
        await fetchArticle(
          "https://jsonplaceholder.typicode.com/posts",
          setArticles
        );
        setLoading(false);
        setBlogData((d) => ({ ...d, articles: articles }));
        console.log(articles);
      } catch (e) {
        setLoading(false);
        console.error(e.message);
      }
    })();
  }, [loading]);
  const value = useMemo(
    () => ({ blogData, setBlogData, articles, setArticles }),
    [articles, setArticles]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
});
const useAppContext = () => useContext(AppContext);
export default useAppContext;
