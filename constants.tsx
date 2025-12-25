
import { ThematicArea, TeamMember, Report, ActivityStory } from './types';

export const THEMES: ThematicArea[] = [
  {
    id: "e-vawg",
    title: "Gender Equality & Ending Violence Against Women and Girls (E-VAWG)",
    context: "Addressing SGBV, justice gaps, and harmful social norms.",
    description: "Our comprehensive approach to safety and equality focuses on transforming societal attitudes and providing robust support systems for survivors of gender-based violence. We work with local leaders and community members to ensure a safe environment for every woman and girl.",
    focus: ["Community-based SGBV prevention", "Survivor support & legal literacy", "Men & boys as allies", "Community accountability"],
    image: "https://images.unsplash.com/photo-1573497620053-ea5310f94f17?q=80&w=800&auto=format&fit=crop",
    impact: "Over 500 cases mediated and 2,000 community members reached with SGBV prevention training."
  },
  {
    id: "economic-empowerment",
    title: "Women & Youth Economic Empowerment",
    context: "Responding to unemployment and economic exclusion.",
    description: "We equip women and youth with the tools needed for financial independence, focusing on sustainable livelihoods, local market integration, and access to capital through VSLA programs.",
    focus: ["Entrepreneurship & vocational skills", "Village Savings and Loans Associations (VSLAs)", "Agribusiness inclusion", "Digital & financial literacy"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    impact: "150 VSLAs established, empowering 4,500 women with access to micro-capital."
  },
  {
    id: "girls-education",
    title: "Girls’ Education, Leadership & Life Skills",
    context: "Reducing dropouts, early pregnancy, and leadership gaps.",
    description: "Education is the foundation of empowerment. We work to keep girls in school and prepare them for future leadership roles through mentorship and life skills training.",
    focus: ["School retention & re-entry", "Girls’ leadership clubs", "Mentorship programs", "SRHR education"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    impact: "Supported 1,200 girls back into formal education systems."
  },
  {
    id: "civic-engagement",
    title: "Youth Civic Engagement & Peacebuilding",
    context: "Promoting youth voices in governance and community peace.",
    description: "We foster a culture of active citizenship among young Liberians, ensuring they are at the forefront of democratic processes and community peacebuilding initiatives.",
    focus: ["Leadership training", "Policy advocacy", "Conflict resolution", "Community dialogue"],
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    impact: "Training provided to 300 youth leaders across 5 counties."
  },
  {
    id: "health-srhr",
    title: "Health, Well-Being & SRHR",
    context: "Improving access to health services and mental well-being.",
    description: "We focus on the holistic health of women and youth, ensuring access to sexual and reproductive health rights and mental health support within rural communities.",
    focus: ["SRHR awareness", "Mental health support", "Maternal & adolescent health", "Menstrual health hygiene"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    impact: "Distributed 5,000 dignity kits and reached 3,000 youth with SRHR education."
  },
  {
    id: "climate-justice",
    title: "Climate Action & Environmental Agency",
    context: "Building resilient communities against environmental changes.",
    description: "Empowering communities to lead local environmental initiatives and adapt to the impacts of climate change through sustainable agricultural practices.",
    focus: ["Climate-smart agriculture", "Women-led adaptation", "Tree planting", "Youth climate advocacy"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    impact: "Initiated 10 community-led reforestation projects."
  },
  {
    id: "governance",
    title: "Governance, Policy Advocacy & Social Accountability",
    context: "Promoting transparency and inclusive governance.",
    description: "Strengthening the capacity of citizens to engage with their leaders and hold institutions accountable for quality service delivery.",
    focus: ["Policy advocacy", "Budget tracking", "Community scorecards", "Women & youth leadership training"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    impact: "Facilitated 20 community-authority townhall dialogues on public service delivery."
  }
];

export const BOARD: TeamMember[] = [
  { role: "Board Chair", name: "Hon. Martha Kollie", image: "https://i.pravatar.cc/300?u=martha" },
  { role: "Vice Chair", name: "Dr. Siafa Johnson", image: "https://i.pravatar.cc/300?u=siafa" },
  { role: "Treasurer", name: "Madam Bendu Freeman", image: "https://i.pravatar.cc/300?u=bendu" },
  { role: "Secretary", name: "Cllr. Peter Wright", image: "https://i.pravatar.cc/300?u=peter" },
  { role: "Board Member", name: "Rev. Comfort Doe", image: "https://i.pravatar.cc/300?u=comfort" }
];

export const STAFF: TeamMember[] = [
  {
    role: "Executive Director",
    name: "Danielle Wornee",
    image: "https://i.pravatar.cc/300?u=danielle",
  },
  {
    role: "Program Manager",
    name: "Joseph K. Darwolo",
    image: "https://i.pravatar.cc/300?u=joseph",
  },
  {
    role: "Program Assistant",
    name: "Vivian V. Moulton",
    image: "https://i.pravatar.cc/300?u=vivian",
  },
  {
    role: "MEAL Manager",
    name: "Uriah Paye",
    image: "https://i.pravatar.cc/300?u=uriah",
  },
  {
    role: "Project Officer",
    name: "Alexander Nufeatalai",
    image: "https://i.pravatar.cc/300?u=alexander",
  },
  {
    role: "Finance & Admin Officer",
    name: "Diamond Kolliemeni",
    image: "https://i.pravatar.cc/300?u=diamond",
  },
];

export const REPORTS: Report[] = [
  {
    id: "annual-report-2023",
    title: "Annual Impact Report 2023",
    year: "2023",
    summary: "A comprehensive look at our achievements in 2023, including the expansion of our VSLA programs and SGBV advocacy across five counties.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    downloadUrl: "#"
  },
  {
    id: "sgbv-assessment-2024",
    title: "Community SGBV Response Assessment",
    year: "2024",
    summary: "Critical data and findings on community-led justice gaps and survivor support needs in rural Liberia.",
    image: "https://images.unsplash.com/photo-1582213726892-25743b71939b?q=80&w=800&auto=format&fit=crop",
    downloadUrl: "#"
  },
  {
    id: "youth-empowerment-study",
    title: "Youth Economic Agency Study",
    year: "2023",
    summary: "Insights into vocational training effectiveness and the impact of digital literacy on youth employment in Monrovia.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    downloadUrl: "#"
  }
];

export const ACTIVITY_STORIES: ActivityStory[] = [
  {
    id: "vsla-bong-2024",
    title: "Seed of Hope: The Gbarnga VSLA",
    location: "Gbarnga, Bong County",
    date: "February 2024",
    story: "Witnessing 30 women come together to save their first $500. This VSLA is now funding four small businesses and sending six girls to primary school.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    category: "Economic Empowerment"
  },
  {
    id: "dialogue-nimba",
    title: "Unity Over Silence",
    location: "Sanniquellie, Nimba",
    date: "March 2024",
    story: "A community townhall where local chiefs and youth leaders drafted a joint charter for peace during election cycles.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    category: "Civic Engagement"
  },
  {
    id: "mentorship-monrovia",
    title: "The Next Generation",
    location: "Monrovia",
    date: "January 2024",
    story: "Our weekly mentorship club for adolescent girls. Here, students learn about SRHR and leadership in a safe, supportive environment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    category: "Girls' Education"
  },
  {
    id: "climate-training",
    title: "Green Agency",
    location: "Margibi County",
    date: "April 2024",
    story: "Youth volunteers planting mangroves and learning sustainable soil management to combat erosion in coastal communities.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    category: "Climate Action"
  }
];
