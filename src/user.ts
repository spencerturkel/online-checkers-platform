export interface User {
  isGuest: boolean;
  isPremium: boolean;
  name: string;
  signOut(): Promise<void>;
}
