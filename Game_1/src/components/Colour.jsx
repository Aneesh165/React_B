import React, { useEffect, useState } from "react";
import axios from "axios";

const Colour = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const items = 10;

  const handlePage = (selectedpage) => {
    console.log(selectedpage);

    setPage(selectedpage);
  };

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pagination</h1>
      <div>
        <p>
          {data.slice((page - 1) * items, page * items).map((a) => (
            <li key={a.id}>{a.title}</li>
          ))}

          <button
            style={{
              width: "50px",
              backgroundColor: "gray",
              fontSize: "20px",
              borderRadius: "5px",
            }}
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
          >
            prev
          </button>
          {[...Array(data.length / items)].map((_, i) => (
            <span
              style={{
                padding: "5px",
                fontWeight: page === i + 1 ? "bold" : "normal",
                backgroundColor: page === i + 1 ? "black" : "transparent",
                color: page === i + 1 ? "white" : "black",
                cursor: "pointer",
              }}
              onClick={() => handlePage(i + 1)}
              key={i}
            >
              {" "}
              {i + 1}
            </span>
          ))}

          <button
            style={{
              width: "50px",
              backgroundColor: "gray",
              fontSize: "20px",
              borderRadius: "5px",
            }}
           
            onClick={() => handlePage(page + 1)}
            disabled={page === 10}
          >
            next
          </button>
        </p>
      </div>
    </div>
  );
};

export default Colour;
