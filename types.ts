
export enum AppView {
  HOME = 'home',
  COMMUNICATION = 'communication',
  VIDEO_CONSULT = 'video_consult',
  UPLOAD = 'upload',
  CALLBACK = 'callback'
}

export interface ContactInfo {
  practicePhone: string;
  whatsapp: string;
  drFeldmanText: string;
  drBulmashText: string;
  fax: string;
  website: string;
}

export interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  timestamp: Date;
}
