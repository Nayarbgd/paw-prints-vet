import ServicePageLayout from '../../components/ServicePageLayout'

export default function Grooming() {
  return (
    <ServicePageLayout
      seoTitle="Pet Grooming & Medicated Baths Dubai | Paw Prints Clinic"
      seoDescription="Medicated baths for skin conditions, grooming referrals, and skin health consultations for cats and dogs in Arjan, Dubai. Trusted grooming care at Paw Prints."
      badge="Skin & Coat Care"
      title="Grooming Referrals"
      subtitle="Medically-guided coat care and trusted grooming referrals for skin conditions, allergies, and routine pet maintenance in Dubai."
      description="Grooming is more than aesthetics — it is an important component of your pet's health. At Paw Prints Clinic, we provide medicated bath treatments for pets with skin allergies, fungal infections, bacterial dermatitis, and seborrhoea. Our vets assess your pet's skin condition first to determine the correct medicated shampoo protocol. We also maintain strong referral relationships with premium local grooming salons in Arjan that we trust for routine grooms, breed cuts, nail trims, and ear cleaning."
      features={[
        'Medicated chlorhexidine shampoo therapy for bacterial skin infections',
        'Antifungal shampoo baths for ringworm and Malassezia dermatitis',
        'Colloidal oatmeal soothing baths for allergic skin disease',
        'Seborrhoeic dermatitis management with specialized shampoo protocols',
        'Skin cytology to identify bacterial or yeast involvement',
        'Ear cleaning and treatment for otitis externa',
        'Referrals to vetted, trusted grooming salons in Arjan',
        'Guidance on home grooming techniques, brushing, and coat care',
        'Nail trim (nail clipping) service for all breeds',
      ]}
      benefits={[
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Medically Directed', desc: 'Unlike commercial grooming, our medicated bath protocols are prescribed by a vet based on your pet\'s specific skin diagnosis.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Skin Condition Relief', desc: 'Correct medicated shampoos break the cycle of bacterial and yeast infections that cause chronic itching and discomfort.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Trusted Referrals', desc: 'We only refer clients to groomers we have personally vetted for animal handling standards and safety.' },
        { icon: <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Coat & Ear Health', desc: 'Regular professional grooming prevents matting, ear infections, nail overgrowth, and secondary skin problems.' },
      ]}
      faqs={[
        { q: 'What is the difference between a medicated bath and a regular grooming bath?', a: 'A medicated bath uses veterinary-prescription shampoos containing active ingredients like chlorhexidine, miconazole, or colloidal oatmeal, applied with a specific contact time (usually 10 minutes) to treat active skin conditions. Regular grooming uses cosmetic shampoos for cleaning and coat conditioning only.' },
        { q: 'My pet scratches constantly — could it be a skin infection?', a: 'Chronic itching (pruritus) in cats and dogs has several causes: environmental allergies, food allergies, bacterial skin infection, yeast overgrowth, or ectoparasites (fleas, mites). We recommend a skin examination before starting any treatment to identify the correct cause and therapy.' },
        { q: 'How often should I bathe my dog or cat?', a: 'Healthy dogs with normal skin: every 4–6 weeks. Cats: rarely need bathing as they self-groom. Pets undergoing medicated bath therapy may need weekly baths for 4–8 weeks. Over-bathing can strip natural oils and worsen skin conditions.' },
        { q: 'Can you refer me to a groomer who handles anxious dogs?', a: 'Yes. We specifically refer anxious or nervous pets to groomers trained in low-stress handling. Please mention anxiety when booking so we can match you with the most appropriate grooming partner.' },
        { q: 'Do you provide nail trims at the clinic?', a: 'Yes, our nursing team performs routine nail trims at the clinic. For pets that become extremely stressed during nail trimming, we can discuss options including mild sedation in a clinical setting.' },
      ]}
      relatedServices={[
        { title: 'General Checkups', desc: 'Skin and coat health assessment included in every exam.', to: '/services/general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round"/> },
        { title: 'Nutrition & Diet', desc: 'Diet affects skin and coat quality — often the root cause.', to: '/services/nutrition', icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 8v8M8 12h8" strokeWidth="2"/></> },
        { title: 'Lab & Blood Tests', desc: 'Allergy and hormone panels to investigate chronic skin disease.', to: '/services/lab-tests', icon: <circle cx="8" cy="13" r="3" strokeWidth="2"/> },
      ]}
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop"
      imageAlt="Dog grooming and skin care consultation at Paw Prints Veterinary Clinic Dubai"
    />
  )
}
