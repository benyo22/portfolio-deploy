import { useTranslations } from 'next-intl';

import { ConnectionsType } from '@/src/lib/types';
import { cn } from '@/src/lib/utils';

import { iconMap } from '../home/connections';
import { Card, CardContent } from '../ui/card';

export function ContactInfoCard({
  connection,
}: {
  connection: ConnectionsType;
}) {
  const t = useTranslations('contact');

  const brandStyles = {
    linkedin: {
      groupHover: 'group-hover:bg-blue-600',
    },
    github: {
      groupHover: 'group-hover:bg-foreground',
    },
  };

  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-colors hover:shadow-lg">
      <CardContent className="flex items-center gap-4">
        <div
          className={cn(
            'text-muted-foreground group-hover:text-primary-foreground rounded-full p-3 transition-colors',
            brandStyles[connection.kind].groupHover
          )}
        >
          {iconMap[connection.kind]}
        </div>
        <div>
          <p className="text-foreground font-medium">
            {t(`info.${connection.kind}`)}
          </p>
          <p className="text-muted-foreground text-sm">{connection.info}</p>
        </div>
      </CardContent>
    </Card>
  );
}
