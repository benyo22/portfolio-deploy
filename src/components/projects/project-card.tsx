import { FaGithub } from 'react-icons/fa';

import { useTranslations } from 'next-intl';

import { ProjectType } from '@/src/lib/types';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '../ui/card';

export function ProjectCard({ project }: { project: ProjectType }) {
  const t = useTranslations('projects');

  return (
    <Card className="border-border/50 bg-card/50 hover:border-primary/50 hover:shadow-primary/10 group flex h-full transform flex-col overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <CardContent className="flex-1 p-6">
        <CardTitle className="group-hover:text-primary mb-2 text-xl transition-colors">
          <h3>{t(`items.${project.id}.title`)}</h3>
        </CardTitle>

        <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
          {t(`items.${project.id}.description`)}
        </CardDescription>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-normal select-none"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex gap-4 p-6 pt-0">
        <Button
          className="from-primary to-chart-2 shadow-chart-2/20 hover:shadow-chart-2/40 relative w-full gap-2 overflow-hidden bg-linear-to-r text-white shadow-md transition-all duration-500 select-none hover:shadow-xl/50"
          asChild
        >
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="size-4" />
            {t('buttons.code')}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
