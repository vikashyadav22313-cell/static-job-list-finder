import "./App.css";
import data from "../api/data.json";
import { useState } from "react";
import { Card } from "../component/card";
import { IoClose } from "react-icons/io5";
function App() {
  const [userCLick, setUserClick] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const handleClick = (value) => {
    if (!userCLick.includes(value)) {
      const updatedClick = [...userCLick, value];
      setUserClick(updatedClick);

      const filterTags = data.filter((item) => {
        const tags = [...item.languages, ...item.tools, item.role, item.level];
        return updatedClick.every((tag) => tags.includes(tag));
      });
      console.log(filterTags);
      setFiltered(filterTags);
    }
  };
  const handleRemove = (deleteItem) => {
    const updatedFilters = userCLick.filter((item) => item !== deleteItem);

    setUserClick(updatedFilters);

    const newFilteredData =
      updatedFilters.length === 0
        ? data
        : data.filter((item) => {
            const tags = [
              ...item.languages,
              ...item.tools,
              item.role,
              item.level,
            ];
            return updatedFilters.every((tag) => tags.includes(tag));
          });

    setFiltered(newFilteredData);
  };
  const handleDelete = () => {
    setUserClick([]);
    setFiltered(data);
  };
  return (
    <div className="container">
      <div role="banner">
        <img
          src="./images/bg-header-desktop.svg"
          alt=""
          className="banner-img"
        />
      </div>
      <main>
        <div className={`filters ${userCLick.length === 0 ? "hidden" : ""}`}>
          <div className="flex">
            {userCLick.map((item, index) => {
              return (
                <div className="filter-box" key={index}>
                  <span className="filter-option">{item}</span>
                  <IoClose
                    className="remove-filter"
                    onClick={() => handleRemove(item)}
                  />
                </div>
              );
            })}
          </div>
          <button className="clear" onClick={handleDelete}>
            Clear
          </button>
        </div>
        <ul className="job">
          {filtered.map((item) => {
            return (
              <Card
                key={item.id}
                item={item}
                handleClick={(value) => handleClick(value)}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
