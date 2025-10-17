import AppError from "../../../shared/appError";
import { API_CONFIG } from "../constants/apiConstants";
import { tokenStorage } from "../utils/localStorage";

import type {
  IUser,
  IUserRegistrationRequest,
  ValidationError,
} from "../../../shared/user.interface";

/**
 * Fetches the authenticated user's profile from the backend API.
 *
 * @returns Promise resolving to the current user's profile data
 * @throws {AppError} When fetching fails or authentication is invalid
 */
export async function getCurrentUser(): Promise<IUser> {
  const token = tokenStorage.get();
  if (!token) {
    throw new AppError("No authentication token found.", 401);
  }

  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS_ME}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include", // if using cookies for auth
  });

  const apiResponse = await response.json();

  if (!response.ok) {
    const errorMessage = apiResponse.errors
      ? apiResponse.errors.map((err: ValidationError) => err.msg).join(", ")
      : apiResponse.message;
    throw new AppError(errorMessage || "Failed to fetch user profile.", response.status);
  }

  // The API returns { success: true, message: "...", data: { ...mongoose object... } }
  const mongooseUser = apiResponse.data;

  // The actual user data is in the _doc property of the mongoose object.
  if (mongooseUser && mongooseUser._doc) {
    const user = { ...mongooseUser._doc, id: mongooseUser._id };
    return user;
  }

  return mongooseUser;
}

/**
 * Registers a new user with the backend API.
 *
 * @param userData - User registration data including profile information
 * @returns Promise resolving to registration response with user data and token
 * @throws {AppError} When registration fails or validation errors occur
 */
export async function registerUser(
  userData: IUserRegistrationRequest
): Promise<{ message: string; user: IUser; token: string }> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS_REGISTER}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    // Use the new ValidationError type for better type safety
    const errorMessage = data.errors
      ? data.errors.map((err: ValidationError) => err.msg).join(", ")
      : data.message;
    throw new AppError(errorMessage || "An error occurred during registration.", response.status);
  }

  // The backend returns { success: true, message: "...", data: { user: {...}, token: "..." } }
  return {
    message: data.message,
    user: data.data.user,
    token: data.data.token,
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  user: IUser;
  token: string;
}

export async function loginUser(loginData: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS_LOGIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage = data.errors
      ? data.errors.map((err: ValidationError) => err.msg).join(", ")
      : data.message;
    throw new AppError(errorMessage || "An error occurred during login.", response.status);
  }

  return {
    message: data.message,
    user: data.data.user,
    token: data.data.token,
  };
}
