import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboarHome from "../Home/DashboarHome";

const Folder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectItems, setProjectItems] = useState(fetchMenuItems);
  const [projectItem, setProjectItem] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedMenuItems = JSON.parse(localStorage.getItem("projectItems"));
    const getProjectItem = savedMenuItems.find(
      (item) => item.type === "folder" && item.id === parseInt(id),
    );
    setProjectItem(getProjectItem);
    // setContent(getSceneItem.name);
  }, []);

  // function get stored menu items
  function fetchMenuItems() {
    const savedMenuItems = JSON.parse(localStorage.getItem("projectItems"));
    return savedMenuItems || [];
  }
  // console.log("menuuu", menuItems);

  const deleteFile = (id) => {
    const unSelectedItems = projectItems.filter((item) => item.id !== id);
    localStorage.setItem("projectItems", JSON.stringify(unSelectedItems));
  };

  return (
    <div className="folder">
      {/* <button onClick={() => navigate(-1)}>Back to Dashboard</button> */}
      {/* <h2>{sceneItem?.name} </h2> */}
      <DashboarHome
        heading={projectItem?.name}
        children={`No ${projectItem?.name} Projects Yet!`}
      />
      <div className="btn-container flex justify-end">
        <button
          onClick={() => {
            deleteFile(parseInt(id));
            navigate(-1);
          }}
          style={{ background: "#f00", color: "#fff" }}
        >
          delete folder
        </button>
      </div>
    </div>
  );
};

export default Folder;
