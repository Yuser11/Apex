import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import fileIcon from './../assets/img/send-ico.png'

function Dropzone(props) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (<>
    <div className="container file-sender">
      <div {...getRootProps({ className: 'dropzone fill' })}>
        <input {...getInputProps()} />
        <p>Arraste os arquivos aqui</p>
        <img src={fileIcon} alt="" />
        <p>ou clique para selecionar<br></br>
          Formatos aceitos: PDF, JPG, PNG (máx. 10MB cada)</p>
        <button type="button" className='file-sender-button' onClick={open}>
          Open File Dialog
        </button>
      </div>
    </div>
    <aside>
      <h4>Files</h4>
      <ul>{files}</ul>
    </aside>
  </>
  );
}

export default Dropzone;