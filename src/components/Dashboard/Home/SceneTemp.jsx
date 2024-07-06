import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Scene = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState(fetchMenuItems);
  const [sceneItem, setSceneItem] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedMenuItems = JSON.parse(localStorage.getItem("menuItems"));
    const getSceneItem = savedMenuItems.find(
      (item) => item.type === "scene" && item.id === parseInt(id),
    );
    setSceneItem(getSceneItem);
    // setContent(getSceneItem.name);
  }, []);

  // function get stored menu items
  function fetchMenuItems() {
    const savedMenuItems = JSON.parse(localStorage.getItem("menuItems"));
    return savedMenuItems || [];
  }
  // console.log("menuuu", menuItems);

  const deleteFile = (id) => {
    const unSelectedItems = menuItems.filter((item) => item.id !== id);
    localStorage.setItem("menuItems", JSON.stringify(unSelectedItems));
  };

  return (
    <div className="scene">
      <button onClick={() => navigate(-1)}>Back to Dashboard</button>
      <h2>{sceneItem?.name} </h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="10"
        cols="50"
        style={{ color: "#000", padding: "1rem" }}
      />
      <button
        onClick={() => {
          deleteFile(parseInt(id));
          navigate(-1);
        }}
      >
        delete scene
      </button>
    </div>
  );
};

export default Scene;
