import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Loading from "./Loading";

function CarouselFadeExample() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(function () {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
        );
        const data = await response.json();

        const articlesList = data.results.map(function (article) {
          return {
            title: article.title,
            abstract: article.abstract,
            url: article.url,
            multimedia: article.multimedia?.[0]?.url || "https://via.placeholder.com/800x400",
          };
        });

        setArticles(articlesList);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) return <Loading />;
  if (articles.length === 0) return <p className="text-center mt-4">No news available</p>;

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
  };

  const carouselCaptionStyle = {
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
    color: "white",
    padding: "10px",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    textAlign: "center",
  };

  return (
    <Carousel fade interval={5000} indicators={false} prevIcon={null} nextIcon={null} className="mb-4">
      {articles.map(function (article, index) {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={article.multimedia}
              alt={article.title}
              style={imageStyle}
            />
            <Carousel.Caption style={carouselCaptionStyle}>
              <h6 className="text-truncate">{article.title}</h6>
              <p className="small d-none d-md-block">{article.abstract}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light mt-2"
              >
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselFadeExample;
