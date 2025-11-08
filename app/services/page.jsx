export const metadata = { title: 'Services' };

export default function ServicesPage(){
  return (
    <div className="section">
      <div className="container">
        <h1>Services</h1>
        <p className="sub">Des offres modulaires pour chaque ?tape de votre projet IA & n8n.</p>
        <div className="grid cols-3">
          <div className="card">
            <h3>Strat?gie & cadrage</h3>
            <p>Audit des processus, identification des gisements d'automatisation, priorisation ROI.</p>
          </div>
          <div className="card">
            <h3>Design conversationnel</h3>
            <p>Persona, ton, intents, parcours et s?curit? : un assistant align? ? votre marque.</p>
          </div>
          <div className="card">
            <h3>D?veloppement chatbot</h3>
            <p>Assistants GPT/Claude/Mistral, RAG, outils et agents, connect?s ? vos syst?mes.</p>
          </div>
          <div className="card">
            <h3>Int?grations n8n</h3>
            <p>Workflows robustes, webhooks, orchestrations, connecteurs CRM/ERP/BI.</p>
          </div>
          <div className="card">
            <h3>D?ploiement multicanal</h3>
            <p>Widget web, WhatsApp Business, Slack, Intercom, HubSpot, Zendesk, etc.</p>
          </div>
          <div className="card">
            <h3>Mesure & optimisation</h3>
            <p>Tableaux de bord, A/B tests conversationnels, am?lioration continue des prompts.</p>
          </div>
        </div>

        <h2 style={{marginTop:32}}>Forfaits</h2>
        <div className="grid" style={{gridTemplateColumns:'1fr 1fr 1fr', gap:16}}>
          <div className="card">
            <h3>Starter</h3>
            <p className="muted">MVP en 2 semaines ? ? partir de 4?900?</p>
            <ul>
              <li>Chatbot web + base de connaissances</li>
              <li>3 int?grations n8n</li>
              <li>Tableau de bord basique</li>
            </ul>
          </div>
          <div className="card">
            <h3>Growth</h3>
            <p className="muted">Scale-up ? ? partir de 12?900?</p>
            <ul>
              <li>Multicanal (WhatsApp/Slack)</li>
              <li>RAG avanc? + analytics</li>
              <li>Connecteurs CRM/ERP</li>
            </ul>
          </div>
          <div className="card">
            <h3>Enterprise</h3>
            <p className="muted">Sur-mesure ? Sur devis</p>
            <ul>
              <li>S?curit? & conformit? avanc?es</li>
              <li>Int?grations SI complexes</li>
              <li>Accompagnement changement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
