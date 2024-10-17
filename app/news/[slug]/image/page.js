import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  // nested routes inside of dynamic route will have access to that dynamic route parameter ([slug] parameter)
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
