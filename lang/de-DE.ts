import about from './de/pages/about';
import contact from './de/pages/contact';
import consultants from './de/pages/consultants';
import customers from './de/pages/customers';
import help from './de/pages/help';
import homepage from './de/pages/homepage';

/* Partners */
import sales from './de/pages/partners/sales';
import technology from './de/pages/partners/technology';

/* Frontoffice */
import feedback from './de/pages/frontoffice/feedback';

/* Guides */
import guides from './de/pages/guides';

export default async (context: any, locale: string) => {
  return await Promise.resolve({
    seo: {
      site_title: 'oktus',
      seperator: ' | '
    },

    general: {
      accept: 'Akzeptieren',
      all: 'Alle',
      application: 'Bewerbung | Bewerbungen',
      back: 'Zurück',
      contract: 'Vertrag | Verträge',
      custom: 'Individuell',
      email_address: 'E-Mail-Adresse',
      homepage: 'Startseite',
      legal: 'Rechtliches',
      login: 'Login',
      manage: 'Verwalten',
      overview: 'Übersicht',
      popular: 'Beliebt',
      reject: 'Ablehnen',
      search: 'Suchen',
      sign_up: 'Anmelden',
      solution: 'Lösung | Lösungen',
      subscribe: 'Abbonieren',
      uptime: 'Uptime',
      view: 'Anschauen'
    },

    phrases: {
      all_solutions: 'Alle Lösungen',
      all_rights_reserved: 'Alle Rechte vorbehalten',
      apply_now: 'Jetzt bewerben',
      book_meeting: 'Meeting buchen',
      bookable_online: 'Online buchbar',
      coming_soon: 'Bald verfügbar',
      connect_your_system: 'Verbinde Dich mit Deinem System',
      contact_name: '{name} kontaktieren',
      contact_us: 'Kontaktier uns',
      easy_integration: 'Einfache Integration',
      focus_on_security: 'Fokus auf Sicherheit',
      generate: '{object} generieren',
      get_started: 'Jetzt starten',
      go_to: 'Zu {page}',
      go_to_2: 'Zum {page}',
      go_to_3: 'Zur {page}',
      go_to_4: 'Zu den {page}',
      go_to_site: 'Zur {page}-Seite',
      got_questions: 'Noch Fragen?',
      got_more_questions: 'Noch mehr Fragen?',
      high_speed: 'Hohe Geschwindigkeit',
      more: 'Mehr erfahren',
      need_help: 'Brauchst Du Hilfe?',
      now: 'Jetzt {action}',
      search_for: 'Suche nach {0}',
      search_for_2: 'Nach {0} suchen',
      solutions_in: 'Lösungen im Bereich {area}',
      sparked_interest: 'Haben wir Dein Interesse geweckt?',
      start_now: 'Jetzt starten',
      subscribe_newsletter: 'Abboniere unseren Newsletter',
      updated_at: 'Aktualisiert am'
    },

    cookies: {
      text:
        'Wir verwenden Cookies 🍪, um Dein Erlebnis bei oktus zu personalisieren.'
    },

    blocks: {
      apply: {
        title: 'Du möchtest ein Teil des Prozesses werden?',
        description:
          'Bewirb dich jetzt bei uns, entweder als Partner oder als Mitarbeiter und werde Teil unseres Prozesses.',
        as_partner: 'Als Partner',
        as_developer: 'Als Entwickler'
      },
      help: {
        title: 'Noch Fragen?',
        description:
          'Du bist Dir noch nicht ganz sicher oder hast noch offene Fragen? Dann klick dich durch unser FAQ oder buche alternativ ein Meeting mit uns, so können wir Dir alles in Ruhe erklären.'
      },
      integration: {
        description:
          'Wir besitzen Schnittstellen zu den beliebtesten Herstellern'
      }
    },

    docs: {
      api: 'API',
      examples: 'Beispiele',
      getting_started: 'Erste Schritte',
      guide: 'Guide'
    },

    guides: {
      api: 'API',
      examples: 'Beispiele',
      getting_started: 'Erste Schritte',
      guide: 'Guide'
    },

    contact: {
      address: 'Adresse',
      company: 'Unternehmen',
      company_name: 'Unternehmensname',
      company_name_2: 'Name des Unternehmens',
      country: 'Land',
      email: 'E-Mail',
      first_name: 'Vorname',
      last_name: 'Nachname',
      organization: 'Organisation',
      phone: 'Telefon',
      region: 'Region',
      social_media: 'Social Media',
      street: 'Straße',
      work_experience: 'Berufserfahrung',
      zip: 'PLZ'
    },

    form: {
      application_success: 'Deine Bewerbung wurde erfolgreich gesendet',
      message: 'Nachricht',
      message_to_us: 'Nachricht an uns',
      send: 'Senden',
      success: 'Erfolgreich gesendet'
    },

    errors: {
      general: 'Ein Fehler ist aufgetreten',
      bot:
        'Du hast ein unsichtbares Feld ausgefüllt. Somit konnte dein Formular nicht versendet werden. Sollte dieser Fehler erneut auftreten, deaktiviere bitte Services von Drittanbietern (z.B. Passwort-Manager) für diese Seite.'
    },

    pages: {
      '404': {
        title: '404',
        description: 'Oops... die Seite scheint nicht zu existieren'
      },

      about,

      api: {
        title: 'API Dokumentation',
        description: '',
        hero: {
          badge: 'Swagger UI',
          title: 'API Dokumentation',
          description:
            'Wähle einen unserer Endpunkte aus und erfahre, wie dieser aufgebaut ist'
        }
      },
      applications: {
        title: 'Bewerbungen',
        description:
          'Automatisierte Antworten, Online-Terminplaner für Bewerbungsgespräch, automatisiertes Onboarding und viele weitere Funktionen.'
      },

      apply: {
        title: 'Jetzt bewerben',
        seo: {
          title: 'Jetzt bewerben',
          description:
            'Bewirb Dich jetzt und werde eines der ersten Hotels, das den Autopilot aktiviert. Aber beeil Dich, die Plätze sind derzeit begrenzt!'
        },
        hero: {
          title: 'Starte jetzt Deinen Weg zum letzten Login',
          description:
            'Bewirb Dich jetzt und werde eines der ersten Hotels, das den Autopilot aktiviert. Aber beeil Dich, die Plätze sind derzeit begrenzt!'
        }
      },

      appointees: 'Beauftragte',
      apps: 'Apps',
      assistants: {
        title: 'Assistenten',
        description:
          'Stell Dir vor wenn Du ein Programm kennst, kennst Du alle. So und noch einfacher fühlt es sich an mit unseren Assistenten zu arbeiten.'
      },

      backoffice: {
        title: 'Back Office',
        description: 'Management-Tools',
        seo: {
          title: 'Back Office – Management-Tools für Dein Hotel',
          description:
            'Im Backoffice eines Hotelbetriebes gibt es viele individuelle Aufgaben zu bewältigen. Wir helfen Dir die Kommunikation zu verbessern, die Arbeiten effizienter zu erledigen und damit Sicherheit und Vertrauen zu schaffen.'
        },
        hero: {
          title: 'Management-Tools für Dein Hotel',
          description:
            'Im Backoffice eines Hotelbetriebes gibt es viele individuelle Aufgaben zu bewältigen. Wir helfen Dir die Kommunikation zu verbessern, die Arbeiten effizienter zu erledigen und damit Sicherheit und Vertrauen zu schaffen.'
        }
      },

      blog: {
        title: 'Blog',
        description: 'Neueste Updates'
      },

      bonus_program: 'Bonusprogramm',
      booking_page: 'Buchungsseite',
      campaigns: 'Kampagnen',

      careers: {
        title: 'Karrieren',
        seo: {
          title: 'Karrieren',
          description:
            'Werde Teil unserer Vision und hilf uns unsere Vorhaben zu verwirklichen'
        },
        hero: {
          title: 'Mach mit. Von überall.',
          description:
            'Werde Teil unserer Vision und hilf uns unsere Vorhaben zu verwirklichen'
        }
      },

      channel_analytics: 'Kanal Analytics',
      cockpits: {
        title: 'Cockpits',
        description:
          'Nichts mehr verpassen und immer up to date sein mit den Individuellen Dashboards für jedes Deiner Teams oder sogar für jeden Deiner Mitarbeiter.'
      },
      company: 'Unternehmen',

      consulting: {
        title: 'Consulting',
        description: ''
      },

      consultants,
      contact,

      content_management: 'Content Management',
      customers,
      data_transmission: 'Datenübermittlung',
      demo: 'Demo',
      developers: 'Entwickler',
      disclosure: {
        title: 'Impressum'
      },

      documentation: {
        title: 'Dokumentation',
        description: 'Integration und Guides'
      },

      dpa: {
        title: 'AV-Vertrag',
        description: 'Generiere jetzt Deinen AV-Vertrag'
      },

      emails: {
        title: 'E-Mails',
        description:
          'Da E-Mails noch immer einen großen Teil der Kommunikation in der Hotellerie ausmachen gehören Sie als Smart-Client mit in unsere Benutzeroberfläche.'
      },
      energy_management: {
        title: 'Energiemanagement',
        description:
          'Du hast ein Monitoring für Energie in Deinem Hotel? Dann kannst Du dich mit unserem System verbinden und wir halten Dich über Veränderungen auf dem Laufenden.'
      },
      erp: {
        title: 'Warenwirtschaft',
        description: ''
      },

      feedback,

      finance: {
        title: 'Finanzen',
        description: ''
      },

      frontoffice: {
        title: 'Front Office',
        description: 'Rund um den Gast',
        seo: {
          title: 'Front Office – Rund um den Gast',
          description:
            'Ein großer Teil der Aufgaben besteht aus sich wiederholenden Prozessen. Wir optimieren und automatisieren diese Prozesse und ermöglichen den Zugriff über nur eine Benutzeroberfläche.'
        },
        hero: {
          title: 'Alles rund um Deinen Gast',
          description:
            'Ein großer Teil der Aufgaben besteht aus sich wiederholenden Prozessen. Wir optimieren und automatisieren diese Prozesse und ermöglichen den Zugriff über nur eine Benutzeroberfläche.'
        }
      },

      gifts: 'Geschenke',
      guests: {
        title: 'Gäste',
        description:
          'Über unsere Benutzeroberfläche hast Du alle Gäste im Blick ohne Dich in Deinem PMS oder CRM anmelden zu müssen und kannst diese neu anlegen oder bearbeiten.'
      },

      guides,

      help,

      housekeeping: {
        title: 'Housekeeping',
        description:
          'Versorge Dein Housekeeping-Team auf eine einzigartige Weise mit wichtigen Informationen von Gästen oder auch anderen Teams mit unseren individuellen Workflows.'
      },

      index: homepage,

      local_devices: 'Lokale Geräte',
      lost_property: {
        title: 'Fundsachen',
        description:
          'Unabhängig davon ob Dein PMS diesen Service bietet kann unsere Software die intelligente Verwaltung übernehmen und glänzt durch Funktionalität.'
      },
      mail: {
        title: 'Post',
        description: ''
      },
      marketing: {
        title: 'Marketing',
        description: 'Reichweite generieren'
      },
      marketplace: 'Marktplatz',

      meeting: {
        title: 'Meeting',
        description: 'Direkt online buchen',
        hero: {
          title: 'oktus kennenlernen?',
          description:
            'Du hast noch Fragen? Oder willst Du uns besser kennenlernen? Wir bieten Dir die Möglichkeit, ein persönliches Meeting mit uns zu vereinbaren. Dieses kannst Du hier direkt online buchen.'
        }
      },

      messenger: {
        title: 'Messenger',
        description:
          'Auf Nachrichten unterschiedlichster Messenger-Dienste müssen Deine Front Office Mitarbeiter heutzutage reagieren. Dieses aus einem zentralen System zu erledigen ist ein großer Vorteil.'
      },
      newsletter: 'Newsletter',

      onboarding: {
        title: 'Onboarding',
        description: 'Jetzt starten'
      },

      operations: {
        title: 'Operations',
        description: 'Prozessoptimierung',
        seo: {
          title: 'Operations – Automatisiere Deine Prozesse',
          description:
            'Wir erleichtern Deinen Mitarbeitern Informationen sicher und effizient abzulegen und Prozesse sinnvoll zu automatisieren. Damit sorgen wir für eine hohe Datenqualität und individuelles Reporting für wichtige Bereiche im Hotelbetrieb.'
        },
        hero: {
          title: 'Automatisiere Deine Prozesse',
          description:
            'Wir erleichtern Deinen Mitarbeitern Informationen sicher und effizient abzulegen und Prozesse sinnvoll zu automatisieren. Damit sorgen wir für eine hohe Datenqualität und individuelles Reporting für wichtige Bereiche im Hotelbetrieb.'
        }
      },

      partners: 'Partner',
      payments: {
        title: 'Zahlungen',
        description:
          'Eine Zahlung im PMS oder in der POS-Kasse ist schnell gebucht, Fehler vor dem Nachtlauf zu korrigieren spart viel Nacharbeit. Wir halten Dich über jede Zahlung auf dem Laufenden.'
      },
      permissions: {
        title: 'Zutritt',
        description:
          'Über diese Funktionalität kannst Du unabhängig von den Integrationen in unserer Rezeptions-Assistenten einfach und schnell Zutrittsberechtigungen erstellen.'
      },
      phone: {
        title: 'Telefon',
        description:
          'Mit unserer Lösung geht keine Information Deiner Anrufer mehr verloren und Du kannst diese sogar sehr einfach in Dein Marketing integrieren.'
      },
      pos: {
        title: 'Kassensystem',
        description: ''
      },
      press: 'Presse',
      privacy_policy: {
        title: 'Datenschutz'
      },
      products: 'Produkte',
      promotions: 'Förderungen',
      reservations: {
        title: 'Reservierungen',
        description:
          'Über unsere Benutzeroberfläche hast Du alle Reservierungen im Blick ohne Dich in Deinem PMS anmelden zu müssen und kannst diese auch neu anlegen oder bearbeiten.'
      },
      ressource_management: 'Ressourcen-Verwaltung',
      ressources: 'Ressourcen',
      roadmap: 'Roadmap',
      roomplan: {
        title: 'Zimmerplan',
        description:
          'Wir verleihen dem in mittleren Hotels immer noch geliebten Zimmerplan  einen höheren Nutzen durch mehr Individualisierung und Call-to-Action nach eigenen Wünschen.'
      },
      safety: {
        title: 'Betriebssicherheit',
        description: ''
      },

      sales,

      security_and_privacy: 'Sicherheit & Datenschutz',

      service: {
        title: 'Service',
        description: 'Partner werden'
      },

      solutions: {
        title: 'Lösungen',
        seo: {
          title: 'Lösungen von oktus',
          description:
            'Alle Lösungen unserer Bereiche Front Office, Back Office, Operations und Marketing im Überblick.'
        },
        hero: {
          title: 'Alle Lösungen im Überblick'
        }
      },

      staff: {
        title: 'Mitarbeiter',
        description:
          'Du hast die Möglichkeit Deine Mitarbeiter smart zu verwalten. Manage die Zugriffe, Rechte und sonstige Einstellungen mit unserem Service.'
      },
      suppliers: {
        title: 'Lieferanten',
        description: ''
      },
      surveys: 'Umfragen',
      team_developer: 'Entwickler',
      team_frontoffice: 'Front Office',
      team_hotel_manager: 'Hoteldirektor',
      team_marketing: 'Marketing',

      technology,

      terms: {
        title: 'AGB'
      },

      videos: {
        title: 'Videos',
        description: 'Video-Tutorials'
      },

      webinars: 'Webinare',
      website_analytics: 'Website Analytics',
      workflows: {
        title: 'Workflows',
        description:
          'Aus individuell gewählten Live-Daten und Informationen aus dem Deinem Hotel automatisch Prozesse zu starten, so geht Hotellerie heute.'
      }
    }
  });
};
