import { User } from "@prisma/client";

export class AuthResponse {
  access_token: string;
  user: User;
}
