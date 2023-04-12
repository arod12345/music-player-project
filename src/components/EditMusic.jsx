import React from "react";
import { FaMinusSquare,FaCloudUploadAlt } from "react-icons/fa";

const EditMusic = () => {
  return (
    <div className="addmusic-form">
      <div className="input-title flex">
        <h2>Edit Music</h2>
        <FaMinusSquare size={20} onClick={()=>{}}/>
      </div>

      <form className="flex">
        <label className="file-input-label flex" htmlFor="file">
          <FaCloudUploadAlt style={{ fontSize: "28px" }} />
          Reupload Photo
        </label>
        <input type="file" name="" id="file" className="file-input" />
        <input type="text" placeholder="Enter Music title" className="input" />
        <input type="text" placeholder="Enter Artist " className="input" />
        <button>Edit Music</button>
      </form>
    </div>
  );
};

export default EditMusic;
