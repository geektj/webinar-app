import { useContext, useState, useEffect } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AddWebinarModal } from "../components/addWebinarmodel";
import WebinarList from "../components/webinarList";
import SearchBar from "../components/searchBar";
import Filter from "../components/fliterTopics";
import { LayoutContext } from "../context/layoutWrapper";
import { Webinar } from "../types/webinar";

export const Layout = () => {
  const theme: any = useTheme();
  const [filteredWebinars, setFilteredWebinars] = useState<Webinar[]>([]);
  const {
    searchTerm,
    webinars,
    filterTopic,
    setFilterTopic,
    setSearchTerm,
    handleDeleteWebinar,
    handleEditWebinar,
    handleOpenWebinarModal
  } = useContext(LayoutContext);

  useEffect(() => {
    if (webinars.length) {
      const filteredData = webinars.filter((webinar) => {
        return (
          webinar.title?.toLowerCase().includes(searchTerm?.toLowerCase()) &&
          webinar.topic?.toLowerCase().includes(filterTopic?.toLowerCase())
        );
      });
      setFilteredWebinars(filteredData);
    }
  }, [webinars, searchTerm, filterTopic]);

  return (
    <Container maxWidth="lg" >
      <Box
        sx={{
          borderBottom: "1px solid #E3E7EC",
          p: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Webinar</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenWebinarModal}
          sx={{
            boxShadow: `${theme?.boxShadows?.btnBoxShadow}`,
            borderRadius: "10px",
            height: "44px",
            p: "12px, 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Add Webinar</Typography>
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", p: "20px 0px" }}
      >
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Filter topic={filterTopic} onFilter={setFilterTopic} />
      </Box>
      <Box sx={{margin: '20px 0px'}}>
        <WebinarList
          webinars={filteredWebinars}
          onDelete={handleDeleteWebinar}
          onEdit={handleEditWebinar}
        />
      </Box>

      <AddWebinarModal />
    </Container>
  );
};
