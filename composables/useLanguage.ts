import type { Ref } from 'vue'

export default function () {
  const language = useState<string>('language', () => '/en');

  const toggleLanguage = () => {
    if (language.value == '/en')
    {
      language.value = '/de'
    }
    else
    {
      language.value = '/en'
    }
  }
  
  return { language, toggleLanguage }
}
