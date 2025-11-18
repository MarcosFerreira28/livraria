import { create } from "zustand";

type UserState = {
    isLogged: boolean;
    user: any | null;
    login: (user: any) => void;
    logout: () => void;
};

const useUserStore = create<UserState>((set) => ({
    isLogged: false,
    user: null,
    login: (user: any) => set({ isLogged: true, user }),
    logout: () => set({ isLogged: false, user: null })
}));

export default useUserStore;
