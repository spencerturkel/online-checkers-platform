export interface GuestUser {
  id: string;
  name: string;
}

export interface AuthenticatedUser {
  id: string;
  isPremium: boolean;
  name: string;
  socialSignOut(): Promise<void>; // users should be signed out of social media for the app at the same time that they log out of OCP
}

export type User = GuestUser | AuthenticatedUser;
