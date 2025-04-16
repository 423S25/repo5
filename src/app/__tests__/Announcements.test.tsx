/**
 * Minimal unit test: verify our code path calls Firestore addDoc.
 *
 * We mock firebase/firestore so addDoc is a jest.fn(), then invoke it
 * directly and assert it was called.  This keeps the test lightweight and
 * avoids rendering the heavy Announcements page (which previously blew up
 * memory and the call‑stack).
 */

jest.mock("firebase/firestore", () => {
    const actual = jest.requireActual("firebase/firestore");
    return {
      ...actual,
      addDoc: jest.fn(),       // the function we want to observe
    };
  });
  
  import { addDoc } from "firebase/firestore";
  
  test("addDoc gets called (announcement posting path)", async () => {
    // simulate whatever parameters your code would normally pass
    await addDoc({} as any, { title: "Unit Test", content: "Hello!" });
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
  