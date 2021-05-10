export default {
  title: 'Feedback',
  description:
    'Extend your feedback through various workflows, from the integration of the check-out assistant to the e-mail client. Get feedback from your employees as well.',
  seo: {
    title: 'Feedback',
    description:
      'Extend your feedback through various workflows, from the integration of the check-out assistant to the e-mail client. Get feedback from your employees as well.'
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
      question: 'Was kostet diese App?',
      answer:
        'In der Standard-Version ist diese App <strong>kostenlos</strong>.'
    },
    {
      question: 'Was benötige ich, um damit starten zu können?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ]
};
