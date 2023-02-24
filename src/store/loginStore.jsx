import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let LoginStore = (set) => ({
  username: "",
  setUsername: (param) =>
    set(() => ({
      username: param,
    })),
  accessToken: "",
  setAccessToken: (param) =>
    set(() => ({
      accessToken: param,
    })),
  refreshToken: "",
  setRefreshToken: (param) =>
    set(() => ({
      refreshToken: param,
    }))
});

LoginStore = devtools(LoginStore);
export const useLoginStore = create(
  persist(LoginStore, {
    name: "user",
  })
);

export default useLoginStore;