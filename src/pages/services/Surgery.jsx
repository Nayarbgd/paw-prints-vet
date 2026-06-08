import ServicePageLayout from '../../components/ServicePageLayout'

export default function Surgery() {
  return (
    <ServicePageLayout
      seoTitle="Vet Surgery Dubai | Spay, Neuter & Soft Tissue | Paw Prints"
      seoDescription="Veterinary surgery for cats and dogs in Arjan, Dubai. Spaying, neutering, soft tissue surgery, tumor removal, and orthopedic procedures at Paw Prints Clinic."
      badge="Surgical Care"
      title="Surgery"
      subtitle="Safe, compassionate surgical care performed by experienced veterinary surgeons with full pre- and post-operative support."
      description="Surgical intervention is sometimes the best or only option for your pet's health. At Paw Prints Clinic, Dr. Aisha Al Mansoori performs a wide range of routine and complex surgical procedures in our dedicated sterile operating theatre. Every surgical patient undergoes a comprehensive pre-anaesthetic evaluation including blood panel and physical exam. We use modern anaesthetic agents, continuous patient monitoring throughout, and provide detailed post-operative care instructions to support your pet's recovery at home."
      features={[
        'Spaying (ovariohysterectomy) for female cats and dogs',
        'Neutering (castration) for male cats and dogs',
        'Soft tissue surgery: mass and tumour removal',
        'Gastrointestinal foreign body removal (obstruction surgery)',
        'Wound repair and skin laceration closure',
        'Bladder stone (cystotomy) surgery',
        'Caesarean section (emergency and elective)',
        'Exploratory laparotomy for abdominal investigation',
        'Post-operative pain management and monitoring',
        'Dedicated recovery ward with nursing observation',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Safe Anaesthesia', desc: 'Our pre-op blood panels and continuous intraoperative monitoring minimize anaesthetic risk for every patient.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Sterile Environment', desc: 'Dedicated operating theatre with sterile draping, gowning, and instrument protocols meeting the highest clinical standards.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Expert Surgeon', desc: 'Dr. Aisha Al Mansoori has 8+ years of surgical experience in soft tissue and reproductive procedures for cats and dogs.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Full Recovery Support', desc: 'Detailed discharge instructions, pain management prescriptions, and follow-up appointments ensure smooth healing.' },
      ]}
      faqs={[
        { q: 'What age should I spay or neuter my pet?', a: 'For most dogs and cats, spaying or neutering is recommended between 4–6 months of age, before the first heat cycle for females. Some large dog breeds may benefit from waiting until 12–18 months. Our vets will advise on the optimal timing for your specific pet.' },
        { q: 'Is surgery safe for older pets?', a: 'Age is not a contraindication to surgery. We evaluate every senior patient individually with pre-anaesthetic blood work, chest X-rays if indicated, and an ECG for cardiac cases. If your senior pet is otherwise healthy, surgery carries a low and manageable risk.' },
        { q: 'How long is the recovery after surgery?', a: 'Recovery time varies by procedure. Routine neutering: 3–5 days. Spaying: 7–10 days. Soft tissue or abdominal surgery: 10–14 days. All surgical patients go home with a detailed care plan, pain medication, and an Elizabethan collar (e-collar) to protect the wound.' },
        { q: 'What should I do the night before surgery?', a: 'Your pet must be fasted from food for 8–12 hours before general anaesthesia (water is fine until 2 hours before). Do not give any regular medications without checking with us first. Drop off is typically arranged in the morning.' },
        { q: 'Will my pet be in pain during or after surgery?', a: 'All surgical patients receive pre-emptive analgesia (pain relief) before the procedure begins, intraoperative local anaesthetic blocks, and post-operative pain medication to take home. Pain management is a priority — we do not allow pets to suffer unnecessarily.' },
      ]}
      relatedServices={[
        { title: 'Lab & Blood Tests', desc: 'Pre-surgical blood panels required for all procedures.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'Emergency Care', desc: '24/7 emergency surgery capability for urgent cases.', to: '/services/emergency-care', icon: <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'General Checkups', desc: 'Post-surgical follow-up and wound check appointments.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
      ]}
      image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=800&auto=format&fit=crop"
      imageAlt="Veterinary surgery at Paw Prints Clinic Dubai - safe and compassionate care"
    />
  )
}
