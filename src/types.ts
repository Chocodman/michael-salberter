export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  categories: string[];
  year: string;
  type: 'PERSONAL PROJECT' | 'PROFESSIONAL WORK' | 'FREELANCE PROJECT';
  client?: string;
  location?: string;
  role?: string;
  format?: string;
  heroImage: string;
  secondaryImages?: string[];
  mockupImages?: string[];
  gridImages?: {
    url: string;
    caption?: string;
    span?: number;
    aspect?: string;
  }[];
  context?: string;
  concept?: string;
  process?: string;
  finalWork?: string;
  applications?: string[];
  colorTheme?: string;
  accentColor?: string;
  videoUrl?: string;
  videoPoster?: string;
  isMotion?: boolean;
  isSport?: boolean;
}

export interface MotionProjectItem {
  id: string;
  title: string;
  client: string;
  format: string;
  role: string;
  year: string;
  videoUrl: string;
  poster: string;
  description: string;
  tags: string[];
}

export interface MoreWorkItem {
  id: string;
  title: string;
  category: string;
  year: string;
  type: string;
  image: string;
  details: string;
}

export type Project = ProjectItem;
