import type { Ref } from 'vue'

export default function () {
  const language = useState<string>('language', () => '/en');
  const router = useRoute();
  
  const toggleLanguage = () => {
    if (language.value == '/en')
    {
      language.value = '/de'
      console.log('/de' + router.fullPath.slice(3));
      navigateTo('/de' + router.fullPath.slice(3));
    }
    else
    {
      language.value = '/en'
      console.log('/en' + router.fullPath.slice(3));
      navigateTo('/en' + router.fullPath.slice(3));
    }
  }

  const currentLanguage = () => {
    if (language.value == '/en') {
      return "EN"
    }
    else {
      return "DE"
    }
  }

  return { language, currentLanguage, toggleLanguage }
}
