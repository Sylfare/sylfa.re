import { ui, defaultLang } from "./ui";
import type { i18nKeys } from "./ui";

export function getLanguage(rawLang?: string) {
    return rawLang as keyof typeof ui ?? defaultLang;
}

export function useTranslations(lang?: string) {
    const foundLang = getLanguage(lang);
    return (getKey: (keys: i18nKeys) => string | undefined) => getKey(ui[foundLang]) ?? getKey(ui[defaultLang]);
}
