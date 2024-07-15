import React from "react";
import { Link } from "react-router-dom";
import HomeDashboardIcon from "../../icons/HomeDashboardIcon";
import ProjectIcon from "../../icons/ProjectIcon";
import LearnIcon from "../../icons/LearnIcon";

function HomeSideMenu({
  handleActiveSideMenuLink,
  addFolder,
  projectItems,
  userData,
}) {
  return (
    <div className="menu-container">
      <div className="top-section p-[1rem] mb-4">
        <div className="flex gap-2 items-center p-4 mb-2">
          <div className="flex-item">
            <p className="initial uppercase w-[36px] h-[36px] bg-[#ffcd29] sailec-medium">
              s
            </p>
          </div>
          <div className="flex-item">
            <p className="username capitalize sailec-medium">
              {userData.username}
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <nav className="nav-contianer">
          <ul className="menu-list">
            <li>
              <Link
                onClick={(e) => {
                  handleActiveSideMenuLink(e);
                }}
                className="active link-item flex items-center gap-4 px-[1rem]"
                to="/dashboard"
              >
                <span className="icon-container inline-block align-middle">
                  <HomeDashboardIcon />
                </span>
                <span className="sailec-medium text-[0.875rem]">home</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  handleActiveSideMenuLink(e);
                }}
                className="link-item flex items-center gap-4 px-[1rem]"
                to="/dashboard/projects"
              >
                <span className="icon-container inline-block align-middle">
                  <ProjectIcon />
                </span>
                <span className="sailec-medium text-[0.875rem]">project</span>
              </Link>
              <ul className="nested-side-menu">
                {projectItems.map((item, index) => (
                  <li key={index}>
                    {item.type === "folder" ? (
                      <Link to={`/dashboard/projects/folder/${item.id}`}>
                        {item?.name}
                      </Link>
                    ) : (
                      item?.name
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                onClick={(e) => {
                  handleActiveSideMenuLink(e);
                }}
                className="link-item flex items-center gap-4 px-[1rem]"
                to="/dashboard/learn"
              >
                <span className="icon-container inline-block align-middle">
                  <LearnIcon />
                </span>
                <span className="sailec-medium text-[0.875rem]">tutorials</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomeSideMenu;
