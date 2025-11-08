'use client';

import { useState } from 'react';

export default function ContactPage(){
  const [status, setStatus] = useState('idle');

  async function onSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('loading');
    try{
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
      if(!res.ok) throw new Error('Erreur');
      setStatus('success');
      form.reset();
    }catch(err){
      setStatus('error');
    }
  }

  return (
    <div className="section">
      <div className="container">
        <h1>Contact</h1>
        <p className="sub">Dites-nous en plus sur votre besoin. Nous revenons vers vous sous 24h.</p>
        <form className="form" onSubmit={onSubmit}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
            <input className="input" name="nom" placeholder="Nom" required />
            <input className="input" type="email" name="email" placeholder="Email professionnel" required />
          </div>
          <input className="input" name="societe" placeholder="Soci?t?" />
          <select className="select" name="budget" defaultValue="">
            <option value="" disabled>Budget estim?</option>
            <option>- 5k?</option>
            <option>5k? - 15k?</option>
            <option>15k? - 50k?</option>
            <option>50k? +</option>
          </select>
          <textarea className="textarea" name="message" placeholder="D?crivez votre projet (cas d'usage, outils, ?ch?ance)" required />
          <label className="muted" style={{display:'flex', gap:8, alignItems:'center'}}>
            <input type="checkbox" required /> J'accepte d'?tre contact? par Intelliwave.
          </label>
          <div className="form-actions">
            <button className="btn btn-primary" disabled={status==='loading'}>
              {status==='loading' ? 'Envoi?' : 'Envoyer ma demande'}
            </button>
            {status==='success' && <span className="muted">Merci ! Nous vous r?pondrons tr?s vite.</span>}
            {status==='error' && <span className="muted">Une erreur est survenue. R?essayez.</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
