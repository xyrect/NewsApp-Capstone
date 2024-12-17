import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import img from "../assets/img.jpg"
import EmptyState from "../components/EmptyState";
import LineSeparator from "../components/LineSeparator"


const Indo = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const defaultImage = img;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesia&api-key=${apiKey}`
        );

        const fetchedArticles = data.response.docs.map((article) => ({
          id: article._id,
          title: article.headline.main,
          url: article.web_url,
          author: article.byline?.original || "Unknown",
          abstract: article.abstract || "No description available",
          img: article.multimedia && article.multimedia.length > 0
            ? `https://static01.nyt.com/${article.multimedia[0].url}`
            : defaultImage,
        }));

        setArticles(fetchedArticles);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false); 
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="container mt-4">
      <PageHeader
        title="Indonesia News"
        subtitle="Stay updated with the latest news from Indonesia"
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

export default Indo;
