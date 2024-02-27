export interface filmObject {
  id: number;
  title: string;
  bio: string;
  image: string;
  description: string;
  category?: string;
  role?: string;
  length?: string;
  streamingLogo?: string;
  video?: string;
  link?: string;
  production?: string;
}
export interface userObject {
  id: number;
  full_name?: string;
  bio: string;
  image: string;
  image2: string;
  description: string;
  representation?: string;
}

export type PropsObject = userObject | filmObject;

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
  | userObject
  | filmObject
  | CollaboratorsObject
  | NominationsObject
  | ReviewObject
  | ImageObject;
