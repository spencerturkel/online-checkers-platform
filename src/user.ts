export interface User {
  isPremium: boolean;
  name: string;
  signOut(): Promise<void>;
}
