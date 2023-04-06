export type UserSkill = {
  name: string;
  level: number;
  emoji?: string;
};

export type UserExperience = {
  company: string;
  site: string;
  position: string;
  dates: string;
  description: string;
  keyNotes: string[];
  skills: string[];
};

export type UserContacts = {
  Tel: string;
  Telegram: string;
  Email: string;
  LinkedIn: string;
  GitHub: string;
  Facebook: string;
  cv: string;
};

export type UserData = {
  photo: string;
  name: string;
  summary: string;
  skills: UserSkill[];
  experiences: UserExperience[];
  contacts: UserContacts;
};
