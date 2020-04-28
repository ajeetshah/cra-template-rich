import ar from './locales/ar'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import ru from './locales/ru'
import zh from './locales/zh'

export default {
  ar,
  en,
  es,
  fr,
  ru,
  zh,
} as {
  [language: string]: {
    [id: string]: string
  }
}
