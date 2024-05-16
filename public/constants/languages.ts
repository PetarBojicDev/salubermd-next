export interface LanguageOption {
    value: string;
    language: string;
    icon: string;
    label: string;
}

export const array: LanguageOption[] = [
    {
        value: "en",
        language: "en_US",
        icon: "gb.svg",
        label: "ENG"
    },
    {
        value: "it",
        language: "it_IT",
        icon: "it.svg",
        label: "ITA"
    }
];