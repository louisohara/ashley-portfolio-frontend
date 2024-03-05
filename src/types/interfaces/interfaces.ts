export interface FilmObject {
  id: number;
  title: string;
  bio: string;
  image: string;
  description?: string;
  category?: string;
  role?: string;
  length?: string;
  streamingLogo?: string;
  video?: string;
  link?: string;
  production?: string;
}
export interface UserObject {
  id: number;
  full_name: string;
  bio: string;
  image: string;
  image2: string;
  description: string;
  representation?: string;
}

export type PropsObject = UserObject | FilmObject;

export interface NominationsObject {
  id: number;
  logo: string;
  awardshow?: string;
  result?: string;
  category?: string;
  link?: string;
}

export interface CollaboratorsObject {
  id: number;
  collaborator: string;
  title: string;
}

export interface ReviewObject {
  id: number;
  rating?: number;
  quote: string;
  author: string;
  logo?: string;
}
export interface ImageObject {
  id: string;
  link: string;
  caption: string;
  image: string;
}
export interface ClientObject {
  id: number;
  logo: string;
}

export type Params =
  | UserObject
  | FilmObject
  | CollaboratorsObject
  | NominationsObject
  | ReviewObject
  | ImageObject;

export const backendUrl: string =
  "https://ashley-portfolio-backend-9886eb2ea612.herokuapp.com";

export const instagramUrl: string =
  "https://feeds.behold.so/yJrGA0gr3aRuzBX8v8Qp";
