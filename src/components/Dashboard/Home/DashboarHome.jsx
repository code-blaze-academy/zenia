import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeSideMenu from "./HomeSideMenu";
import Modal from "../Modal/Modal";
import DashboardHeader from "./DashboardHeader";
import useFetch from "../../hooks/useFetch";

function DashboarHome({ heading, children }) {
  // Create folder and Save it Script
  const [projectItems, setProjectItems] = useState(getProjectItems);
  const [sceneCount, setSceneCount] = useState(getSavedCounts);
  const [userId, setUserId] = useState(null);
  // States and modules
  const [modal, setModal] = useState(false);

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

  // Get the stored user id from the local storage
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    setUserId(userId);
  }, []);

  const addFolder = (title) => {
    setSceneCount((prevCount) => prevCount + 1);
    setProjectItems((prevItems) => [
      ...prevItems,
      { name: title || `New Folder`, type: "folder", id: sceneCount },
    ]);
  };

  // const [activeLink, setActiveLink] = useState();
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

  const [{ isLoading, apiData, serverError }] = useFetch(`${userId}`);

  const userData = apiData?.user;
  // console.log(userData);
  if (isLoading)
    return (
      <div className="flex justify-center h-screen items-center text-xl">
        <p className="m-auto">Loading Zenia dashboard...</p>
      </div>
    );
  if (!userId)
    return (
      <div className="flex flex-col justify-center h-screen items-center text-xl">
        <h1 className="text-xl text-red-500">Session Expired</h1>
        <p>
          Please{" "}
          <Link
            className="inline-block text-xl font-bold text-[#3a8d97]"
            href="/login"
          >
            login
          </Link>{" "}
          to contnue
        </p>
      </div>
    );
  return (
    <div className="dashboard-index dashboard-container lg:h-screen">
      <div className="grid-2 p-2">
        <div className="grid-item side-menu">
          <HomeSideMenu
            handleActiveSideMenuLink={handleActiveSideMenuLink}
            addFolder={addFolder}
            projectItems={projectItems}
            userData={userData}
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
