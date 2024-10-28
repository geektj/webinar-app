import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Webinar } from "../types/webinar";
import webinarDefaultData from '../utils/data.json';

interface LayoutContextType {
  webinars: Webinar[];
  searchTerm: string;
  filteredWebinars: Webinar[];
  filterTopic: string;
  modalOpen: boolean;
  isEdit: boolean;
  setModalOpen: any;
  setFilterTopic: any;
  setSearchTerm: any;
  handleAddWebinar: any;
  handleDeleteWebinar: any;
  handleEditWebinar: any;
  handleWebinarSubmit: any;
  handleWebinarChange: any;
  handleModalClose: any;
  handleOpenWebinarModal: any;
  webinarData: any;
}

export const LayoutContext = createContext<LayoutContextType>({
  webinars: [],
  searchTerm: "",
  filteredWebinars: [],
  filterTopic: "",
  modalOpen: false,
  webinarData: {},
  isEdit: false,
  setModalOpen: () => {},
  setFilterTopic: () => {},
  setSearchTerm: () => {},
  handleAddWebinar: () => {},
  handleDeleteWebinar: () => {},
  handleEditWebinar: () => {},
  handleWebinarSubmit: () => {},
  handleWebinarChange: () => {},
  handleModalClose: () => {},
  handleOpenWebinarModal: () => {}
});

export const LayoutWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultWebinarData = {
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    instructorImage: "",
    topic: "",
    title: "",
    startDate: "",
    startTime: "",
    endTime: "",
  }
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [filteredWebinars, setFilteredWebinars] = useState<Webinar[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTopic, setFilterTopic] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [webinarData, setWebinarData] = useState({
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    instructorImage: "",
    topic: "",
    title: "",
    startDate: "",
    startTime: "",
    endTime: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleAddWebinar = (webinar: Webinar) => {
    setWebinars((prev) => [...prev, webinar]);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteWebinar = (id: number) => {
    setFilteredWebinars((prev) => prev.filter((webinar) => webinar.id !== id));
  };

  const handleEditSubmit = (updatedWebinar: Webinar) => {
    setWebinars((prevWebinars) =>
      prevWebinars.map((webinar) =>
        webinar.id === updatedWebinar.id ? updatedWebinar : webinar
      )
    );
  }

  const handleEditWebinar = (webinar: Webinar) => {
    const populateData = {
      instructorName: webinar ? webinar.instructor.name : "",
      instructorRole: webinar ? webinar.instructor.role : "",
      instructorCompany: webinar ? webinar.instructor.company : "",
      instructorImage: webinar ? webinar.instructor.image : "",
      topic: webinar ? webinar.topic : "",
      title: webinar ? webinar.title : "",
      startDate: webinar ? webinar.startDate : "",
      startTime: webinar ? webinar.startTime : "",
      endTime: webinar ? webinar.endTime : "",
    }
    setWebinarData(populateData);
    setIsEdit(true);
    setModalOpen(true);
  };

  const handleWebinarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWebinarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWebinarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {
      instructorName,
      instructorRole,
      instructorCompany,
      instructorImage,
      topic,
      title,
      startDate,
      startTime,
      endTime,
    } = webinarData;
    const newWebinar: Webinar = {
      id: Date.now(),
      instructor: {
        name: instructorName,
        role: instructorRole,
        company: instructorCompany,
        image: instructorImage,
      },
      topic: topic,
      title: title,
      startDate: startDate,
      startTime: startTime,
      endTime: endTime,
    };
    if (isEdit) {
      handleEditSubmit(newWebinar)
    } else {
      handleAddWebinar(newWebinar);
    }
    
    handleModalClose();
  };

  const handleOpenWebinarModal = () => {
    setWebinarData(defaultWebinarData);
    setModalOpen(true);
  }

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

  useEffect(() => {
    const data: Webinar[] = webinarDefaultData?.data;
    setWebinars(data);
  }, []);

  const config = {
    webinars,
    searchTerm,
    filteredWebinars,
    filterTopic,
    modalOpen,
    webinarData,
    isEdit,
    setModalOpen,
    setFilterTopic,
    setSearchTerm,
    handleAddWebinar,
    handleDeleteWebinar,
    handleEditWebinar,
    handleWebinarSubmit,
    handleWebinarChange,
    handleModalClose,
    handleOpenWebinarModal
  };

  return (
    <LayoutContext.Provider value={config}>{children}</LayoutContext.Provider>
  );
};
