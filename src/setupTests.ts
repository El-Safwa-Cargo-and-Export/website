import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      // Just mock English strings since tests expect English text
      const mockEN: Record<string, string> = {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.industries': 'Industries',
        'nav.contact': 'Contact Us',
        'home.hero_subtitle': 'Global Logistics Excellence',
        'home.hero_title': 'We Deliver Beyond Expectations',
        'home.hero_desc': 'El Safwa Cargo and Export provides reliable, efficient, and innovative logistics solutions worldwide.',
        'home.quote_btn': 'Request a Quote',
        'home.feat1_title': 'Air & Sea Freight',
        'home.feat2_title': 'Global Network',
        'home.feat3_title': 'Supply Chain Solutions',
        'home.cert_title': 'Internationally Certified',
        'about.subtitle': 'Who We Are',
        'about.title': 'Delivering the World',
        'about.mission_title': 'Our Mission',
        'about.mission_desc': 'To provide world-class logistics and freight forwarding solutions that empower businesses to thrive globally.',
        'services.subtitle': 'What We Do',
        'services.title': 'Our Services',
        'services.s1_title': 'Air Freight',
        'services.s1_desc': 'Fast and reliable air cargo solutions',
        'services.s2_title': 'Ocean Freight',
        'services.s2_desc': 'Cost-effective ocean transportation',
        'services.s3_title': 'Customs Brokerage',
        'services.s3_desc': 'Navigating complex international customs',
        'services.s4_title': 'Warehousing',
        'services.s4_desc': 'Secure storage facilities',
        'services.s5_title': 'Export Services',
        'services.s5_desc': 'Comprehensive support',
        'services.s6_title': 'Supply Chain Consulting',
        'services.s6_desc': 'Expert advice',
        'industries.subtitle': 'Sectors We Serve',
        'industries.title': 'Industries',
        'industries.i1_title': 'Pharmaceuticals',
        'industries.i1_desc': 'Temperature-controlled logistics ensuring the integrity of critical medical supplies.',
        'industries.i2_title': 'Automotive',
        'industries.i2_desc': 'Just-in-time delivery for parts and complete vehicles worldwide.',
        'industries.i3_title': 'Technology',
        'industries.i3_desc': 'Secure and rapid transportation of high-value electronics and components.',
        'industries.i4_title': 'Retail & FMCG',
        'industries.i4_desc': 'Scalable solutions to meet seasonal demands and keep supply chains flowing.',
        'industries.i5_title': 'Agriculture',
        'industries.i5_desc': 'Specialized handling for perishable goods ensuring maximum freshness.',
        'industries.i6_title': 'Manufacturing',
        'industries.i6_desc': 'Heavy-lift and oversized cargo management for industrial equipment.',
        'contact.subtitle': 'Get in Touch',
        'contact.title': 'Contact Us',
        'contact.hq': 'Headquarters',
        'contact.details': 'Contact Details',
        'contact.hours': 'Business Hours',
        'footer.desc': 'Your trusted partner in global logistics and freight forwarding.',
        'footer.quick_links': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'iata.code': 'CargoLink Code'
      };
      return mockEN[key] || key;
    },
    i18n: { 
      changeLanguage: jest.fn(), 
      language: 'en', 
      resolvedLanguage: 'en',
      dir: () => 'ltr'
    }
  }),
  Trans: ({ children }: any) => children,
}));
