import {
  CodeLineType,
  ConnectionsType,
  DeveloperType,
  ProjectType,
  SkillsType,
} from './types';

/* =====================
   Animation constants
===================== */

export const FADE_IN_BASE_DELAY = 150;
export const FADE_IN_STAGGER = 90;

/* =====================
   Developer code block
===================== */

const developer: DeveloperType = {
  name: 'Farkas Bence',
  skills: ['React', 'TypeScript', 'Java', 'Git'],
  focuses: ['Software Development', 'Web Development'],
  sports: 'Everyday',
  learning: 'Always',
};

export const codeLines: CodeLineType[] = Object.entries(developer).map(
  ([key, value]) => ({
    key,
    value: Array.isArray(value) ? JSON.stringify(value) : `'${value}'`,
  })
);

/* =====================
Projects
===================== */

export const projectsData = [
  {
    id: 'elsWorkoutApp',
    tech: [
      'React',
      'Tailwind',
      'Redux Toolkit + RTK Query',
      'Node.js',
      'Fastify',
      'Sequelize ORM',
      'MySQL',
    ],
    repoUrl: 'https://github.com/benyo22/els-workout-app',
  },
  {
    id: 'salaryCalculator',
    tech: ['React', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/benyo22/salary-calculator',
  },
  {
    id: 'potatoMapGame',
    tech: ['HTML5', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/benyo22/potato-map-game',
  },
  {
    id: 'pokemonCardTrader',
    tech: ['PHP', 'JSON', 'CSS'],
    repoUrl: 'https://github.com/benyo22/pokemon-card-trader',
  },
] satisfies ProjectType[];

/* =====================
   Connections
===================== */

export const connections = [
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/farkas-bence-it/',
    info: 'in/farkas-bence-it',
  },
  {
    kind: 'github',
    label: 'GitHub',
    href: 'https://github.com/benyo22',
    info: 'benyo22',
  },
] satisfies ConnectionsType[];

/* =====================
    Skills
===================== */

export const skills: SkillsType = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  backend: [
    'Node.js',
    'Fastify',
    'Java',
    'Prisma',
    'Sequelize',
    'MySQL',
    'PostgreSQL',
  ],
  tools: ['Git', 'Docker', 'Linux', 'Vercel', 'GitHub', 'GitLab'],
};
