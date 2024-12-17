import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      navigate(`/search/${searchInput}`);
    }
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          borderRadius: "20px",
          padding: "5px 10px",
          fontSize: "0.875rem",
          marginRight: "5px",
        }}
      />
      <Button 
        onClick={handleSearch}
        style={{
          borderRadius: "20px",
          padding: "5px 15px",
          fontSize: "0.875rem",
          backgroundColor: "#074799",
          borderColor: "#074799",
          color: "white",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#053b80")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#074799")}
      >
        <FaSearch />
      </Button>
    </Form>
  );
};

export default SearchBar;
