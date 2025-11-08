import { NextResponse } from 'next/server';

export async function POST(req){
  try{
    const data = await req.json();
    const { nom, email, societe, budget, message } = data || {};
    if(!nom || !email || !message){
      return NextResponse.json({ ok:false, error:'Champs requis manquants' }, { status: 400 });
    }
    console.log('[CONTACT] Nouvelle demande', { nom, email, societe, budget, messageLength: String(message).length, at: new Date().toISOString() });
    // Int?gration email / CRM ici si n?cessaire.
    return NextResponse.json({ ok:true });
  }catch(err){
    return NextResponse.json({ ok:false, error:'Erreur serveur' }, { status: 500 });
  }
}
