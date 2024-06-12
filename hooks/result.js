import { create } from "zustand";

const useStore = create((set) => ({
    fetchedResults: [],
  addFetchedResult: (fetchResult) =>
    set((state) => ({ fetchedResults: [...state.fetchedResults, fetchResult] })),
}));

export default useStore;
