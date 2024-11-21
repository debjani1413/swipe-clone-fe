import { useDispatch } from "react-redux";
import { setUploadMessage } from "../redux/uploadSlice";
import { useSendFile } from "./useSendFile"; // Reuse the `useSendFile` hook

export const useFileChange = () => {
  const dispatch = useDispatch();
  const sendFile = useSendFile(); // Use the sendFile logic

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);

      // Call the sendFile function from the hook
      sendFile(file);

      // Simulate a delay for setting the upload message
      // setTimeout(() => {
      //   dispatch(setUploadMessage(`File "${file.name}" uploaded successfully!`));
      // }, 1000);
    }
  };

  return handleFileChange; // Return the handler function
};
