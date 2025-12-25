
export interface ThematicArea {
  id: string;
  title: string;
  context: string;
  description: string;
  focus: string[];
  image: string;
  impact?: string;
}

export interface TeamMember {
  role: string;
  name: string;
  image?: string;
}

export interface Report {
  id: string;
  title: string;
  year: string;
  summary: string;
  image: string;
  downloadUrl: string;
}

export interface ActivityStory {
  id: string;
  title: string;
  location: string;
  date: string;
  story: string;
  image: string;
  category: string;
}
