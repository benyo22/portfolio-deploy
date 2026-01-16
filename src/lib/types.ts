/* =====================
   Navigation Menu
===================== */

export type NavigationMenuItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export type NavigationMenu = NavigationMenuItem[];

/* =====================
   Developer code block
===================== */

export type DeveloperType = {
  name: string;
  skills: string[];
  focuses: string[];
  sports: string;
  learning: string;
};

export type CodeLineType = {
  key: string;
  value: string;
};

/* =====================
   Projects
===================== */

export type ProjectType = {
  id: string;
  tech: string[];
  repoUrl: string;
};

export type ProjectListType = ProjectType[];

/* =====================
   Connections
===================== */

export type ConnectionsType = {
  kind: ConnectionKind;
  label: string;
  href: string;
  info: string;
};

type ConnectionKind = 'linkedin' | 'github';

/* =====================
   Skills
===================== */

export type SkillsType = {
  frontend: string[];
  backend: string[];
  tools: string[];
};
