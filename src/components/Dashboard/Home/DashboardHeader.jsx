import React from "react";

function DashboardHeader({ modal, toggleModal, navigate, heading }) {
  return (
    <section className="header-section">
      <div className="lg:flex flex-row items-center">
        <div className="flex-item basis-[22%] mr-auto">
          <h5 className="mb-2">{heading || "home"}</h5>
        </div>
        <div className="flex-item basis-[72%]">
          <div className="flex-wrapper lg:flex gap-[4%] ">
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
            <div className="flex-item flexed-files basis-[48%] flex gap-[4%]">
              <div className="btn-container basis-[48%]">
                <button
                  className="active"
                  onClick={() => {
                    navigate("/dashboard/new-screen");
                  }}
                >
                  <span>new file</span>
                </button>
              </div>
              <div className="btn-container basis-[48%]">
                <button onClick={toggleModal}>
                  <span>new folder</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
