import React from "react";
import { FaCloudUploadAlt, FaMinusSquare } from "react-icons/fa";

const AddMusic = () => {
  return (
    <div className="addmusic-form">
      <div className="input-title flex">
        <h2>Add Music</h2>
        <FaMinusSquare size={20}/>
      </div>

      <form className="flex">
        <label className="file-input-label flex" htmlFor="file">
          <FaCloudUploadAlt style={{ fontSize: "28px" }} />
          Upload Photo
        </label>
        <input type="file" name="" id="file" className="file-input" />
        <input type="text" placeholder="Enter Music title" className="input" />
        <input type="text" placeholder="Enter Artist " className="input" />
        <button>Add Music</button>
      </form>
    </div>
  );
};

export default AddMusic;
