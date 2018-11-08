export interface GuestUser {
  id: string;
  name: string;
}

export interface AuthenticatedUser {
  id: string;
  isPremium: boolean;
  name: string;
  socialSignOut(): Promise<void>;
}

export type User = GuestUser | AuthenticatedUser;
