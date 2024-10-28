// src/components/WebinarList.tsx
import React from 'react';
import { Webinar } from '../types/webinar';
import WebinarCard from '../components/webinarCard';

interface WebinarListProps {
  webinars: Webinar[];
  onDelete: (id: number) => void;
  onEdit: (webinar: Webinar) => void;
}

const WebinarList: React.FC<WebinarListProps> = ({ webinars, onDelete, onEdit }) => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' , gap: '20px'}}>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} webinar={webinar} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default WebinarList;