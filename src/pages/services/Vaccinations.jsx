import ServicePageLayout from '../../components/ServicePageLayout'

export default function Vaccinations() {
  return (
    <ServicePageLayout
      seoTitle="Pet Vaccinations Dubai | Dogs & Cats | Paw Prints Clinic"
      seoDescription="Core and non-core pet vaccinations in Arjan, Dubai. Rabies, parvo, feline flu vaccines and booster scheduling for cats and dogs. Book at Paw Prints today."
      badge="Preventative Care"
      title="Vaccinations"
      subtitle="Protect your cat or dog with a complete, expertly managed vaccination schedule tailored to their age, breed, and lifestyle."
      description="Vaccinations are the cornerstone of preventative veterinary medicine. At Paw Prints Clinic, we administer all core and non-core vaccines for cats and dogs, tracking your pet's individual booster schedule to ensure continuous protection. We use only high-quality, licensed vaccines and monitor each patient for 15 minutes post-injection to ensure their safety and comfort. Dubai's urban environment presents specific exposure risks — our vaccination protocols are designed for local conditions."
      features={[
        'Rabies vaccination (legally required in the UAE)',
        'Canine: DHPPiL (Distemper, Hepatitis, Parvo, Parainfluenza, Leptospirosis)',
        'Feline: FVRCP (Rhinotracheitis, Calicivirus, Panleukopenia)',
        'Kennel Cough (Bordetella) for boarding pets',
        'FeLV (Feline Leukemia Virus) for outdoor cats',
        'Custom booster schedule management and reminders',
        'Digital vaccination record and health passport',
        'Post-injection monitoring and care advice',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Disease Prevention', desc: 'Vaccines prevent life-threatening diseases like parvovirus, distemper, and rabies that are prevalent in the UAE.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Legally Compliant', desc: 'Rabies vaccination is a legal requirement in Dubai. We provide official certificates accepted by all UAE authorities.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Schedule Tracking', desc: 'We manage your pet\'s complete booster schedule and send reminders so you never miss a dose.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Safe & Monitored', desc: 'All injections are followed by a 15-minute observation period and full aftercare advice.' },
      ]}
      faqs={[
        { q: 'At what age should I start vaccinating my puppy or kitten?', a: 'Puppies begin vaccinations at 6–8 weeks old, with boosters every 3–4 weeks until 16 weeks. Kittens start at 8–9 weeks with a booster at 12 weeks. After the initial series, annual boosters are required for most vaccines.' },
        { q: 'Is rabies vaccination mandatory in Dubai?', a: 'Yes. Rabies vaccination is legally required by the Dubai Municipality for all cats and dogs. We issue the official UAE vaccination certificate after each rabies injection.' },
        { q: 'Can my pet be vaccinated if they are sick?', a: 'We do not recommend vaccinating pets that are actively unwell. A brief health check before every injection ensures your pet is healthy enough to receive the vaccine safely.' },
        { q: 'Are there any side effects from vaccines?', a: 'Most pets experience mild soreness at the injection site or slight lethargy for 24 hours. Serious allergic reactions are very rare (less than 0.001%). Our team monitors every patient post-injection.' },
        { q: 'How long before travel do I need to vaccinate my pet?', a: 'For international travel, vaccination requirements vary by country. For most destinations, rabies must be administered at least 21–30 days prior to travel. Contact us as early as possible to plan your pet\'s travel health requirements.' },
      ]}
      relatedServices={[
        { title: 'General Checkups', desc: 'Health exam combined with your vaccination visit.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Lab & Blood Tests', desc: 'Pre-vaccination health screening for senior pets.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
        { title: 'Emergency Care', desc: '24/7 care if your pet experiences any reaction.', to: '/services/emergency-care', icon: <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round"/> },
      ]}
      image="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?q=80&w=800&auto=format&fit=crop"
      imageAlt="Veterinarian preparing vaccination for a pet at Paw Prints Clinic"
    />
  )
}
