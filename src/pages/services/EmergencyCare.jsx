import ServicePageLayout from '../../components/ServicePageLayout'

export default function EmergencyCare() {
  return (
    <ServicePageLayout
      seoTitle="24/7 Emergency Vet Dubai | Paw Prints Clinic Arjan"
      seoDescription="24-hour emergency veterinary care for cats and dogs in Arjan, Dubai. Trauma, poisoning, breathing difficulties — call 054 433 7908 any time. We never close."
      badge="Open 24/7"
      title="Emergency Care"
      subtitle="When every second counts, Paw Prints is ready. Immediate triage, critical care, and life-saving treatment available around the clock."
      description="Veterinary emergencies do not follow a schedule. That is why Paw Prints Clinic operates 24 hours a day, 7 days a week, 365 days a year — including all UAE public holidays. Our emergency department is equipped with an intensive care unit, oxygen therapy chambers, rapid fluid pumps, cardiac monitors, and a full on-site diagnostic lab. If your pet shows any signs of distress, do not wait — call us immediately at 054 433 7908 and our triage team will guide you."
      features={[
        '24/7/365 emergency reception — always staffed',
        'Immediate triage upon arrival for critical cases',
        'Oxygen therapy chambers for respiratory distress',
        'Rapid IV fluid administration for shock and dehydration',
        'Emergency surgery capability for trauma and obstruction',
        'Cardiac monitoring and ECG for heart emergencies',
        'Toxicology management for poisoning cases',
        'Overnight intensive care ward with continuous monitoring',
        'Direct line to senior vet for after-hours phone triage: 054 433 7908',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Never Closes', desc: 'Open every night, every weekend, and every public holiday. We are always here when you need us most.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Immediate Triage', desc: 'Critical patients are assessed within minutes of arrival — no waiting room delays for life-threatening cases.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'ICU-Level Equipment', desc: 'Oxygen boxes, IV pumps, cardiac monitors, and full surgical suite all on-site for immediate use.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Overnight Monitoring', desc: 'Critically ill patients can be hospitalized in our 24-hour ward with continuous nursing care.' },
      ]}
      faqs={[
        { q: 'What counts as a veterinary emergency?', a: 'Seek emergency care immediately for: difficulty breathing, collapse or loss of consciousness, suspected poisoning (chocolate, xylitol, plants, medications), uncontrolled bleeding, seizures, inability to urinate (especially male cats), severe vomiting or diarrhea, suspected broken bones or trauma after an accident, or any sudden dramatic change in behavior.' },
        { q: 'Should I call before coming in for an emergency?', a: 'Yes, if possible — calling ahead at 054 433 7908 allows our team to prepare the right equipment before you arrive. Our phone triage team can also guide you on first aid steps to stabilize your pet during transport.' },
        { q: 'How much does emergency care cost?', a: 'Emergency visit fees vary depending on the treatment required. We always provide a cost estimate before proceeding with any treatment and work transparently with you on pricing. We never delay life-saving care for financial reasons.' },
        { q: 'Can I bring any animal in for emergency care?', a: 'Paw Prints specializes in cats and dogs. If you have an exotic pet emergency, please call us — we will do our best to assist or refer you to the appropriate specialist immediately.' },
        { q: 'My pet ate something toxic — what should I do right now?', a: 'Call us immediately at 054 433 7908. Do not induce vomiting unless specifically instructed by a vet. Try to note what was consumed, the estimated quantity, and the time of ingestion. Bring the packaging if possible.' },
      ]}
      relatedServices={[
        { title: 'Surgery', desc: 'Emergency surgical capability for trauma and obstructions.', to: '/services/surgery', icon: <polygon points="12 2 2 22 22 22" strokeWidth="2" strokeLinejoin="round"/> },
        { title: 'Lab & Blood Tests', desc: 'Rapid on-site diagnostics to support emergency decisions.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'General Checkups', desc: 'Post-emergency follow-up care and monitoring.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
      ]}
      image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
      imageAlt="Emergency veterinary care at Paw Prints Clinic Dubai 24/7"
    />
  )
}
