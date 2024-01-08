import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [d, setD] = useState('');
  const [s, setS] = useState('');
  const [h, setH] = useState('');
  const [q, setQ] = useState('');
  const [n, setN] = useState('');

  const calculate = () => {
    const demand = parseFloat(d);
    const orderCost = parseFloat(s);
    const holdingCost = parseFloat(h);

    const optimalQuantity = Math.sqrt((2 * orderCost * demand) / holdingCost);
    const optimalNumberOfOrders = demand / optimalQuantity;

    setQ(optimalQuantity.toFixed(2));
    setN(optimalNumberOfOrders.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="bg-light p-4 rounded shadow">
        <h1 className="text-center mb-4">Bienvenue à notre projet de calcul de l'optimal</h1>
        <h3 className="text-center mb-4">Réalisé par Rachid GHAZLI</h3>

        <div className="form-group">
          <label>Donnez la demande annuelle en produit D</label>
          <input
            type="number"
            value={d}
            onChange={(e) => setD(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Donnez le coût pour passer une commande S</label>
          <input
            type="number"
            value={s}
            onChange={(e) => setS(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Donnez le coût de possession d'une unité par an H</label>
          <input
            type="number"
            value={h}
            onChange={(e) => setH(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>La quantité optimale Q est</label>
          <input 
            type="text" 
            value={q} 
            className="form-control" 
            readOnly 
          />
        </div>

        <button
          type="button"
          onClick={calculate}
          className="btn btn-outline-primary btn-block"
          style={{marginTop:'10px'}}
        >
          Calcul de Q et N
        </button>

        <div className="form-group mt-4">
          <label>Le nombre de commandes optimal N est</label>
          <input 
            type="text" 
            value={n} 
            className="form-control" 
            readOnly 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
