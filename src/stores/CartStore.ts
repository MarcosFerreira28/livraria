import axios from "axios";
import { create } from "zustand";
import type CartStore from "../Interfaces/CartStore";

const livros = await axios.get("http://localhost:3001/livros");

const useCartStore = create<CartStore>((set) => (
    {
        availableLivros: livros.data,
        cart: [],
        addToCart: (livro) => set((state) => ({ cart: [...state.cart, livro]})),
        removeFromCart: (id) => set((state) => {
            const index = state.cart.findIndex((livro) => livro.id === id);
            if (index === -1) return { cart: state.cart };
            return {
                cart: [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index + 1)
                ]
            };
        })
    }
))

export default useCartStore;