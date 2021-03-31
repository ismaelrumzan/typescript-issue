export default async (context: any, locale: string) => {
  return await Promise.resolve({
    solutions: 'Solutions',
    partners: 'Partners',
    marketplace: 'Marketplace',
    company: 'Company',
    ressources: 'Ressources'
  })
}