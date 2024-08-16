const pluralRules = new Intl.PluralRules('ar-SA')

export function pluralize(count: number, singular: string, plural: string) {
  const rule = pluralRules.select(count)

  switch (rule) {
    case 'one': {
      return ` ${singular} واحد`
    }
    case 'other': {
      return `${count} ${plural}`
    }
    default: {
      throw new Error(`Unexpected plural rule '${rule}'.`)
    }
  }
}
