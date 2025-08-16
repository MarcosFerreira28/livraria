import type { Livro } from "../Types/Livro";

export default interface CartStore {
    availableLivros: Livro[];
    cart: Livro[];
    addToCart: (livro: Livro) => void;
    removeFromCart: (id: number) => void;
}