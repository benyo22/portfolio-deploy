import { memo, useMemo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { connections } from '@/src/lib/data';
import { cn } from '@/src/lib/utils';

import { Button } from '../ui/button';

export const iconMap = {
  linkedin: <FaLinkedin className="size-5" />,
  github: <FaGithub className="size-5" />,
};

const brandStyles = {
  linkedin: {
    hover: 'hover:text-blue-600',
  },
  github: {
    hover: 'hover:text-foreground',
  },
};

const ariaLabels = {
  linkedin: 'Visit LinkedIn profile',
  github: 'Visit GitHub profile',
};

export const Connections = memo(function Connections() {
  return (
    <div className="flex justify-center gap-2 lg:justify-start">
      {connections.map((connection) => (
        <Button key={connection.href} variant="outline" asChild>
          <a
            href={connection.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabels[connection.kind]}
            className={cn(
              'text-muted-foreground transform transition-all duration-500 hover:scale-110',
              brandStyles[connection.kind].hover
            )}
          >
            <span aria-hidden="true">{iconMap[connection.kind]}</span>
          </a>
        </Button>
      ))}
    </div>
  );
});
