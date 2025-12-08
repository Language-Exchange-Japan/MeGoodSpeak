// src/shared/api.types.ts
import type { IUser } from "./user.interface";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface LoginPayload {
  user: IUser;
  token: string;
}

export type LoginResponse = ApiResponse<LoginPayload>;
