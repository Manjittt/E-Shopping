import React from "react";
import Layout from "../components/layout/Layout";
import { useSearch } from "../context/SearchContext";

const SearchPage = () => {
  const { search } = useSearch();

  return (
    <Layout title={"Search Results - E-commerce App"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {!Array.isArray(search.results) || search.results.length < 1
              ? "No Product Found"
              : `Found ${search.results.length} product(s)`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {search.results?.map((p) => (
              <div className="card m-2" style={{ width: "19rem" }} key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body ">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">${p.price}</p>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
