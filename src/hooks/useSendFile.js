import { useDispatch } from 'react-redux';
import { setUploadMessage, setTableData } from '../redux/uploadSlice';

export const useSendFile = () => {
  const dispatch = useDispatch();

  const sendFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw alert("Extraction Error, we recommend to upload pdf,images,text files")
      }

      const data = await response.json();

      // Dispatch actions to update Redux state
      dispatch(setUploadMessage(`File "${file.name}" uploaded successfully!`));
      dispatch(setTableData(data));
    } catch (error) {
      console.error('Error uploading file:', error);
      dispatch(setUploadMessage('Failed to upload file'));
    }
  };

  return sendFile; // Return the function
};
