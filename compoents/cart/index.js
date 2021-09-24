import styles from './Cart.module.css'
const Cart = ({children})=>{
    return (
        <div className={styles.cartContainer}>
            {children}
        </div>
    )
}
export default Cart
