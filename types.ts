export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
}

export interface FormData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  serviceId: string;
  questions: string;
  leftPalm: File | null;
  rightPalm: File | null;
  currentPhoto: File | null;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  PAYMENT = 'PAYMENT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}