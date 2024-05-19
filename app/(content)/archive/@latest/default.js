import NewsList from "@/components/NewsList/NewsList";
import { getLatestNews } from "@/lib/news";

function LatestNewsPage() {
  const latesNews = getLatestNews();

  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={latesNews} />
    </>
  );
}

export default LatestNewsPage;
