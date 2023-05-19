import create from "zustand";
import { devtools, persist } from "zustand/middleware";


let GoogleStore = (set) => ({
  usernameGoogle: "",
  setUsernameGoogle: (param) =>
    set(() => ({
      usernameGoogle: param,
    })),
  userPhoto: "",
  setUserPhoto: (param) =>
    set(() => ({
      userPhoto: param,
    }))
});

GoogleStore = devtools(GoogleStore);
export const useGoogleStore = create(
  persist(GoogleStore, {
    name: "user",
  })
);

export default useGoogleStore;