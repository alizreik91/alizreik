export interface Project {
  id: number;
  title: string;
  category: 'Social Media Poster' | 'Logo Design';
  year: number;
  tools: string[];
  description: string;
  objectives: string[];
  image: string;
}

export interface Experience {
  id: number;
  type: 'professional' | 'education';
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'creative' | 'productivity';
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'certificates' | 'projects' | 'contact';

export interface NavigationItem {
  id: SectionId;
  label: string;
  href: string;
}
