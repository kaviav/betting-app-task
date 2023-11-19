import React, { useState } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import './fileuploader.css';
function FileUploader({ label }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="file-uploader">
      {selectedFile ? (
        <div className="preview-box">
          <img src={URL.createObjectURL(selectedFile)} alt={label} />
        </div>
      ) : (
        <>
          <label className="file-input-label">
            <input
              type="file"
              accept="image/*" // Set accepted file types (e.g., images)
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
            <div className="upload-box">
              <AiOutlineFileAdd className="upload-icon" />
              <p className="upload-text">Click here to upload {label}</p>
            </div>
          </label>
        </>
      )}
    </div>
  );
}

export default FileUploader;
