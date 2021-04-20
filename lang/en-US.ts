import about from "./en/pages/about"
import help from "./en/pages/help"
import homepage from "./en/pages/homepage"

export default async (context: any, locale: string) => {
  return await Promise.resolve({
    seo: {
      site_title: "Digital Hotel",
      seperator: " | "
    },

    general: {
      accept: "Accept",
      all: "All",
      application: "Application | Applications",
      contract: "Contract | Contracts",
      email_address: "E-Mail address",
      homepage: "Homepage",
      legal: "Legal",
      login: "Login",
      manage: "Manage",
      overview: "Overview",
      popular: "Popular",
      reject: "Reject",
      search: "Search",
      sign_up: "Sign up",
      solution: "Solution | Solutions",
      subscribe: "Subscribe",
      uptime: "Uptime",
      view: "View"
    },

    phrases: {
      all_solutions: "All Solutions",
      all_rights_reserved: "All rights reserved",
      apply_now: "Apply now",
      book_meeting: "Book a Meeting",
      bookable_online: "Bookable online",
      coming_soon: "Coming soon",
      connect_your_system: "Connect to your system",
      easy_integration: "Easy integration",
      focus_on_security: "Focus on Security",
      generate: "Generate {object}",
      get_started: "Get Started",
      go_to: "Go to {page}",
      go_to_2: "Go to {page}",
      go_to_3: "Go to {page}",
      go_to_site: "Go to {page} Page",
      got_questions: "Got questions?",
      got_more_questions: "Got more questions?",
      high_speed: "High Speed",
      more: "Learn More",
      need_help: "Need help?",
      now: "{action} now",
      search_for: "Search for {0}",
      search_for_2: "Search for {0}",
      solutions_in: "{area} solutions",
      sparked_interest: "Have we sparked your interest?",
      start_now: "Start Now",
      subscribe_newsletter: "Subscribe to our newsletter",
      updated_at: "Updated at",
    },

    blocks: {
      apply: {
        title: "Would you like to be part of the process?",
        description: "Then apply now, either as a partner or as an employee, and become part of our process.",
        as_partner: "As a Partner",
        as_developer: "As a Developer"
      },
      help: {
        title: "Need help?",
        description: "Are you not quite sure yet or do you still have unanswered questions? Check out our FAQ or alternatively book a meeting with us so that we are able to explain everything to you."
      },
      integration: {
        description: "We have connections to the most popular manufacturers"
      }
    },

    cookies: {
      text: "We use cookies 🍪 to personalize your experience on Digital Hotel."
    },

    docs: {
      api: 'API',
      examples: 'Examples',
      getting_started: 'Getting Started',
      guide: 'Guide',
    },

    contact: {
      address: "Adress",
      company: "Company",
      company_name: "Company name",
      company_name_2: "Name of the company",
      country: "Country",
      email: "E-Mail",
      first_name: "First Name",
      last_name: "Last Name",
      organization: "Organization",
      phone: "Phone",
      region: "Region",
      social_media: "Social Media",
      street: "Street",
      work_experience: "Work Experience",
      zip: "Zip Code",
    },

    form: {
      message: "Message",
      message_to_us: "Message to us",
      send: "Send",
      success: "Sent successfully",
    },

    errors: {
      general: "An error has occured",
      bot: "You have filled out an invisible input field. Please reload the site and make sure to not use any third-party services (like password managers) to fill out the form for you."
    },

    pages: {
      '404': {
        title: "404",
        description: "Oops... this page does not seem to exist"
      },

      about,

      api: {
        title: "API Documentation",
        description: "",
        hero: {
          title: "API Docs"
        }
      },
      applications: {
        title: "Applications",
        description: "Automated responses, online scheduler for job interviews, automated onboarding and many other functions."
      },

      apply: {
        title: "Apply now",
        seo: {
          title: "Apply now",
          description: "Apply now and become one of the first hotels to activate the autopilot. But hurry up, our places are currently limited!"
        },
        hero: {
          title: "Start your way to the last login",
          description: "Apply now and become one of the first hotels to activate the autopilot. But hurry up, our places are currently limited!"
        }
      },

      appointees: "Appointees",
      apps: "Apps",
      assistants: {
        title: "Assistants",
        description: "Imagine if you know one program, you know them all. This is how it feels, and it is even easier to work with our assistants."
      },

      backoffice: {
        title: "Back Office",
        description: "Management tools",
        seo: {
          title: "Back Office – Management tools for your hotel",
          description: "There are many individual tasks to deal with in the back office of a hotel. We help you to improve communication, to work more efficiently and to create security and trust."
        },
        hero: {
          title: "Management tools for your hotel",
          description: "There are many individual tasks to deal with in the back office of a hotel. We help you to improve communication, to work more efficiently and to create security and trust."
        }
      },

      blog: {
        title: "Blog",
        description: "Latest News"
      },

      bonus_program: "Bonus Program",
      booking_page: "Booking Page",
      campaigns: "Campaigns",

      careers: {
        title: "Careers",
        seo: {
          title: "Careers",
          description: "Become part of our vision and help us to realize our plans"
        },
        hero: {
          title: "Join Us. From Anywhere.",
          description: "Become part of our vision and help us to realize our plans"
        }
      },

      channel_analytics: "Channel Analytics",
      cockpits: {
        title: "Cockpits",
        description: "Don't miss anything and always be up to date with the individual dashboards for each of your teams or even for each of your employees."
      },
      company: "Company",

      consulting: {
        title: "Consulting",
        description: ""
      },

      content_management: "Content Management",
      data_transmission: "Data Transmission",
      demo: "Demo",
      developers: "Developers",
      disclosure: {
        title: "Disclosure"
      },

      documentation: {
        title: "Documentation",
        description: "Integration and Guides"
      },

      dpa: {
        title: "DPA",
        description: "Generate your Data Processing Agreement"
      },

      emails: {
        title: "E-Mails",
        description: "Since e-mails still make up a large part of communication in the hotel industry, they are a part belong in our user interface inside of a smart client."
      },
      energy_management: {
        title: "Energy Management",
        description: "Do you have energy monitoring in your hotel? Then you can connect it to our system and we will keep you up to date on changes."
      },
      erp: {
        title: "ERP",
        description: ""
      },
      feedback: {
        title: "Feedback",
        description: "Extend your feedback through various workflows, from the integration of the check-out assistant to the e-mail client. Get feedback from your employees as well."
      },
      finance: {
        title: "Finance",
        description: ""
      },

      frontoffice: {
        title: "Front Office",
        description: "All about the guest",
        seo: {
          title: "Front Office – All about the guest",
          description: "A large part of the tasks consists of repetitive processes. We optimize and automate these processes and enable access via just one user interface."
        },
        hero: {
          title: "All about your guest",
          description: "A large part of the tasks consists of repetitive processes. We optimize and automate these processes and enable access via just one user interface."
        }
      },

      gifts: "Gifts",
      guests: {
        title: "Guests",
        description: "Via our user interface you have an overview of all guests without having to log into your PMS or CRM. You can even create or edit them."
      },

      help,

      housekeeping: {
        title: "Housekeeping",
        description: "Provide your housekeeping team in a unique way with important information from guests or other teams with our individual workflows."
      },

      index: homepage,

      local_devices: "Local Devices",
      lost_property: {
        title: "Lost Property",
        description: "Regardless of whether your PMS offers this service, our software can take over the intelligent management and shines with its functionality."
      },
      mail: {
        title: "Mail",
        description: ""
      },

      marketing: {
        title: "Marketing",
        description: "Generate range"
      },

      marketplace: "Marketplace",

      meeting: {
        title: "Meeting",
        description: "Book online",
        hero: {
          title: "Get to know Digital Hotel",
          description: "Do you still have any questions? Or do you want to get to know us better? We offer you the opportunity to arrange a personal meeting with us. You can book this directly online here."
        }
      },

      messenger: {
        title: "Messenger"
      },
      newsletter: "Newsletter",

      onboarding: {
        title: "Onboarding",
        description: "Get started"
      },

      operations: {
        title: "Operations",
        description: "Process optimization",
        seo: {
          title: "Operations – Automate your processes",
          description: "We make it easier for your employees to store information securely and efficiently and to automate processes in a meaningful way. We thus ensure high data quality and individual reporting for key areas of the hotel operation."
        },
        hero: {
          title: "Automate your processes",
          description: "We make it easier for your employees to store information securely and efficiently and to automate processes in a meaningful way. We thus ensure high data quality and individual reporting for key areas of the hotel operation."
        }
      },

      partners: "Partners",
      payments: {
        title: "Payments",
        description: "A payment in the PMS or in the POS is posted quickly, correcting errors before the night run saves a lot of rework. We'll keep you up to date on every payment."
      },
      permissions: {
        title: "Permissions",
        description: "With this functionality, you can quickly and easily create access permissions independently of the integration in our reception assistant."
      },
      phone: {
        title: "Phone",
        description: "With our solution, no more information from your callers is lost and you can even integrate this very easily into your marketing."
      },
      pos: {
        title: "POS System",
        description: ""
      },
      press: "Press",
      privacy_policy: {
        title: "Privacy Policy"
      },
      products: "Products",
      promotions: "Promotions",
      reservations: {
        title: "Reservations",
        description: "Via our user interface you have an overview of all reservations without having to log into your PMS or CRM. You can even create or edit them."
      },
      ressource_management: "Ressource Management",
      ressources: "Ressources",
      roadmap: "Roadmap",
      roomplan: {
        title: "Roomplan",
        description: "We give the room plan, which is still popular in medium-sized hotels, greater use through more individualization and call-to-action according to your own wishes."
      },
      safety: {
        title: "Safety",
        description: ""
      },

      sales: {
        title: "Sales",
        description: "Software distributors"
      },

      security_and_privacy: "Security and Privacy",

      service: {
        title: "Service",
        description: "Become a partner"
      },

      solutions: {
        title: "Solutions",
        seo: {
          title: "Solutions by Digital Hotel",
          description: "All solutions in our Front Office, Back Office, Operations and Marketing divisions at a glance."
        },
        hero: {
          title: "All solutions at a glance"
        }
      },

      staff: {
        title: "Staff",
        description: "You have the possibility to manage your employees in a smart way. Manage access, rights and other settings with our service."
      },
      suppliers: {
        title: "Suppliers",
        description: ""
      },
      surveys: "Surveys",
      team_developer: "Developer",
      team_frontoffice: "Front Office",
      team_hotel_manager: "Hotel Manager",
      team_marketing: "Marketing",
      technology: {
        title: "Technology",
        description: "PMS/CMS companies"
      },
      terms: {
        title: "Terms"
      },

      videos: {
        title: "Videos",
        description: "Video tutorials"
      },

      webinars: "Webinars",
      website_analytics: "Website Analytics",
      workflows: {
        title: "Workflows",
        description: "Starting processes automatically from individually selected live data and information from your hotel is how the hotel industry works today."
      }
    }
  })
}