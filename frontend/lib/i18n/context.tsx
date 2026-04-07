'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import translations, { Lang, Translations } from './translations'

interface LangContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }, [])

  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
