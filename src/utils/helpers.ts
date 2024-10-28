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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

export const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
};
