import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Merci pour votre commande !</h2>
        <p className="email-msg">Un message de confirmation a été envoyer à boite mail  .</p>
        <p className="description">
          Pour plus de renseignement, contacter nous à cette addresse mail
          <a className="email" href="mailto:dannyhamici@gmail.com">
            dannyhamici@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Poursuivre les Achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success