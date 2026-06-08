import ServicePageLayout from '../../components/ServicePageLayout'

const checkIcon = <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>

export default function GeneralCheckups() {
  return (
    <ServicePageLayout
      seoTitle="General Pet Checkups Dubai | Paw Prints Veterinary Clinic"
      seoDescription="Routine wellness exams for cats and dogs in Arjan, Dubai. Physical evaluations, weight management, and preventative care at Paw Prints Clinic. Book today."
      badge="Wellness Care"
      title="General Checkups"
      subtitle="Preventative wellness exams that catch health problems early and keep your cat or dog thriving year-round."
      description="A routine wellness exam is the single most effective way to maintain your pet's long-term health. During a general checkup at Paw Prints Clinic, our vets perform a head-to-tail physical evaluation, review your pet's vaccination history, assess body condition score, and address any behavioral or dietary concerns you have. We recommend annual exams for adult pets and bi-annual exams for seniors (7+ years) or puppies and kittens under 1 year."
      features={[
        'Complete head-to-tail physical examination',
        'Body weight assessment and body condition scoring (BCS)',
        'Ear, eye, teeth, and coat health review',
        'Heart and lung auscultation',
        'Lymph node and abdominal palpation',
        'Vaccination record review and booster planning',
        'Parasite prevention recommendations (fleas, ticks, worms)',
        'Behavioral and dietary advice tailored to your pet',
        'Health certificate issuance if required',
      ]}
      benefits={[
        { icon: checkIcon, title: 'Early Detection', desc: 'Catch conditions like diabetes, kidney disease, or tumors before they become serious and costly.' },
        { icon: checkIcon, title: 'Tailored Advice', desc: 'Get personalized nutrition, activity, and preventative care recommendations specific to your pet.' },
        { icon: checkIcon, title: 'Vaccine Planning', desc: 'We manage your pet\'s entire booster schedule so you never miss a critical vaccination.' },
        { icon: checkIcon, title: 'Peace of Mind', desc: 'Leave every visit knowing your pet\'s health status has been professionally assessed.' },
      ]}
      faqs={[
        { q: 'How often should I bring my cat or dog for a checkup?', a: 'Healthy adult pets (1–7 years) benefit from one exam per year. Senior pets (7+), puppies, and kittens should visit every 6 months, as health can change faster at these life stages.' },
        { q: 'What should I bring to the checkup?', a: 'Bring any previous vaccination records, a list of current medications or supplements, a stool sample if your pet has had recent digestive issues, and any notes on behavioral changes you\'ve noticed.' },
        { q: 'Is fasting required before a general checkup?', a: 'Not typically, unless a blood test or specific diagnostic procedure is planned. If blood work is likely, we recommend fasting for 4–6 hours beforehand. We will inform you when booking.' },
        { q: 'How long does a checkup take?', a: 'A standard wellness exam takes about 25–40 minutes. We never rush consultations — our vets take time to answer all your questions thoroughly.' },
        { q: 'Can I book a checkup for an anxious pet?', a: 'Absolutely. We are trained in fear-free handling techniques and take extra care with anxious or stressed animals. Please let us know when booking so we can prepare the calmest environment.' },
      ]}
      relatedServices={[
        { title: 'Vaccinations', desc: 'Schedule or update your pet\'s core vaccine boosters.', to: '/services/vaccinations', icon: <><path d="M18 2v4M6 2v4M2 10h20" strokeWidth="2"/></> },
        { title: 'Lab & Blood Tests', desc: 'On-site diagnostics for comprehensive health screening.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'Nutrition & Diet', desc: 'Personalized dietary plans to keep your pet at a healthy weight.', to: '/services/nutrition', icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 8v8M8 12h8" strokeWidth="2"/></> },
      ]}
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
      imageAlt="Vet performing general checkup on a dog at Paw Prints Clinic Dubai"
    />
  )
}
