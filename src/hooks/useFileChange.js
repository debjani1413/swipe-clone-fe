import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loadSlice";
import { useSendFile } from "./useSendFile"; // Reuse the `useSendFile` hook

export const useFileChange = () => {
  const dispatch = useDispatch();

  const sendFile = useSendFile(); // Use the sendFile logic

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);

      dispatch(setLoading(true));

      // Call the sendFile function from the hook
      sendFile(file);
    }
  };

  return handleFileChange; // Return the handler function
};
