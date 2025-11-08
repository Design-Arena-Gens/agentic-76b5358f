export default function HomePage(){
  return (
    <div className="hero">
      <div className="bg-waves" aria-hidden>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="w" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0" stopColor="#7c3aed"/>
              <stop offset="1" stopColor="#06b6d4"/>
            </linearGradient>
          </defs>
          <path d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,208C672,192,768,192,864,208C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="url(#w)"/>
        </svg>
      </div>
      <div className="container">
        <p className="badge">Agence d'automatisation AI & n8n</p>
        <h1>Des chatbots sur mesure qui propulsent votre croissance</h1>
        <p className="lead">Intelliwave con?oit des assistants IA personnalis?s, connect?s ? vos outils via n8n, pour automatiser l'acquisition, le support et les op?rations.</p>
        <div className="actions">
          <a className="btn btn-primary" href="/contact">Parler ? un expert</a>
          <a className="btn" href="/services">D?couvrir nos services</a>
        </div>
        <div className="badges">
          <span className="badge">GPT-4o / Claude 3.5 / Mistral</span>
          <span className="badge">Int?grations n8n + CRM/BI</span>
          <span className="badge">D?ploiement web, WhatsApp, Slack</span>
        </div>

        <div className="kpis">
          <div className="kpi"><div style={{fontSize:24,fontWeight:700}}>?35%</div><div className="muted">Co?ts de support</div></div>
          <div className="kpi"><div style={{fontSize:24,fontWeight:700}}>+28%</div><div className="muted">Conversion leads</div></div>
          <div className="kpi"><div style={{fontSize:24,fontWeight:700}}>24/7</div><div className="muted">Disponibilit?</div></div>
          <div className="kpi"><div style={{fontSize:24,fontWeight:700}}>10j</div><div className="muted">Mise en production</div></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2>Pourquoi choisir Intelliwave ?</h2>
          <p className="sub">Nous allions design conversationnel, int?grations robustes et gouvernance des donn?es.</p>
          <div className="grid cols-3">
            <div className="card">
              <h3>Chatbots multicanaux</h3>
              <p>Web, WhatsApp, Messenger, Slack : vos clients interagissent o? ils pr?f?rent.</p>
            </div>
            <div className="card">
              <h3>Int?grations n8n</h3>
              <p>Reliez CRM, ERP, BI et bases de connaissances pour des r?ponses contextualis?es.</p>
            </div>
            <div className="card">
              <h3>Personnalisation avanc?e</h3>
              <p>RAG, r?gles m?tier, fine-tuning et garde-fous adapt?s ? votre organisation.</p>
            </div>
            <div className="card">
              <h3>Analytics & am?lioration continue</h3>
              <p>Suivez l'impact : CSAT, r?solution, temps gagn? et feedbacks utilisateurs.</p>
            </div>
            <div className="card">
              <h3>S?curit? & conformit?</h3>
              <p>Isolation des donn?es, contr?le d'acc?s, h?bergement conforme aux standards.</p>
            </div>
            <div className="card">
              <h3>Time-to-value ?clair</h3>
              <p>Prototypes en jours, industrialisation rapide gr?ce ? nos acc?l?rateurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2>Pr?t ? acc?l?rer avec l'IA ?</h2>
          <p className="sub">Nous cr?ons votre assistant sur mesure. D?monstration gratuite en 30 minutes.</p>
          <a className="btn btn-primary" href="/contact">R?server un cr?neau</a>
        </div>
      </section>
    </div>
  );
}
