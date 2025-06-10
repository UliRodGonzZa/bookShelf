import { useState } from "react";

// Custom hook to manage dialog open/close state
const useDialog = () => {
    // State variable 'open' to track if the dialog is open (true) or closed (false)
    const [open, setOpen] = useState(false);

    // Function to open the dialog by setting 'open' to true
    const handleOpen = () => setOpen(true);

    // Function to close the dialog by setting 'open' to false
    const handleClose = () => setOpen(false);

    // Return the state and the functions to control the dialog
    return { open, handleOpen, handleClose };
}

export default useDialog;
