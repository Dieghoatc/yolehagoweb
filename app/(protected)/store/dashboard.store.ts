import {create} from "zustand";

interface DashboardStore {
    userIdStore: string;
    setUserIdStore: (userId: string) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    userIdStore: "",
    setUserIdStore: (userId: string) => set({ userIdStore: userId }),

    reset: () => set({ userIdStore: "" }),
}));
