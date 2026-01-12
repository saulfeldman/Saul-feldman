
export enum AppView {
  HOME = 'home',
  COMMUNICATION = 'communication',
  VIDEO_CONSULT = 'video_consult',
  UPLOAD = 'upload'
}

export interface ContactInfo {
  practicePhone: string;
  whatsapp: string;
  drFeldmanText: string;
  drBulmashText: string;
  website: string;
  doximityWaitingRoom?: string;
}

export interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  timestamp: Date;
}
