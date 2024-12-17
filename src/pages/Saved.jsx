import React from 'react';
import { useSelector } from 'react-redux';
import { selectSaved } from '../app/feattures/newsSlice';
import NewsCard from '../components/NewsCard';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import LineSeparator from '../components/LineSeparator';

const Saved = () => {
  const savedArticles = useSelector(selectSaved);

  return (
    <div className="container mt-4">
      <PageHeader
        title="Save News"
        subtitle="Easily access your saved articles and revisit the stories you love"
      />

      <LineSeparator />

      <div className="row">
        {savedArticles.length > 0 ? (
          savedArticles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))
        ) : (
          <div className="flex items-center justify-center min-h-screen mt-5">
            <p className="text-center fst-italic">
              You haven't saved any articles or news yet!<br />
              <Link to="/" className="text-black font-bold underline">
                Search News
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
