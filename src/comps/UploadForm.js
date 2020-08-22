import React, { useReducer } from 'react';
import { ProgressBar } from './ProgressBar';

const types = ['image/jpeg', 'image/png'];

export const UploadForm = () => {
  const [state, dispatch] = useReducer((currentState, nextState) => ({ ...currentState, ...nextState }), {
    file: null,
    error: null
  });
  const { file, error } = state;

  const handleSelectFile = e => {
    const files = e.target.files;
    if (files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile && types.includes(selectedFile.type)) {
        dispatch({
          error: null,
          file: selectedFile
        });
      } else {
        dispatch({
          file: null,
          error: 'Please select an image ( jpeg / png )'
        });
      }
    }
  };

  const handleResetFile = () => dispatch({ file: null });

  return (
    <form>
      <label>
        <input type="file" onChange={handleSelectFile} />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} resetFile={handleResetFile} />}
    </form>
  );
};
