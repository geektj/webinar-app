export interface Instructor {
  name: string;
  role: string;
  company: string;
  image: string; // URL or base64 string for the image
}

export interface Webinar {
  id: number;
  instructor: Instructor;
  topic: string;
  title: string;
  startDate: string; // ISO date string
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
}
