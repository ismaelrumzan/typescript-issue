export default {
  title: 'Technologie',
  description: 'PMS-Hersteller & Co.',
  seo: {
    title: 'Jetzt Technologie-Partner werden',
    description:
      'Erweitere Dein Feedback durch verschiedenste Workflows, von der Integration des Check-Out-Assistenten bis zum E-Mail-Client. Hole Dir auch Feedback von Deinen Mitarbeitern.'
  },

  hero: {
    badge: 'Technologie Partner',
    title: 'Werde jetzt Partner von uns',
    description:
      'Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit.'
  },

  benefit: {
    title: 'Verschwende keine Zeit mehr für Integrationen',
    checks: [
      'Nie wieder endlos Schnittstellen zu allen möglichen Systemen bauen',
      'Keinen großen Aufwand mehr in kleine Verbesserungen stecken',
      'Mehr Konzentration auf das Core-Business'
    ],
    image: 'test.png'
  },

  solution: {
    title: 'Die einzige Schnittstelle, die du brauchst',
    checks: [
      'Wir vernetzen Dein Business mit allen beliebten Anbietern',
      'Kunden können über uns Ihre Individualität ausspielen, indem Sie verschiedene Abläufe und Assistenten bauen'
    ],
    image: 'test.png'
  },

  features: [
    {
      title: 'Schnell',
      icon: 'Check',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      title: 'Unsichtbar',
      icon: 'Check',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      title: 'Flexibel',
      icon: 'Check',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ],

  testimonials: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      author: {
        name: 'Maurice Wegner',
        job: 'Employee',
        company: 'Digital Hotel'
      }
    }
  ],

  pricing: {
    title: 'Preisgestaltung',
    description: 'Starte jetzt mit Deinem Paket',
    tables: [
      {
        category: 'Standard',
        description: 'For development purposes',
        price: {
          currency: 'EUR',
          monthly: 0,
          anually: 0
        },
        features: [
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in'
        ],
        cta: {
          title: 'Start for free',
          href: '/apply',
          type: 'secondary'
        }
      },
      {
        popular: true,
        category: 'Premium',
        description: 'For small and medium hotels',
        price: {
          currency: 'EUR',
          monthly: 32,
          anually: 299
        },
        features: [
          'Alle Features aus Standard',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in'
        ],
        cta: {
          title: 'Get Premium',
          href: '/apply'
        }
      },
      {
        category: 'Enterprise',
        description: 'For large hotels',
        price: {
          currency: 'EUR',
          monthly: 128,
          anually: 999
        },
        features: [
          'Alle Features aus Premium',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in',
          'Lorem ipsum loret in'
        ],
        cta: {
          title: 'Contact us',
          href: '/meeting',
          type: 'secondary'
        }
      }
    ]
  },

  faq: [
    {
      question: 'Kostet es mich etwas eine Schnittstelle zu euch zu bauen?',
      answer:
        'In der Standard-Version ist diese App <strong>kostenlos</strong>.'
    },
    {
      question: 'Wie supportet Ihr mich?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ]
};
