const node = typeof window === 'undefined';

export const environment = {
  node,
  browser: node === false,
  production: false
};
