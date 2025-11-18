import { create } from "zustand";
import type { User } from "../Types/Users";

type UserState = {
    isLogged: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
};

const useUserStore = create<UserState>((set) => ({
    isLogged: false,
    user: null,
    login: (user: User) => set({ isLogged: true, user }),
    logout: () => set({ isLogged: false, user: null })
}));

export default useUserStore;
