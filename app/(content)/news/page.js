import NewsList from "@/components/NewsList/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
  return (
    <>
      <h1>News Details Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
