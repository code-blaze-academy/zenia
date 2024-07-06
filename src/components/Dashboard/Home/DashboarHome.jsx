import React from "react";
import SideMenu from "../shared/SideMenu";
import HomeSideMenu from "./HomeSideMenu";
import { useNavigate } from "react-router-dom";

function DashboarHome(props) {
  const navigate = useNavigate();
  return (
    <div className="dashboard-index dashboard-container lg:h-screen">
      <div className="grid-2 p-2">
        <div className="grid-item side-menu">
          <HomeSideMenu />
        </div>
        <div className="grid-item home-menu">
          <div className="home-menu-container">
            <section className="header-section">
              <div className="flex flex-row items-center">
                <div className="flex-item basis-[22%] mr-auto">
                  <h5 className="mb-0">home</h5>
                </div>
                <div className="flex-item basis-[72%]">
                  <div className="flex-wrapper flex gap-[4%] ">
                    <div className="flex-item basis-[48%]">
                      <form>
                        <div className="form-field">
                          <input type="search" placeholder="Search" />
                          {/* <span className="search-icon-content absolute top-0 left-20 text-[#000]">
                            Search
                          </span> */}
                        </div>
                      </form>
                    </div>
                    <div className="flex-item basis-[48%] flex gap-[4%]">
                      <div className="btn-container">
                        <button
                          className="active"
                          onClick={() => {
                            navigate("/dashboard/new-screen");
                          }}
                        >
                          <span>new file</span>
                        </button>
                      </div>
                      <div className="btn-container">
                        <button>
                          <span>new folder</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="body-section">
              <p>No History yet!</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboarHome;
