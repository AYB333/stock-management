export interface User {
  id: string;
  email: string;
  role: 'admin' | 'pointer';
  name: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  deletedAt?: string;
  deletedBy?: User;
}

export interface AuthResponse {
  user: User;
  token: string;
}