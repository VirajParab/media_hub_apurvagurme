import { Document } from "mongoose";

export interface User {
  _id: string;
  username: string;
  name: string;
  surname: string;
}
export interface Ipost extends Document {
  title: string;
  description: string;
  vote: number;
  user: User;
}
