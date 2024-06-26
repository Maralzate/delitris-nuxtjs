export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        navHome: 'Home',
        navBakery: 'Bakery',
        navFrozen: 'Frozen',
        navContact: 'Contact',
        indexH1: 'Pet Baking in Medellín',
      },
      es: {
        welcome: 'Bienvenido',
        navHome: 'Inicio',
        navBakery: 'Horneados',
        navFrozen: 'Congelados',
        navContact: 'Contáctanos',
        indexH1: 'Reposteria Para Mascotas en Medellín',
      }
    }
  }))