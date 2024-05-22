import { create } from "zustand";

export const INITIAL_STATE = {
    language: "EN",
};

/**
 * User store for managing user state.
 * @typedef {Object} UserStore
 * @property {string} language - The selected language.
 * @property {function} setLanguageState - Function to set the language state.
 */

/**
 * Create and initialize the user store.
 * @param {function} set - Function to set the user store state.
 * @returns {UserStore} The user store object.
 */
export const useUserStore = create((set) => ({
    ...INITIAL_STATE,
    setLanguageState: (language) => set({ language }),
}));