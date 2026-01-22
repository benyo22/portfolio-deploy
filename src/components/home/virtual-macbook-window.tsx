'use client';

import { memo } from 'react';

import { FADE_IN_BASE_DELAY, FADE_IN_STAGGER, codeLines } from '@/src/lib/data';

import { FadeIn } from '../ui/fade-in';

type LineProps = {
  number: number;
  children: React.ReactNode;
  indent?: boolean;
};

function AnimatedLine({
  number,
  children,
  indent,
  delay,
}: LineProps & { delay: number }) {
  return (
    <FadeIn direction="right" delay={delay}>
      <div className="mb-2 flex items-center">
        <span className="mr-4 w-6 text-right text-gray-400 select-none dark:text-gray-500">
          {number}
        </span>
        <span
          className={`text-gray-800 dark:text-gray-200 ${indent ? 'ml-6' : ''}`}
        >
          {children}
        </span>
      </div>
    </FadeIn>
  );
}

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-purple-600 dark:text-purple-400">{children}</span>
);

const Variable = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-600 dark:text-blue-400">{children}</span>
);

const Property = ({ children }: { children: React.ReactNode }) => (
  <span className="text-red-600 dark:text-red-400">{children}</span>
);

const Value = ({ children }: { children: React.ReactNode }) => (
  <span className="text-green-600 dark:text-green-400">{children}</span>
);

export const VirtualMacbookWindow = memo(function VirtualMacbookWindow() {
  return (
    <div className="hidden lg:z-10 lg:flex lg:items-center lg:justify-start">
      <FadeIn direction="right" delay={0}>
        <div className="bg-background flex-col rounded-xl border border-gray-600 shadow-xl">
          <div className="bg-card flex min-w-110 items-center gap-2 rounded-t-xl border-b border-gray-600 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-600 hover:bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-300" />
            <div className="h-3 w-3 rounded-full bg-green-600 hover:bg-green-400" />

            {/* Header title */}
            <span className="text-md text-muted-foreground hover:text-foreground ml-6 cursor-default font-semibold select-none">
              developer.js
            </span>
          </div>

          {/* Code */}
          <div className="px-4 py-2 font-mono text-sm">
            <AnimatedLine number={1} delay={FADE_IN_BASE_DELAY}>
              <span className="text-green-600 dark:text-green-400">
                {'// Software Engineer'}
              </span>
            </AnimatedLine>

            <AnimatedLine
              number={2}
              delay={FADE_IN_BASE_DELAY + FADE_IN_STAGGER}
            >
              <Keyword>const</Keyword> <Variable>developer</Variable> ={' '}
              <span className="text-yellow-600 dark:text-yellow-400">
                {'{'}
              </span>
            </AnimatedLine>

            {codeLines.map((line, index) => (
              <AnimatedLine
                key={line.key}
                number={index + 3}
                indent
                delay={FADE_IN_BASE_DELAY + FADE_IN_STAGGER * (index + 2)}
              >
                <Property>{line.key}:</Property> <Value>{line.value},</Value>
              </AnimatedLine>
            ))}

            <AnimatedLine
              number={codeLines.length + 3}
              delay={
                FADE_IN_BASE_DELAY + FADE_IN_STAGGER * (codeLines.length + 2)
              }
            >
              <span className="text-yellow-600 dark:text-yellow-400">
                {'}'}
              </span>
            </AnimatedLine>
          </div>
        </div>
      </FadeIn>
    </div>
  );
});
