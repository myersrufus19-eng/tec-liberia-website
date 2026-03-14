import { ThematicArea, TeamMember, Report, ActivityStory } from './types';

export const THEMES: ThematicArea[] = [
  {
    id: "e-vawg",
    title: "Gender Equality & Ending Violence Against Women and Girls (E-VAWG)",
    context: "Addressing SGBV, justice gaps, and harmful social norms.",
    description: "Our comprehensive approach to safety and equality focuses on transforming societal attitudes and providing robust support systems for survivors of gender-based violence. We work with local leaders and community members to ensure a safe environment for every woman and girl.",
    focus: ["Community-based SGBV prevention", "Survivor support & legal literacy", "Men & boys as allies", "Community accountability"],
    focusDetails: [
      {
        id: "sgbv-prevention",
        title: "Community-Based Prevention of Sexual and Gender-Based Violence (SGBV)",
        content: "Sexual and gender-based violence remains a critical challenge in Liberia, driven by poverty, post-conflict trauma, weak justice systems, harmful traditional practices, and a culture of silence that discourages reporting. In many communities, survivors face stigma, fear of retaliation, and limited access to protection or justice. The Empowerment Circle Inc. (TEC) addresses these challenges through community-based SGBV prevention approaches that place local actors at the center of change. We work with women, girls, traditional leaders, youth groups, and community structures to raise awareness, challenge harmful norms, and promote zero tolerance for violence. Through dialogue sessions, safe spaces, and community education, TEC supports communities to recognize SGBV as a human rights violation and a barrier to sustainable development."
      },
      {
        id: "legal-literacy",
        title: "Survivor Support and Legal Literacy",
        content: "Access to survivor-centered services and justice remains limited in Liberia, particularly in rural areas where legal knowledge and referral services are weak. Many survivors are unaware of their rights or where to seek help, resulting in underreporting and impunity for perpetrators. TEC strengthens survivor support systems by providing legal literacy, referral linkages, and psychosocial support pathways. We empower survivors and community members with information on legal rights, reporting procedures, and available health and protection services. By working closely with local justice actors and service providers, TEC helps survivors navigate existing systems with dignity and confidentiality while advocating for survivor-centered responses."
      },
      {
        id: "men-allies",
        title: "Men and Boys as Allies for Gender Equality",
        content: "Deeply rooted gender norms and power imbalances continue to fuel violence against women and girls in Liberia. Meaningful change cannot occur without engaging men and boys as part of the solution. TEC actively promotes men and boys as allies by engaging male community leaders, youth, and peer groups in conversations around positive masculinity, non-violent behavior, and shared responsibility for gender equality. Through mentorship, community dialogues, and advocacy activities, we support men and boys to challenge harmful behaviors, become champions for respectful relationships, and protect the rights of women and girls."
      },
      {
        id: "accountability",
        title: "Strengthening Community Accountability",
        content: "Weak accountability mechanisms remain a major challenge in Liberia, allowing SGBV cases to go unresolved and reinforcing distrust in justice systems. Communities often lack the tools to demand action or hold duty bearers accountable. TEC strengthens community accountability by supporting community monitoring initiatives, training local advocates, and facilitating dialogue between communities, service providers, and local authorities. By empowering communities to track cases, demand timely responses, and promote transparency, TEC helps build trust, reduce impunity, and create safer environments for women and girls."
      }
    ],
    image: "https://images.unsplash.com/photo-1573497620053-ea5310f94f17?q=80&w=800&auto=format&fit=crop",
    impact: "Over 20 cases mediated and 2,000 community members reached with SGBV prevention training."
  },
  {
    id: "economic-empowerment",
    title: "Women & Youth Economic Empowerment",
    context: "Responding to unemployment and economic exclusion.",
    description: "Liberia continues to face high levels of unemployment and underemployment, particularly among women and youth. Limited access to education, skills training, finance, and markets has left many women and young people trapped in low-income, informal livelihoods, increasing their vulnerability to poverty, exploitation, and gender-based violence. The Empowerment Circle Inc. (TEC) is committed to strengthening the economic agency of women and youth by promoting inclusive, sustainable, and locally driven livelihood opportunities. Our approach focuses on building practical skills, expanding access to finance, strengthening value-chain participation, and equipping beneficiaries with the tools needed to thrive in a rapidly changing economy.",
    focus: [
      "Entrepreneurship & vocational skills",
      "Village Savings and Loans Associations (VSLAs)",
      "Agribusiness & value-chain inclusion",
      "Digital & financial literacy"
    ],
    focusDetails: [
      {
        id: "vocational-skills",
        title: "Entrepreneurship and Vocational Skills Development",
        content: "A major barrier to economic independence in Liberia is the mismatch between education and employable skills. Many young people and women lack access to quality vocational and entrepreneurship training that responds to local market demands. TEC supports entrepreneurship and vocational skills development by providing hands-on training in trades, small business management, and income-generating activities. We focus on practical, market-oriented skills that enable women and youth to start, grow, and sustain micro and small enterprises, increasing their employability and self-reliance."
      },
      {
        id: "vslas",
        title: "Village Savings and Loan Associations (VSLAs)",
        content: "Access to formal financial services remains limited across Liberia, especially in rural and peri-urban communities where banks are scarce and collateral requirements exclude women and youth. TEC promotes Village Savings and Loan Associations (VSLAs) as a proven, community-based solution for financial inclusion. Through VSLA formation and strengthening, we support women and youth to save regularly, access small loans, manage risks, and invest in productive activities. VSLAs not only increase household income but also strengthen social cohesion and women’s decision-making power within families and communities."
      },
      {
        id: "agribusiness",
        title: "Agribusiness and Value-Chain Inclusion",
        content: "Agriculture remains the backbone of Liberia’s economy, yet women and youth are often excluded from profitable segments of agricultural value chains due to limited access to land, inputs, technology, and markets. TEC advances agribusiness inclusion by supporting women and youth to engage in climate-smart agriculture, agro-processing, and value-addition activities. We promote linkages to markets, cooperatives, and agribusiness services, enabling participants to move beyond subsistence farming toward sustainable and income-generating agricultural enterprises."
      },
      {
        id: "digital-literacy",
        title: "Digital and Financial Literacy",
        content: "Digital exclusion and low financial literacy continue to limit economic opportunities for women and youth in Liberia. Many lack the skills to use digital tools, mobile money platforms, and basic financial services essential for modern entrepreneurship. TEC integrates digital and financial literacy into all economic empowerment programs. We equip women and youth with skills in basic digital tools, mobile banking, budgeting, record-keeping, and financial planning. These competencies enhance business efficiency, improve access to markets and financial services, and increase resilience in an increasingly digital economy."
      }
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    impact: "15 VSLAs established, empowering 450 women with access to micro-capital."
  },
  {
    id: "girls-education",
    title: "Girls’ Education, Leadership & Life Skills",
    context: "Reducing dropouts, early pregnancy, and leadership gaps.",
    description: "Despite progress in recent years, girls in Liberia continue to face significant barriers to education and leadership. Poverty, teenage pregnancy, early marriage, gender-based violence, and harmful social norms contribute to high dropout rates among adolescent girls. Many girls who leave school, particularly young mothers, face stigma and limited opportunities to re-enter the education system, undermining their long-term economic and social prospects. The Empowerment Circle Inc. (TEC) is committed to ensuring that girls in Liberia are educated, confident, and empowered to lead. Our approach addresses both the structural and social factors that limit girls’ participation in education while equipping them with the knowledge, skills, and support systems needed to thrive.",
    focus: [
      "School Retention and Re-Entry Support",
      "Girls’ Leadership Clubs",
      "Mentorship Programs",
      "Sexual and Reproductive Health and Rights (SRHR) Education"
    ],
    focusDetails: [
      {
        id: "school-retention",
        title: "School Retention and Re-Entry Support",
        content: "School dropout remains a critical challenge for girls in Liberia, especially in rural and low-income communities. Teenage pregnancy and household economic pressures often force girls out of school, with few pathways for return. TEC promotes school retention and re-entry by working with schools, families, and communities to support girls at risk of dropping out. We provide counseling, re-entry guidance for adolescent mothers, and support for school materials where possible. By addressing stigma and engaging parents and community leaders, TEC helps create enabling environments that encourage girls to remain in or return to school."
      },
      {
        id: "leadership-clubs",
        title: "Girls’ Leadership Clubs",
        content: "Girls’ voices remain underrepresented in leadership and decision-making spaces across Liberia. Social norms often discourage girls from expressing opinions or aspiring to leadership roles. TEC establishes girls’ leadership clubs in schools and communities to build confidence, critical thinking, and leadership skills. Through peer learning, debates, and civic engagement activities, girls develop the skills and self-belief needed to participate actively in school governance and community development."
      },
      {
        id: "mentorship-programs",
        title: "Mentorship Programs",
        content: "Many girls in Liberia lack access to positive female role models who can guide them through academic, personal, and career development challenges. TEC implements mentorship programs that connect girls with trained mentors, including female professionals, community leaders, and peer mentors. These relationships provide guidance, motivation, and practical advice, helping girls navigate challenges, set goals, and envision pathways to higher education and leadership."
      },
      {
        id: "srhr-education",
        title: "Sexual and Reproductive Health and Rights (SRHR) Education",
        content: "Limited access to accurate sexual and reproductive health information contributes to high rates of teenage pregnancy, unsafe practices, and school dropout in Liberia. Cultural taboos and misinformation further restrict open discussion. TEC integrates SRHR education into girls’ empowerment programming through age-appropriate, culturally sensitive approaches. We equip girls with knowledge about their bodies, health, rights, and decision-making, while also engaging parents, teachers, and community leaders to promote supportive attitudes and reduce stigma."
      }
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    impact: "Supported 150 girls back into formal education systems."
  },
  {
    id: "civic-engagement",
    title: "Youth Civic Engagement & Peacebuilding",
    context: "Promoting youth voices in governance and community peace.",
    description: "Liberia’s peace and democratic gains remain fragile, particularly in the context of youth unemployment, political polarization, weak civic trust, and limited youth participation in governance. Young people constitute the majority of the population, yet many remain excluded from decision-making processes, increasing the risk of social unrest, electoral violence, and community-level conflict. The Empowerment Circle Inc. (TEC) works to strengthen youth leadership, civic responsibility, and peaceful community engagement as foundations for sustainable peace and inclusive governance in Liberia.",
    focus: [
      "Leadership Training",
      "Policy Advocacy",
      "Conflict Resolution",
      "Community Dialogue"
    ],
    focusDetails: [
      {
        id: "leadership-training",
        title: "Leadership Training",
        content: "Youth leadership potential in Liberia is often undermined by limited access to training, mentorship, and platforms for engagement. Many young people lack the skills and confidence to participate effectively in civic and political processes. TEC delivers leadership training programs that equip youth—especially young women—with skills in civic responsibility, ethical leadership, public speaking, and community organizing. These programs prepare youth to engage constructively in local governance structures, student councils, community development committees, and civil society initiatives."
      },
      {
        id: "policy-advocacy",
        title: "Policy Advocacy",
        content: "Youth voices are rarely represented in policy formulation and implementation at local and national levels in Liberia. As a result, policies often fail to reflect the realities faced by young people and marginalized communities. TEC supports youth-led policy advocacy by building capacity in policy analysis, advocacy strategies, and evidence-based engagement. We facilitate dialogue between youth groups, civil society actors, and government institutions to promote inclusive policies on education, employment, gender equality, and peacebuilding."
      },
      {
        id: "conflict-resolution",
        title: "Conflict Resolution",
        content: "Liberia’s history of civil conflict, combined with land disputes, political tensions, and youth marginalization, continues to fuel localized conflicts across communities. TEC integrates conflict resolution and peacebuilding approaches into youth programming by training youth as peace ambassadors and mediators. Through non-violent communication, mediation skills, and early warning mechanisms, young people are empowered to prevent, manage, and resolve conflicts within their communities."
      },
      {
        id: "community-dialogue",
        title: "Community Dialogue",
        content: "Lack of trust between communities, leaders, and institutions remains a barrier to social cohesion in Liberia. Misinformation, exclusion, and unresolved grievances can escalate into conflict if not addressed. TEC facilitates inclusive community dialogues that bring together youth, women, traditional leaders, local authorities, and security actors to discuss community challenges and co-create solutions. These dialogues promote mutual understanding, accountability, and peaceful coexistence while strengthening community ownership of peacebuilding processes."
      }
    ],
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
    title: "Climate Justice, Environment, and Sustainable Livelihoods",
    context: "Building resilient communities against environmental changes.",
    description: "Liberia is highly vulnerable to the impacts of climate change, including flooding, coastal erosion, unpredictable rainfall, prolonged dry seasons, and declining soil fertility. These challenges disproportionately affect rural communities, women farmers, and youth who depend on natural resources for their livelihoods. Environmental degradation, deforestation, and unsustainable land-use practices further undermine food security and community resilience. The Empowerment Circle Inc. (TEC) promotes climate-resilient livelihoods and environmental stewardship by empowering women and youth as agents of climate adaptation, conservation, and advocacy.",
    focus: [
      "Climate-Smart Agriculture",
      "Women-Led Adaptation",
      "Tree Planting and Environmental Restoration",
      "Youth Climate Advocacy"
    ],
    focusDetails: [
      {
        id: "climate-smart-ag",
        title: "Climate-Smart Agriculture",
        content: "Smallholder farmers in Liberia face declining yields due to changing weather patterns, soil degradation, and limited access to climate-resilient farming practices. Many rely on traditional methods that are no longer sustainable under current climate conditions. TEC supports climate-smart agriculture by training farmers—particularly women and youth—in sustainable practices such as soil and water conservation, improved crop management, agroforestry, and climate-resilient cropping systems. These approaches enhance productivity, protect ecosystems, and improve household food security while reducing environmental harm."
      },
      {
        id: "women-adaptation",
        title: "Women-Led Adaptation",
        content: "Women in Liberia play a central role in agriculture and natural resource management, yet they have limited access to land, finance, climate information, and decision-making spaces. Despite this, women are often the first to respond to climate shocks at the household and community levels. TEC advances women-led climate adaptation by strengthening women’s leadership, access to resources, and participation in environmental decision-making. We support women’s groups to design and implement locally driven adaptation solutions that improve livelihoods while building resilience to climate impacts."
      },
      {
        id: "tree-planting",
        title: "Tree Planting and Environmental Restoration",
        content: "Liberia’s forests are a critical national and global resource, yet deforestation driven by logging, agriculture, and fuelwood extraction continues to threaten biodiversity and ecosystem services. TEC promotes tree planting and community-based environmental restoration through reforestation initiatives, agroforestry systems, and community forestry programs. These efforts contribute to carbon sequestration, soil protection, watershed management, and sustainable livelihoods, while fostering environmental responsibility among community members."
      },
      {
        id: "youth-climate",
        title: "Youth Climate Advocacy",
        content: "Young people in Liberia are increasingly affected by climate change but remain underrepresented in climate decision-making and environmental advocacy spaces. TEC strengthens youth climate advocacy by building awareness of climate justice, environmental rights, and sustainable development. Through youth-led campaigns, community education, and policy engagement, we empower young people to advocate for climate-responsive policies and sustainable natural resource management at local and national levels."
      }
    ],
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
  { role: "Board Chair", name: "Madam Irene P. Dennis", image: "https://i.ibb.co/d0wSH6mN/bmm-photo.jpg" },
  { role: "Secretary", name: "Madam Patience Kun", image: "https://i.ibb.co/9kr8fyWZ/bmm-photo.jpg" },
  { role: "Treasurer", name: "Madam Vera N. Sumo", image: "https://i.ibb.co/DfYdvkXQ/bmm-photo.jpg" },
  { role: "Resources Mobilization Focus Person-Kentuky", name: "Mr. Henry Darwolo", image: "https://i.ibb.co/pjFQRf2f/bmm-photo.jpg" },
  { role: "Resources Mobilization Focus Person-Minnesota", name: "Madam Marie Myers", image: "https://i.ibb.co/ZzfzX6yM/bmm-photo.jpg" },
  { role: "Board Member", name: "Mrs. Linda Myers Kai", image: "https://i.ibb.co/zhRY5n4M/bmm-photo.jpg" },
  { role: "Board Member", name: "Ms. Gormah Flomo", image: "https://i.ibb.co/pjTq4y4Y/bmm-photo.jpg" },
  { role: "Board Member", name: "Mr. Samuel Flomo", image: "https://i.ibb.co/C3qh914d/bmm-photo.jpg" }
];

export const STAFF: TeamMember[] = [
  {
    role: "Executive Director",
    name: "Danielle Wornee",
    image: "https://i.ibb.co/RGmZWHh7/bmm-photo.jpg",
  },
  {
    role: "Program Manager",
    name: "Joseph K. Darwolo",
    image: "https://i.ibb.co/bqVSf41/bmm-photo.jpg",
  },
  {
    role: "Program Assistant",
    name: "Vivian V. Moulton",
    image: "https://i.ibb.co/39bYYg2d/bmm-photo.jpg",
  },
  {
    role: "MEAL Manager",
    name: "Uriah Paye",
    image: "https://i.ibb.co/vC6sq2Hv/bmm-photo.jpg",
  },
  {
    role: "Admin. & Finance Manager",
    name: "Adolcia S. Wade",
    image: "https://i.ibb.co/GvBBbDgV/bmm-photo.jpg",
  },
  {
    role: "Project Officer",
    name: "Alexander Nufeatalai",
    image: "https://i.ibb.co/r2Z0VSg8/bmm-photo.jpg", 
  },
  {
    role: "Finance Officer",
    name: "Diamond Kolliemeni",
    image: "https://i.ibb.co/kj4nzLP/bmm-photo.jpg",
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