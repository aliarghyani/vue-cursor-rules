/**
 * Shared TypeScript interfaces for Vue 3 Cursor Rules project
 * These types provide strict typing for components, stores, API responses, and utilities.
 * Import them in your components, composables, and rules to ensure type safety.
 */

// Core User interface (used across components, stores, and API)
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role?: 'admin' | 'user' | 'guest';
  createdAt?: Date;
  updatedAt?: Date;
}

// Extended User with optional fields for forms
export interface UserForm extends Partial<User> {
  confirmPassword?: string; // For registration/update forms
}

// API Response wrappers for consistent error handling and typing
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Error types for better error handling
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, string>;
}

// Props and Emits utilities for Vue components
export interface ComponentProps<T> {
  [key: string]: T;
}

// Generic form validation result
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Store state patterns
export interface StoreState {
  loading: boolean;
  error: string | null;
  data: any;
}

// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type NonEmptyString = string & { readonly brand: unique symbol };

// Example usage in components:
// import { User } from '@/types';
// const props = defineProps<{ user: User }>();

// For API composables:
// const response = await fetch<ApiResponse<User[]>>('/api/users');