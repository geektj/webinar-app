import { Webinar } from "../types/webinar";

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getUniqueTopics = (webinars: Webinar[]): string[] => {
  const topics = webinars.map(webinar => webinar.topic);
  return Array.from(new Set(topics));
};
