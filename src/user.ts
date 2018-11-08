export interface User {
  id: string;
  isGuest: boolean;
  isPremium: boolean;
  name: string;
  signOut(): Promise<void>;
}

export const guestUser: User = {
  id: '',
  isGuest: true,
  isPremium: false,
  name: 'Guest',
  signOut: () => Promise.resolve(),
};
