'use client';

import {
  FADE_IN_BASE_DELAY,
  FADE_IN_STAGGER,
  projectsData,
} from '@/src/lib/data';

import { FadeIn } from '../ui/fade-in';
import { ProjectCard } from './project-card';

export function ProjectCardList() {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project, index) => (
        <FadeIn
          key={project.id}
          direction="bottom"
          delay={FADE_IN_BASE_DELAY + index * FADE_IN_STAGGER}
        >
          <ProjectCard project={project} />
        </FadeIn>
      ))}
    </div>
  );
}
