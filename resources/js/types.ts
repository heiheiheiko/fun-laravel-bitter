/* eslint-disable camelcase */
export interface BackendResponse {
  data: any,
}

export interface User {
  id: number,
  email: string,
  email_verified_at: string,
  color: string,
  created_at: string,
  updated_at: string,
}

export interface Post {
  id: number,
  user: User,
  message: string,
  created_at: string,
  updated_at: string,
}

export interface Dimension {
  tiny: string,
  small: string,
  normal: string,
  large: string,
  huge: string,
}
