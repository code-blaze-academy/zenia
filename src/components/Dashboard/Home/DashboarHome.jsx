import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeSideMenu from "./HomeSideMenu";
import Modal from "../Modal/Modal";
import DashboardHeader from "./DashboardHeader";

function DashboarHome({ heading, children }) {
  // Create folder and Save it Script
  const [projectItems, setProjectItems] = useState(getProjectItems);
  const [sceneCount, setSceneCount] = useState(getSavedCounts);

  // fuction get menu items
  function getProjectItems() {
    const savedMenus = JSON.parse(localStorage.getItem("projectItems"));
    return savedMenus || [{ name: "", type: "static" }];
  }

  function getSavedCounts() {
    const savedSceneCount = parseInt(localStorage.getItem("sceneCount"), 10);
    // if (!isNaN(savedSceneCount)) {
    //   return savedSceneCount;
    // }
    return savedSceneCount || 0;
  }

  useEffect(() => {
    localStorage.setItem("projectItems", JSON.stringify(projectItems));
    localStorage.setItem("sceneCount", sceneCount.toString());
  }, [projectItems, sceneCount]);

  const addFolder = (title) => {
    setSceneCount((prevCount) => prevCount + 1);
    setProjectItems((prevItems) => [
      ...prevItems,
      { name: title || `New Folder`, type: "folder", id: sceneCount },
    ]);
  };

  // States and modules
  const [modal, setModal] = useState(false);
  const [activeLink, setActiveLink] = useState();
  // Handle side menu active link
  const handleActiveSideMenuLink = (e) => {
    if (!e.target.classList.contains("active")) {
      // Remove active class from all items
      document.querySelectorAll(".link-item").forEach((btn) => {
        btn.classList.remove("active");
      });
      // Add active class to the clicked button
      e.target.classList.add("active");
    }
  };

  //set the modal state
  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const navigate = useNavigate();
  return (
    <div className="dashboard-index dashboard-container lg:h-screen">
      <div className="grid-2 p-2">
        <div className="grid-item side-menu">
          <HomeSideMenu
            handleActiveSideMenuLink={handleActiveSideMenuLink}
            addFolder={addFolder}
            projectItems={projectItems}
          />
        </div>
        <div className="grid-item home-menu">
          <div className="home-menu-container">
            <DashboardHeader
              modal={modal}
              toggleModal={toggleModal}
              navigate={navigate}
              heading={heading}
            />
            <section className="body-section">
              {children || "No History yet!"}
            </section>
          </div>
        </div>
      </div>
      {/* add the modal */}
      <Modal modal={modal} toggleModal={toggleModal} addFolder={addFolder} />
    </div>
  );
}

export default DashboarHome;
