import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function ModalAddEdit({ addTask }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [information, setInformation] = useState({
    title: "",
    description: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    addTask(information);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add New Task
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Create a New Task
          </Typography>
          <TextField
            name="title"
            label="Task Title"
            variant="outlined"
            fullWidth
            value={information.title}
            onChange={onchangeHandler}
            sx={{ mb: 2 }}
          />
          <TextField
            name="description"
            label="Task Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={information.description}
            onChange={onchangeHandler}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            fullWidth
          >
            Save Task
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
