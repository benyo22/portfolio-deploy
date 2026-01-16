import { useTranslations } from 'next-intl';

import { Code2 } from 'lucide-react';

import { Badge } from '@/src/components/ui/badge';
import { Card, CardContent } from '@/src/components/ui/card';
import { SkillsType } from '@/src/lib/types';

export function SkillsFrontend({ skills }: { skills: SkillsType }) {
  const t = useTranslations('about');

  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-colors hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
            <Code2 className="size-6" />
          </div>
          <h4 className="text-lg font-semibold">{t('skills.frontend')}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.frontend.map((skill) => (
            <Badge key={skill} variant="secondary" className="font-normal">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
