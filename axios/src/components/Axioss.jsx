import  { useEffect, useState } from "react";
import axios from "axios";

function Axioss() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setDatas(res.data);
    });
  }, []);

  return (
    <div>
      Axios
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e2e2e2" }}>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "12px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              ID
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "12px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              User ID
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "12px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Title
            </th>
            <th
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "12px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          {datas.map((value, index) => (
            <tr
              key={value.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e2e2e2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#f9f9f9" : "#ffffff")
              }
            >
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "12px",
                  color: "#555",
                }}
              >
                {value.id}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "12px",
                  color: "#555",
                }}
              >
                {value.userId}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "12px",
                  color: "#555",
                }}
              >
                {value.title}
              </td>
              <td
                style={{
                  border: "1px solid #dddddd",
                  padding: "12px",
                  color: "#555",
                }}
              >
                {value.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Axioss;
