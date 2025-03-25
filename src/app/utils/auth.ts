import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../config/firebase';

export const login = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const logout = () => signOut(auth);

export const getCurrentUser = () => auth.currentUser;

export const isLoggedIn = () => auth.currentUser !== null;
