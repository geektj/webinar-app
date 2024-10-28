import React, { useContext } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AddWebinarModal } from "../components/addWebinarmodel";
import WebinarList from "../components/webinarList";
import SearchBar from "../components/searchBar";
import Filter from "../components/fliterTopics";
import { LayoutContext } from "../context/layoutWrapper";

export const Layout = () => {
  const theme: any = useTheme();
  const {
    searchTerm,
    filteredWebinars,
    filterTopic,
    setFilterTopic,
    setSearchTerm,
    handleDeleteWebinar,
    handleEditWebinar,
    handleOpenWebinarModal
  } = useContext(LayoutContext);

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
