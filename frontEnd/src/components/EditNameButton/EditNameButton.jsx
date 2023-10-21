import React from "react";

const EditNameButton = ({ toggleEditName, setToggleEditName }) => {
  const displayEditName = () => {
    setToggleEditName(!toggleEditName);
  };

  return (
    <button onClick={displayEditName} className="edit-button">
      {toggleEditName ? "Close" : "Edit Name"}
    </button>
  );
};

export default EditNameButton;