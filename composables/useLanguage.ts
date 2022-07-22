import type { Ref } from 'vue'

export default function () {
  const language = useState<string>('language', () => '/en');
  const router = useRouter();
  
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
