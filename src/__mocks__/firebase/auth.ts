export const onAuthStateChanged = (_auth: any, cb: any) => {
    cb(null);       // default: not logged in
    return () => {};
  };
  
  export const getAuth = () => ({});
  export const signOut = jest.fn();
  export const browserLocalPersistence = {};
  export const setPersistence = jest.fn();
  export const signInWithEmailAndPassword = jest.fn();
  export const GoogleAuthProvider = jest.fn();
  export const signInWithPopup = jest.fn();
  