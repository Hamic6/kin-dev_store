import React from 'react';
import Link from 'next/link';


/** Ici, j'importe les icones nécessaire pour le web shop  */
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
/**Dans le span, totalQuantities on affiche de manière dynamique le nombre d'article dans le panier. 
 * On modifier le logo du panier qui s'appele AioutlineShoping */
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">KIN DEV STORE</Link>
      </p>
    
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
    /** Ici, j'implémente une carte qui enregistre les achats effectuer par les différents utilisateurs */
  )
}

export default Navbar