import NewsList from "@/components/NewsList/NewsList";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch News");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Details Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
