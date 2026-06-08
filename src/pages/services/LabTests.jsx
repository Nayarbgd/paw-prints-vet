import ServicePageLayout from '../../components/ServicePageLayout'

export default function LabTests() {
  return (
    <ServicePageLayout
      seoTitle="Vet Lab & Blood Tests Dubai | On-Site Diagnostics | Paw Prints"
      seoDescription="On-site blood tests, virus testing, and lab diagnostics for cats and dogs in Arjan, Dubai. Fast results with advanced equipment at Paw Prints Veterinary Clinic."
      badge="Diagnostics"
      title="Lab & Blood Tests"
      subtitle="Rapid on-site diagnostics that give our vets the information needed to make accurate treatment decisions — often within the same visit."
      description="Accurate diagnosis is the foundation of effective veterinary medicine. Paw Prints Clinic operates a fully equipped on-site laboratory, enabling us to process blood tests, urine analysis, fecal checks, and rapid disease screening kits within the same appointment in most cases. Our diagnostic equipment includes a state-of-the-art haematology and biochemistry analyzer, plus microscopy for parasite and cytology assessment. Faster results mean faster treatment decisions for your pet."
      features={[
        'Complete Blood Count (CBC) — red cells, white cells, platelets',
        'Comprehensive biochemistry panel — liver, kidney, pancreas function',
        'Thyroid hormone testing (T4) for senior cats and dogs',
        'Rapid parvovirus and feline panleukopenia antigen tests',
        'Feline Leukemia (FeLV) and Feline Immunodeficiency Virus (FIV) tests',
        'Canine Leishmaniasis, Ehrlichia, Anaplasma, and Brucellosis screening',
        'Urinalysis and urine culture for kidney and bladder health',
        'Fecal flotation and direct smear for intestinal parasites',
        'Cytology of skin lesions, ear discharge, and mass aspirates',
        'Pre-anaesthetic blood panels before any surgical procedure',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Same-Day Results', desc: 'Most blood panels are processed in-house within 30–60 minutes, allowing diagnosis and treatment in a single visit.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Accurate Diagnosis', desc: 'Advanced analysers and microscopy give our vets precise data to guide treatment rather than guessing.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Disease Screening', desc: 'Rapid antigen tests detect viral and vector-borne diseases within minutes — critical for infectious conditions.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Pre-Surgery Safety', desc: 'Pre-anaesthetic blood work confirms organ function and reduces anaesthetic risk for every procedure we perform.' },
      ]}
      faqs={[
        { q: 'Does my pet need to fast before a blood test?', a: 'For most routine blood panels, we recommend fasting for 4–6 hours before the appointment to get the most accurate biochemistry readings (especially triglycerides and glucose). Water is always fine. Please confirm at booking.' },
        { q: 'How long does it take to get blood test results?', a: 'Our in-house analyser produces most complete blood counts and biochemistry panels within 30–60 minutes. Rapid disease screening tests (parvo, FeLV, FIV, tick diseases) provide results in 10–15 minutes.' },
        { q: 'At what age should blood testing begin?', a: 'We recommend including basic blood work from age 5 for dogs and age 7 for cats as part of annual senior wellness screenings. Earlier testing is done when clinical signs indicate potential illness at any age.' },
        { q: 'Can a blood test tell if my pet has cancer?', a: 'Blood tests can detect abnormalities commonly associated with cancer (anaemia, abnormal white cells, elevated liver enzymes) and can support a cancer diagnosis, but a definitive diagnosis usually requires biopsy or imaging. Our team will guide you through the appropriate diagnostic pathway.' },
        { q: 'How much does a blood test cost at Paw Prints?', a: 'Pricing depends on the specific panel required. A basic wellness panel costs less than a comprehensive senior screen or specialized disease test. We provide transparent pricing before every test with no hidden laboratory fees.' },
      ]}
      relatedServices={[
        { title: 'General Checkups', desc: 'Blood tests combined with full wellness examination.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Emergency Care', desc: 'Emergency labs available 24/7 for critical diagnostics.', to: '/services/emergency-care', icon: <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Surgery', desc: 'Pre-operative blood panels required before all procedures.', to: '/services/surgery', icon: <polygon points="12 2 2 22 22 22" strokeWidth="2" strokeLinejoin="round"/> },
      ]}
      image="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800&auto=format&fit=crop"
      imageAlt="On-site veterinary lab and blood testing at Paw Prints Clinic Dubai"
    />
  )
}
