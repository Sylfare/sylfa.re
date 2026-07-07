import { getRelativeLocaleUrl } from "astro:i18n";
import { ui, defaultLang } from "./ui";
import type { i18nKeys, i18nComplete } from "./ui";


export function getLanguage(rawLang?: string) {
    return rawLang as keyof typeof ui ?? defaultLang;
}

export function useTranslations(lang?: string) {
    const foundLang = getLanguage(lang);
    return (getKey: (keys: i18nKeys) => string | undefined) => getKey(ui[foundLang]) ?? getKey(ui[defaultLang]);
}

export function initUrl(language?: string) {
    return (to?: string) => getRelativeLocaleUrl(getLanguage(language), to);
}

export type Buttons = keyof i18nComplete["buttons"];