export type UserSkill = {
    name: string;
    level: number;
};

export type UserExperience = {
    company: string;
    position: string;
    country: string;
    dates: string;
    description: string;
    skills: string[];
};

export type UserContacts = {
    WhatsApp?: string;
    Telegram?: string;
    Email?: string;
    LinkedIn?: string;
    GitHub?: string;
    Facebook?: string;
};

export type UserData = {
    photo: string;
    name: string;
    summary: string,
    skills: UserSkill[];
    experiences: UserExperience[];
    contacts: UserContacts;
};
