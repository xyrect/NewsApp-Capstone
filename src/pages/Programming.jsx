import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import LineSeparator from "../components/LineSeparator"

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const defaultImage = "https://via.placeholder.com/300x200?text=No+Image+Available";

  
  const fetchTopStories = async (category = "home") => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`
      );

      const fetchedArticles = data.results.map((article) => ({
        id: article.url, 
        title: article.title,
        url: article.url,
        author: article.byline || "Unknown",
        abstract: article.abstract || "No description available",
        img: article.multimedia && article.multimedia.length > 0
          ? article.multimedia[0].url
          : defaultImage,
      }));

      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching top stories:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchTopStories();
  }, [apiKey]);

  return (
    <div className="container mt-4">
      <PageHeader
        title="Welcome to NewsSphere"
        subtitle="All the news you need, all in one place"
      />

      <LineSeparator />

      <div className="row">
        {loading ? (
          <Loading />
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Home;
