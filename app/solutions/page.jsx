export const metadata = { title: 'Solutions' };

export default function SolutionsPage(){
  return (
    <div className="section">
      <div className="container">
        <h1>Solutions</h1>
        <p className="sub">Des cas d'usage concrets livr?s par Intelliwave.</p>
        <div className="grid cols-3">
          <div className="card">
            <h3>Support 1er niveau</h3>
            <p>R?ponses instantan?es aux questions fr?quentes, escalade intelligente vers vos ?quipes.</p>
          </div>
          <div className="card">
            <h3>Qualification de leads</h3>
            <p>Scoring, enrichissement et routage vers le bon commercial dans votre CRM.</p>
          </div>
          <div className="card">
            <h3>Onboarding client</h3>
            <p>Guides interactifs, checklists automatis?es, activation pilot?e par les donn?es.</p>
          </div>
          <div className="card">
            <h3>Knowledge copilot</h3>
            <p>Recherche s?mantique sur vos documents, r?ponses sourc?es et citations.</p>
          </div>
          <div className="card">
            <h3>Assistance interne</h3>
            <p>RH, IT, finance : lib?rez du temps aux ?quipes avec un hub conversationnel.</p>
          </div>
          <div className="card">
            <h3>Automatisation ops</h3>
            <p>Alerting, synchronisations et t?ches r?currentes orchestr?s par n8n.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
