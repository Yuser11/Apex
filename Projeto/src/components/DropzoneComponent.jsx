import React, { useState } from "react";

function FileUploader() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadFiles = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    console.log(formData);
    console.log(Object.fromEntries(formData));

    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Upload successful!");
    } else {
      alert("Upload failed.");
    }
  };

  document.getElementById('meuForm').onsubmit = function() {
    const input = document.getElementById('inputImg');
    const file = input.files[0];

    const formData = new FormData();    
    formData.append('anexo', file);
    formData.append('nome', 'teste');
    // TODO chamada AJAX passando o FormData
    
};

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: isDragging ? "#577ca1" : "#152533",
      }}
    >
      <form method="post" enctype="multipart/form-data" id="meuForm">
        <input type="file" id="inputImg" />
        <input type="submit" value="Postar" />
      </form>
      <p>Drag and drop files here</p>
      <button onClick={uploadFiles}>Upload Files</button>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileUploader;
