import { create } from "zustand";

interface TaskCreationState {
  currentStep: number;
  title: string;
  date: string;
  timeSlot: string;
  location: string;
  description: string;
  price: string;
  category: string;
  userIdStore: string;

  setCurrentStep: (step: number) => void;
  setTitle: (title: string) => void;
  setDate: (date: string) => void;
  setTimeSlot: (timeSlot: string) => void;
  setLocation: (location: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: string) => void;
  setCategory: (category: string) => void;
  setUserIdStore: (userId: string) => void;

  reset: () => void;
}

export const useTaskCreationStore = create<TaskCreationState>((set) => ({
  currentStep: 1,
  title: "",
  date: "",
  timeSlot: "",
  location: "",
  description: "",
  price: "",
  category: "",
  userIdStore: "",

  setCurrentStep: (step: number) => set({ currentStep: step }),
  setTitle: (title: string) => set({ title }),
  setDate: (date: string) => set({ date }),
  setTimeSlot: (timeSlot: string) => set({ timeSlot }),
  setLocation: (location: string) => set({ location }),
  setDescription: (description: string) => set({ description }),
  setPrice: (price: string) => set({ price }),
  setCategory: (category: string) => set({ category }),
  setUserIdStore: (userIdStore: string) => set({ userIdStore }),

  reset: () =>
    set({
      currentStep: 1,
      title: "",
      date: "",
      timeSlot: "",
      location: "",
      description: "",
      price: "",
      category: "",
      userIdStore: "",
    }),
}));
