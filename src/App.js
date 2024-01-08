import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [d, setD] = useState('');
  const [s, setS] = useState('');
  const [h, setH] = useState('');
  const [q, setQ] = useState('');
  const [n, setN] = useState('');
  const [errors, setErrors] = useState({
    d: '',
    s: '',
    h: ''
  });

  const calculate = () => {
    // Reset errors
    setErrors({
      d: '',
      s: '',
      h: ''
    });

    // Validate inputs
    if (!d) {
      setErrors((prevErrors) => ({ ...prevErrors, d: 'Veuillez saisir une valeur pour D.' }));
      return;
    }
    if (!s) {
      setErrors((prevErrors) => ({ ...prevErrors, s: 'Veuillez saisir une valeur pour S.' }));
      return;
    }
    if (!h) {
      setErrors((prevErrors) => ({ ...prevErrors, h: 'Veuillez saisir une valeur pour H.' }));
      return;
    }

    // Perform calculation
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
          type="text"
          value={d}
          onChange={(e) => setD(e.target.value)}
          onKeyPress={(e) => {
            if (isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }}
          className={`form-control ${errors.d && 'border border-danger'}`}
          required
        />
        {errors.d && <small className="text-danger">{errors.d}</small>}
      </div>
        
      <div className="form-group">
        <label>Donnez le coût pour passer une commande S</label>
        <input
          type="text"
          value={s}
          onChange={(e) => setS(e.target.value)}
          onKeyPress={(e) => {
            if (isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }}
          className={`form-control ${errors.s && 'border border-danger'}`}
          required
        />
        {errors.s && <small className="text-danger">{errors.s}</small>}
      </div>
        
      <div className="form-group">
        <label>Donnez le coût de possession d'une unité par an H</label>
        <input
          type="text"
          value={h}
          onChange={(e) => setH(e.target.value)}
          onKeyPress={(e) => {
            if (isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }}
          className={`form-control ${errors.h && 'border border-danger'}`}
          required
        />
        {errors.h && <small className="text-danger">{errors.h}</small>}
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
          style={{ marginTop: '10px' }}
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
