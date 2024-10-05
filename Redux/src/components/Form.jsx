import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name && !data.text) {
      alert("feilds are empty");
    } else {
      // Assign a unique ID to the new entry using Date.now()
      const newData = { ...data, id: Date.now() };
      setList((prev) => [...prev, newData]);
      setData({}); // Reset the form after submission
      console.log(list);
    }
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRemove = (id) => {
    setList((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-80 flex flex-col gap-4 p-10 items-center bg-stone-100"
      >
        <div className="flex gap-2">
          <label htmlFor="">Name :</label>
          <input
            name="Name"
            type="text"
            onChange={handleChange}
            placeholder="Enter the name"
            value={data.Name || ""}
          />
          
        </div>
        <div className="flex gap-4">
          <label htmlFor="">Text :</label>
          <input
            name="text"
            onChange={handleChange}
            type="text"
            placeholder=" Enter the text"
            value={data.text || ""}
          />
        </div>
        <button
          type="submit"
          className="w-28 py-1 text-md mt-6  bg-black text-white rounded-lg"
        >
          submit
        </button>
      </form>
      <table className="w-80">
        <tbody className="flex flex-col gap-5">
          {list.map((a) => (
            <tr className="flex justify-between" key={a.id}>
              <span>
                {a.Name}: {a.text}
              </span>
              <button
                onClick={() => handleRemove(a.id)}
                className="w-20 bg-stone-500 rounded-lg"
              >
                delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
