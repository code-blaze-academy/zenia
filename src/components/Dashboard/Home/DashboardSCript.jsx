import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState(getMenuItems);
  const [sceneCount, setSceneCount] = useState(getSavedCounts);

  // fuction get menu items
  function getMenuItems() {
    const savedMenus = JSON.parse(localStorage.getItem("menuItems"));
    return (
      savedMenus || [
        { name: "Home", type: "static" },
        { name: "About", type: "static" },
        { name: "Contact", type: "static" },
      ]
    );
  }

  function getSavedCounts() {
    const savedSceneCount = parseInt(localStorage.getItem("sceneCount"), 10);
    // if (!isNaN(savedSceneCount)) {
    //   return savedSceneCount;
    // }
    return savedSceneCount || 0;
  }

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
    localStorage.setItem("sceneCount", sceneCount.toString());
  }, [menuItems, sceneCount]);

  const addFile = (title) => {
    setSceneCount((prevCount) => prevCount + 1);
    setMenuItems((prevItems) => [
      ...prevItems,
      { name: title || `New Scene`, type: "scene", id: sceneCount },
    ]);
  };

  // console.log(menuItems);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.type === "scene" ? (
                <Link to={`/scene/${item.id}`}>{item?.name}</Link>
              ) : (
                item?.name
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <button
          onClick={() => {
            addFile("my account");
          }}
        >
          Add File
        </button>
      </div>
    </div>
  );
};

function DashboarHome(props) {
  return <Dashboard />;
}

export default DashboarHome;
