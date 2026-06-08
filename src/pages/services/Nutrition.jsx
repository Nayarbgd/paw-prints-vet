import ServicePageLayout from '../../components/ServicePageLayout'

export default function Nutrition() {
  return (
    <ServicePageLayout
      seoTitle="Pet Nutrition & Diet Advice Dubai | Paw Prints Clinic"
      seoDescription="Veterinary nutrition counselling for cats and dogs in Dubai. Custom diet plans, weight management, hypoallergenic food recommendations at Paw Prints Clinic Arjan."
      badge="Clinical Nutrition"
      title="Nutrition & Diet"
      subtitle="Evidence-based dietary planning to help your cat or dog achieve and maintain optimal body weight, digestion, and lifelong vitality."
      description="Nutrition is medicine. What your pet eats every day directly affects their weight, coat quality, digestion, immune system, joint health, and lifespan. At Paw Prints Clinic, we offer structured nutritional consultations where our vets assess your pet's current diet, body condition score, life stage, activity level, and any existing health conditions to create a personalized, evidence-based nutritional plan. We work with leading therapeutic diet brands and can recommend prescription foods where medically appropriate."
      features={[
        'Full body condition score (BCS) and muscle condition score (MCS) assessment',
        'Caloric requirement calculation based on life stage and activity',
        'Raw, dry, wet, and mixed feeding protocol guidance',
        'Hypoallergenic elimination diet trials for food allergy cases',
        'Prescription renal, hepatic, urinary, cardiac, and joint diets',
        'Obesity management: structured weight loss programs with monthly weigh-ins',
        'Puppy and kitten growth nutritional planning',
        'Senior pet dietary modification for aging health needs',
        'Supplement recommendations: omega-3, joint support, probiotics',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Weight Management', desc: 'Over 50% of UAE pets are overweight. Our structured programs achieve sustainable, healthy weight reduction.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Allergy Resolution', desc: 'Food allergies in cats and dogs often cause chronic itching, vomiting, and ear infections — proper diet eliminates the root cause.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Disease Management', desc: 'Prescription therapeutic diets for kidney, bladder, liver, and heart conditions can significantly slow disease progression.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Evidence-Based', desc: 'All recommendations follow the latest peer-reviewed research in companion animal nutrition and veterinary dietetics.' },
      ]}
      faqs={[
        { q: 'How do I know if my pet is overweight?', a: 'A healthy pet at ideal weight has visible waist definition when viewed from above, ribs that are easily felt but not visibly protruding, and a slight tummy tuck visible from the side. Our vets perform precise body condition scoring (1–9 scale) at every visit.' },
        { q: 'Is raw feeding safe for my cat or dog?', a: 'Raw diets can be nutritionally complete when properly balanced, but they carry risks including bacterial contamination (Salmonella, E. coli) and nutritional imbalances. Our vets can help you evaluate whether a raw diet is appropriate for your pet and guide you on safe preparation.' },
        { q: 'My pet has food allergies — how do we identify the cause?', a: 'A strict elimination diet trial over 8–12 weeks using a single novel protein source (e.g., rabbit, venison, insect) or hydrolyzed protein diet is the gold standard for food allergy diagnosis. We design and monitor this process with you step by step.' },
        { q: 'How much should I feed my pet per day?', a: 'Feeding amounts depend on your pet\'s weight, body condition, age, activity level, and the specific food\'s caloric density. There is no universal rule — our nutrition consultation calculates your pet\'s precise daily caloric requirement and provides clear feeding guidelines.' },
        { q: 'Are pet food supplements worth it?', a: 'Some supplements have strong evidence behind them: omega-3 fatty acids for skin and joint health, probiotics for digestive support, and joint supplements for arthritis. Others have little scientific basis. We only recommend supplements with proven efficacy for your pet\'s specific condition.' },
      ]}
      relatedServices={[
        { title: 'General Checkups', desc: 'BCS assessment and dietary review as part of annual wellness.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Lab & Blood Tests', desc: 'Organ function panels to guide therapeutic diet selection.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'Grooming Referrals', desc: 'Skin health and coat quality often reflect nutritional status.', to: '/services/grooming', icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="2"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeWidth="2"/></> },
      ]}
      image="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop"
      imageAlt="Veterinary nutrition consultation for healthy cat and dog diet planning"
    />
  )
}
