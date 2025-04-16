export const addDoc    = jest.fn();
export const deleteDoc = jest.fn();
export const getDocs   = jest.fn(() => ({ docs: [] }));
export const collection = jest.fn();
export const doc        = jest.fn();
export const serverTimestamp = jest.fn();
export const Timestamp = { now: () => ({ seconds: 0 }) };
export const getFirestore = jest.fn();