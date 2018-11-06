export interface User {
  isGuest: boolean;
  isPremium: boolean;
  name: string;
  signOut(): Promise<void>;
}

export const guestUser: User = {
  isGuest: true,
  isPremium: false,
  name: 'Guest',
  signOut: () => Promise.resolve(),
};
