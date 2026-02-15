export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
}

export interface BookingFormState {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  whatsappNumber: string;
  serviceId: string;
  questions: string;
}

export enum BookingStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}