export interface Instructor {
  name: string;
  role: string;
  company: string;
  image: string; 
}

export interface Webinar {
  id: number;
  instructor: Instructor;
  topic: string;
  title: string;
  startDate: string; 
  startTime: string;
  endTime: string;
}
