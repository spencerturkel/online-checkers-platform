export const delay = (timeMilliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, timeMilliseconds));
