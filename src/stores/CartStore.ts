import axios from "axios";
import { create } from "zustand";
import type CartStore from "../Interfaces/CartStore";

const livros = await axios.get("http://localhost:3001/livros");

const useCartStore = create<CartStore>((set) => (
    {
        availableLivros: livros.data,
        cart: [],
        addToCart: (livro) => set((state) => ({ cart: [...state.cart, livro]})),
        removeFromCart: (id) => set((state) => ({cart: state.cart.filter((livro) => livro.id !== id)}))
    }
))

export default useCartStore;