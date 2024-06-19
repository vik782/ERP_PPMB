/**
 * Global variables such as user types and handling will be declared here
 */

export type UserRole = 'admin' | 'user' | 'guest';

export interface User {
    id: string;
    name: string;
    role: UserRole;
  }
  