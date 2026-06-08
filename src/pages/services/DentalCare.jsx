import ServicePageLayout from '../../components/ServicePageLayout'

export default function DentalCare() {
  return (
    <ServicePageLayout
      seoTitle="Pet Dental Care Dubai | Scaling & Cleaning | Paw Prints Clinic"
      seoDescription="Professional pet dental scaling, cleaning, extraction, and oral health diagnostics in Arjan, Dubai. Prevent periodontal disease with expert cat and dog dental care."
      badge="Oral Health"
      title="Dental Care"
      subtitle="Professional dental scaling, cleaning, and treatment to keep your pet's teeth healthy and prevent painful periodontal disease."
      description="By age 3, over 70% of cats and 80% of dogs show signs of periodontal (gum) disease. Left untreated, dental disease causes chronic pain, tooth loss, and can damage your pet's heart, kidneys, and liver as bacteria enter the bloodstream. At Paw Prints Clinic, our dental specialist Dr. David Chen performs comprehensive oral examinations and professional ultrasonic scaling under anaesthesia to remove tartar buildup above and below the gum line, followed by polishing to protect the enamel surface."
      features={[
        'Full oral examination under sedation or general anaesthesia',
        'Ultrasonic scaling (above and below the gum line)',
        'Tooth polishing to prevent future tartar adhesion',
        'Dental radiography to assess roots and jawbone health',
        'Extraction of fractured, infected, or mobile teeth',
        'Gingival (gum) surgery for advanced disease',
        'Oral mass biopsy and assessment',
        'At-home dental care coaching and product recommendations',
        'Brushing technique demonstration and toothpaste selection',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Pain Relief', desc: 'Dental disease is chronically painful. Proper treatment dramatically improves your pet\'s comfort and quality of life.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Prevent Organ Damage', desc: 'Treating dental disease protects your pet\'s heart, kidneys, and liver from systemic bacterial infection.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Expert Specialist', desc: 'Dr. David Chen specializes in veterinary dentistry with 6+ years of advanced dental and internal medicine experience.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Longer Life', desc: 'Studies show pets with good dental health live an average of 2–4 years longer than those with untreated oral disease.' },
      ]}
      faqs={[
        { q: 'How do I know if my pet needs a dental cleaning?', a: 'Signs include: bad breath (the most common indicator), yellow or brown deposits on teeth, drooling, reluctance to eat hard food, pawing at the mouth, swollen or bleeding gums, and loose or missing teeth. We recommend annual dental checks for all adult pets.' },
        { q: 'Is general anaesthesia safe for dental procedures?', a: 'Our pre-anaesthesia protocol includes a full physical exam, blood panel, and IV fluid support during the procedure. Anaesthesia is very safe when properly administered by our qualified team. We use modern anaesthetic agents and monitor all vital signs continuously.' },
        { q: 'How long does a dental cleaning take?', a: 'A routine scaling and polish typically takes 45–90 minutes. If extractions or more complex work is needed, the procedure may take 2–3 hours. You can drop off in the morning and collect your pet the same afternoon in most cases.' },
        { q: 'My pet is older — is dental treatment still safe?', a: 'Age alone is not a barrier to dental treatment. We perform thorough pre-anaesthetic blood work on senior pets to ensure they are safe candidates. The risk of untreated dental disease usually far outweighs the low anaesthetic risk in healthy seniors.' },
        { q: 'How can I maintain my pet\'s teeth at home?', a: 'Daily brushing with a pet-safe toothpaste is the gold standard. We also recommend dental chews approved by the Veterinary Oral Health Council (VOHC), dental rinses, and special prescription dental diets. Our team will show you the safest technique for your individual pet.' },
      ]}
      relatedServices={[
        { title: 'General Checkups', desc: 'Annual oral health assessment as part of wellness exams.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Lab & Blood Tests', desc: 'Pre-anaesthetic blood panel to confirm surgery safety.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'Surgery', desc: 'Advanced surgical extractions and oral mass removal.', to: '/services/surgery', icon: <polygon points="12 2 2 22 22 22" strokeWidth="2" strokeLinejoin="round"/> },
      ]}
      image="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=800&auto=format&fit=crop"
      imageAlt="Veterinary dental care and teeth cleaning for pets at Paw Prints Dubai"
    />
  )
}
