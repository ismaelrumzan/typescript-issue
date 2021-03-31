export default async (context: any, locale: string) => {
  return await Promise.resolve({
    solutions: 'Lösungen',
    partners: 'Partner',
    marketplace: 'Marktplatz',
    company: 'Unternehmen',
    ressources: 'Ressourcen'
  })
}