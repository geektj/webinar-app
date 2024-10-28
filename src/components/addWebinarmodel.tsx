import React, { useState, useContext } from "react";
import {
  Modal,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  useTheme,
  Icon,
} from "@mui/material";
import { WEBINAR_LABELS } from "../utils/constants";
import { LayoutContext } from "../context/layoutWrapper";
import { AddIcon, CloseIcon, UserIcon, VideoIcon } from "../assets/icons";

export const AddWebinarModal: React.FC = () => {
  const theme: any = useTheme();
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const {
    handleWebinarSubmit,
    handleWebinarChange,
    handleModalClose,
    modalOpen,
    webinarData,
    isEdit,
  } = useContext(LayoutContext);

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       // setWebinarData((prevData) => ({
  //       //   ...prevData,
  //       //   instructorImage: reader.result as string, // Set the image data URL
  //       // }));
  //     };
  //     reader.readAsDataURL(file); // Read the file as a data URL
  //   }
  // };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{
        backdropFilter: "blur(16px)",
        backgroundColor: "#0E101380",
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: `${theme.palette.common.white}`,
          borderRadius: 2,
          maxWidth: "75%",
          width: "70%",
          // height: 'auto',
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: "20px",
            borderBottom: "1px solid #E3E7EC",
          }}
        >
          <Typography variant="h2">
            {isEdit
              ? WEBINAR_LABELS.EDIT_WEBINAR
              : WEBINAR_LABELS.CREATE_WEBINAR}
          </Typography>
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box mt={4}>
          <form onSubmit={handleWebinarSubmit}>
            <Box sx={{ display: "flex", mb: "30px" }}>
              <Box>
                <Icon>
                  <UserIcon />
                </Icon>
              </Box>
              <Box sx={{ display: "flex", pl: 4, gap: 4, width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                    width: "50%",
                  }}
                >
                  <Typography
                    variant="h3"
                    color={theme.palette.text.primary}
                    pb={2}
                  >
                    Instructor Details
                  </Typography>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.INSTRUCTOR_NAME}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="instructorName"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.instructorName}
                      placeholder="Type the instructor name"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          // width: "380px",
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.INSTRUCTOR_ROLE}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="instructorRole"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.instructorRole}
                      placeholder="Type the instructor role"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          // width: "380px",
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.INSTRUCTOR_COMPANY}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="instructorCompany"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.instructorCompany}
                      placeholder="Type the instructor company"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          // width: "380px",
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    pt: '40px',
                    width: "50%",
                  }}
                >
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.INSTRUCTOR_IMAGE}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px dashed #E3E7EC",
                        borderRadius: "10px",
                        padding: 2,
                        width: "135px",
                        // height: '1px',
                        cursor: "pointer", 
                        background: '#F2F4F8'
                      }}
                      onClick={() =>
                        document.getElementById("file-input")?.click()
                      } 
                    >
                      {image ? (
                        <Box
                          component="img"
                          src={image as string}
                          alt="Profile Preview"
                          sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            // marginBottom: 2,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100px", 
                            width: "100%",
                          }}
                        >
                          <Box>
                            <AddIcon />
                          </Box>
                        </Box>
                      )}
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageUpload}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.TOPICS}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="topic"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.topic}
                      placeholder="Type the topics"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          // width: "380px",
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", mb: 4 }}>
              <Box>
                <Icon>
                  <VideoIcon />
                </Icon>
              </Box>
              <Box
                width={"100%"}
                pl={4}
                sx={{
                  width: "100%",
                  pl: 4,
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,
                }}
              >
                <Typography variant="h3" color={theme.palette.text.primary}>
                  Webinar Details
                </Typography>
                <Box>
                  <Typography variant="h6" color={theme.palette.text.primary}>
                    {WEBINAR_LABELS.WEBINAR_TITLE}
                    <span style={{ color: "#BE1818" }}>*</span>
                  </Typography>
                  <TextField
                    name="title"
                    fullWidth
                    required
                    onChange={handleWebinarChange}
                    value={webinarData.title}
                    placeholder="Type the Webinar title"
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-formControl": {
                        height: "44px",
                        background: "#F2F4F8",
                        border: "1px solid #E3E7EC",
                        borderRadius: "10px",
                        color: `${theme.palette.text.primary}`,
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex", width: "70%", gap: 4 }}>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.START_DATE}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="startDate"
                      type="date"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.startDate}
                      InputLabelProps={{ shrink: true }}
                      placeholder="Type Start Date"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.START_TIME}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="startTime"
                      type="time"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.startTime}
                      InputLabelProps={{ shrink: true }}
                      placeholder="Type Start Time"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color={theme.palette.text.primary}>
                      {WEBINAR_LABELS.END_TIME}
                      <span style={{ color: "#BE1818" }}>*</span>
                    </Typography>
                    <TextField
                      name="endTime"
                      type="time"
                      fullWidth
                      required
                      onChange={handleWebinarChange}
                      value={webinarData.endTime}
                      InputLabelProps={{ shrink: true }}
                      placeholder="Type Start Time"
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-formControl": {
                          height: "44px",
                          background: "#F2F4F8",
                          border: "1px solid #E3E7EC",
                          borderRadius: "10px",
                          color: `${theme.palette.text.primary}`,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                borderTop: "1px solid #E3E7EC",
                pt: "20px",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                {isEdit
                  ? WEBINAR_LABELS.EDIT_WEBINAR
                  : WEBINAR_LABELS.CREATE_WEBINAR}
              </Button>
              <Button onClick={handleModalClose}>
                <Typography variant="h3">Cancel</Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
