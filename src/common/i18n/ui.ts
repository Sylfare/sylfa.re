import type { Themes } from "../css/themes/themes.ts";

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export const defaultLang = "en";

export const languages = {
    en: "English",
    fr: "Français",
}


export type i18nKeys = RecursivePartial<{
    site: {
        title: string,
    },
    settings: {
        open: string,
        themeTitle: string,
        themes: {[_ in Themes]: string},
    }
}>;

export const ui: {[_ in keyof typeof languages]: i18nKeys} = {
    en: {
        site: {
            title: "Sylfare's armoire",
        },
        settings: {
            open: 'Settings',
            themeTitle: 'Theme',
            themes: {
                "98": "98",
                "space": "Space"
            },
        }
    },
    fr: {
        site: {
            title: "Le bazar du Sylfare"
        },
        settings: {
            open: 'Paramètres',
            themeTitle: 'Thème',
            themes: {
                "98": "98",
                "space": "Espace",
            }
        }
    }
} as const;



