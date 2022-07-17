import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { YoutubeDiv } from "./globalStyles/Flex";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  // bgcolor: "background.paper",
  boxShadow: 24,
};

export default function BasicModal({ trailerKey }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(trailerKey);
  return (
    <div>
      <Button onClick={handleOpen}>Watch Trailer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <YoutubeDiv>
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </YoutubeDiv>
        </Box>
      </Modal>
    </div>
  );
}
