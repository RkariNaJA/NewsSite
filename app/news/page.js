// "use client";
// import { useEffect, useState } from "react";

// client side
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState();
// const [news, setNews] = useState();
// useEffect(() => {
//   setIsLoading(true);
//   async function fetchNews() {
//     const response = await fetch("http://localhost:8080/news"); // loading data from backend

//     if (!response.ok) {
//       setError("Failed to fatch news.");
//       setIsLoading(false);
//     }
//     const news = await response.json(); //Retrive news from the backend
//     setIsLoading(false);
//     setNews(news);
//   }
//   fetchNews();
// }, []);

// if (isLoading) {
//   return <p>Loading....</p>;
// }
// if (error) {
//   return <p>{error}</p>;
// }

// doing inside of react server component
// const response = await fetch("http://localhost:8080/news"); // fetch data directly on the server inside the component function

// if (!response.ok) {
//   throw new Error("Failed to fetch news.");
// }
// const news = await response.json(); //Retrive news from the backend

// if own the database
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
