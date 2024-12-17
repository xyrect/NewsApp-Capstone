import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import defaultImage from "../assets/newsplaceholder.jpeg"
import PageHeader from "../components/PageHeader";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import LineSeparator from "../components/LineSeparator"

const SearchResults = () => {
  const { query } = useParams(); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
        );
        const fetchedArticles = data.response.docs.map((article) => ({
          id: article._id,
          title: article.headline.main,
          author: article.byline?.original || "Unknown",
          abstract: article.abstract || "No description available",
          url: article.web_url,
          img: article.multimedia?.[0]?.url
            ? `https://static01.nyt.com/${article.multimedia[0].url}`
            : defaultImage,
        }));
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query]); 

  if (loading) return <Loading />

  return (
    <div className="container mt-4">
      <PageHeader
        title={`Search Results for: "${query}"`}
        subtitle="Discover the best matches for your search"
      />

      <LineSeparator />

      {articles.length > 0 ? (
        <div className="row">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default SearchResults;
