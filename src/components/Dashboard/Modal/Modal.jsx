import React, { useState } from "react";
import "./modal.css";

function Modal({ modal, toggleModal, addFolder }) {
  const [folderText, setFolderText] = useState("");

  // listen to change event
  const handleFolderTextChange = (e) => {
    setFolderText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(folderText);
  };

  return (
    <>
      {modal && (
        <div className="modal-container">
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
              <h5 className="sailec-medium">Create a new folder</h5>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label className="sailec-medium" htmlFor="new_folder">
                      Folder name
                    </label>
                    <input
                      className="bg-[#1C1F2580]"
                      type="text"
                      placeholder="New folder"
                      id="new_folder"
                      value={folderText}
                      onChange={handleFolderTextChange}
                    />
                  </div>
                  <div className="btns flex gap-2 justify-end">
                    <div className="btn-container">
                      <button onClick={toggleModal}>
                        <span>cancel</span>
                      </button>
                    </div>
                    <div className="btn-container">
                      <button
                        className="active"
                        onClick={() => {
                          addFolder(folderText);
                          toggleModal();
                        }}
                      >
                        <span>create folder</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="close-modal" onClick={toggleModal}>
              <div className="img-container">
                <img src={`/assets/icons/close-icon.svg`} alt="close modal" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
