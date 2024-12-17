import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveArticle, removeArticle, selectSaved } from "../app/feattures/newsSlice";
import { Card, Button } from "react-bootstrap";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const savedArticles = useSelector(selectSaved);
  const isSaved = savedArticles.some((a) => a.url === article.url);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeArticle(article));
    } else {
      dispatch(saveArticle(article));
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 p-3">
      <Card
        className="mb-3"
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
      >
        <img
          src={article.img}
          alt={article.title}
          className="card-img-top"
          style={{
            objectFit: "cover",
            height: "200px",
          }}
        />
        <Card.Body className="d-flex flex-column">
          <small
            className="fst-italic"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
              maxWidth: "100%",
            }}
          >
            {article.author || "Unknown"}
          </small>
          <Card.Title
            style={{
              marginTop: "1rem",
              height: "2rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight: "bold",
            }}
          >
            {article.title}
          </Card.Title>
          <Card.Text
            style={{
              height: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
            }}
          >
            <small>{article.abstract || "No description available"}</small>
          </Card.Text>
          <div
            className="d-flex align-items-center justify-content-between mt-auto"
            style={{ gap: "10px" }}
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "blue",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Read More
            </a>
            <Button
              onClick={handleSave}
              variant="link"
              className="p-0"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isSaved ? "#1B1833" : "gray",
                fontSize: "2rem",
              }}
            >
              {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
