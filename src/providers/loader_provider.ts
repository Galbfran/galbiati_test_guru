import { create } from 'zustand';

interface LoaderState {
  isLoading: boolean;
  isError?: boolean | null;
  isSuccess?: boolean | null;
  setLoading: (state: boolean) => void;
  setSuccess: (state: boolean) => void;
  setError: (state: boolean) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: false,
  isError: null,
  isSuccess: null,
  setLoading: (state) => set({ isLoading: state }),
  setSuccess: (state) => set({ isSuccess: state }),
  setError: (state) => set({ isError: state }),
}));