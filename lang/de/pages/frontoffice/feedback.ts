export default {
  title: 'Feedback',
  description:
    'Erweitere Dein Feedback durch verschiedenste Workflows, von der Integration des Check-Out-Assistenten bis zum E-Mail-Client. Hole Dir auch Feedback von Deinen Mitarbeitern.',
  seo: {
    title: 'Feedback',
    description:
      'Erweitere Dein Feedback durch verschiedenste Workflows, von der Integration des Check-Out-Assistenten bis zum E-Mail-Client. Hole Dir auch Feedback von Deinen Mitarbeitern.'
  },

  hero: {
    badge: 'Feedback',
    title: 'Alle Meinungen auf einem Blick',
    description:
      'Mit dem Betriebsystem für Unternehmen: Wir verschaffen Dir mehr Zeit, erhöhen die Qualität Deiner Abläufe und steigern Deine Produktivität und Wirtschaftlichkeit.'
  },

  benefit: {
    title: 'Diese App bringt Licht ins Dunkel',
    checks: [
      'Erfahre, was Deine <strong>Kunden</strong> von Dir denken',
      'Erfahre, was Deine <strong>Mitarbeiter</strong> von Dir denken',
      'Sammle Dein Feedback strukturiert ein',
      'Alles auf einem Blick'
    ],
    image: 'test.png'
  },

  solution: {
    title: 'Einfach, unauffällig und sehr flexibel',
    checks: [
      'Wir sammeln über verschiedenste Wege das Feedback Deiner Kunden und Mitarbeiter ein',
      'Der Prozess geschieht völlig unsichtbar für den Benutzer'
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
        company: 'oktus'
      }
    }
  ],

  pricing: {
    title: 'Preisgestaltung',
    description: 'Starte jetzt mit Deinem Paket',
    tables: [
      {
        category: 'Standard',
        description: 'Paket zum Schnuppern',
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
          title: 'Kostenlos starten',
          href: '/apply',
          type: 'secondary'
        }
      },
      {
        popular: true,
        category: 'Premium',
        description: 'Kleinere und mittlere Hotels',
        price: {
          currency: 'EUR',
          monthly: 50,
          anually: 579
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
          title: 'Jetzt Premium holen',
          href: '/apply'
        }
      },
      {
        category: 'Enterprise',
        description: 'Große Hotels oder Gruppen',
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
          title: 'Kontaktier uns',
          href: '/meeting',
          type: 'secondary'
        }
      }
    ]
  },

  faq: [
    {
      question: 'Was kostet diese App?',
      answer:
        'In der Standard-Version ist diese App <strong>kostenlos</strong>.'
    },
    {
      question: 'Was benötige ich, um damit starten zu können?',
      answer:
        'Es sind gibt <strong>keine Voraussetzungen</strong> um mit der App zu starten. Also, worauf wartest Du?'
    },
    {
      question: 'Wer sieht das Feedback?',
      answer:
        'Das Feedback kann von den Benutzern, die in Deinem Team sind eingesehen werden.'
    }
  ]
};
