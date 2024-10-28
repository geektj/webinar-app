import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid2,
} from "@mui/material";
import { Webinar } from "../types/webinar";
import { useTheme } from "@mui/material/styles";
import DummyImg from "../assets/dummyImg.png";
import { getRandomColor } from "../utils/helpers";

interface WebinarCardProps {
  webinar: Webinar;
  onDelete: (id: number) => void;
  onEdit: (webinar: Webinar) => void;
}

const WebinarCard: React.FC<WebinarCardProps> = ({
  webinar,
  onDelete,
  onEdit,
}) => {
  const theme: any = useTheme();
  const randomColor = getRandomColor() || theme.colors.color1;
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        borderRadius: "24px",
        border: "1px solid #E3E7EC",
        // p: "20px",
      }}
    >
      <CardContent sx={{ p: "20px"}}>
        <Box
          sx={{
            borderRadius: "16px",
            background: `${randomColor}`,
            p: "24px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid2
            sx={{ display: "flex", flexDirection: "column", gridRowGap: "5px" }}
          >
            <Typography variant="h2" color={theme?.palette?.common?.white}>
              {webinar.instructor.name}
            </Typography>
            <Typography variant="h4" color={theme?.palette?.common?.white}>
              {webinar.instructor.role}
            </Typography>
            <Typography variant="h4" color={theme?.palette?.common?.white}>
              {webinar.instructor.company}
            </Typography>
          </Grid2>
          <Grid2>
            <img src={DummyImg} alt="profile pic" />
          </Grid2>
        </Box>
        <Typography
          variant="h4"
          sx={{ pt: "10px", pb: "5px" }}
          color={randomColor}
        >
          {webinar.title}
        </Typography>
        <Typography variant="h2" color="textSecondary" sx={{ pb: "5px" }}>
          {webinar.topic}
        </Typography>
        <Typography variant="h5" sx={{ pb: "5px" }}>
          Tuesday • {webinar.startDate}, {webinar.startTime} - {webinar.endTime}
        </Typography>
        <Box sx={{ display: "flex", gap: "5px", marginTop: "20px" }}>
          <Button
            onClick={() => onDelete(webinar.id)}
            sx={{
              background: "#F9E8E8",
              borderRadius: "24px",
              height: "36px",
              p: "6px 14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" color={theme.palette.error.main}>
              Delete
            </Typography>
          </Button>
          <Button onClick={() => onEdit(webinar)} color="primary">
            <Typography variant="h6">Edit</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WebinarCard;
