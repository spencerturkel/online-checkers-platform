export const renderSignInButton = (
  id: string,
  onFailure: () => void,
  onSignIn: (u: gapi.auth2.GoogleUser) => void,
) => {
  gapi.signin2.render(id, { onfailure: onFailure, onsuccess: onSignIn });
};

export const signOut = (): void => gapi.auth2.getAuthInstance().signOut();

export const listen = (f: (b: boolean) => void) =>
  gapi.auth2.getAuthInstance().isSignedIn.listen(f);
