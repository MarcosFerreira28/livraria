import styles from "./styles.module.css";
import useCartStore from "../../stores/CartStore";

export default function Cart(){
    
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const total = cart.reduce((acc, livro) => acc + livro.preco, 0);

    return (
        <div className={styles.cartContainer}>
            <h1 className={styles.cartTitle}>Carrinho de Compras</h1>
            <ul className={styles.cartList}>
                {cart.map((livro, indice) => (
                    <li key={indice} className={styles.cartItem}>
                        <span>{livro.titulo} - R$ {livro.preco.toFixed(2)}</span>
                        <button className={styles.removeButton} onClick={() => removeFromCart(livro.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h2 className={styles.cartTotal}>Total: R$ {total.toFixed(2)}</h2>
        </div>
    );
}