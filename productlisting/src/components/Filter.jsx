import React from "react";

const Filter = ({ setCategory, setSearch }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
};

export default Filter;