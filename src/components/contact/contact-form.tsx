'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

import { FADE_IN_BASE_DELAY } from '@/src/lib/data';
import { cn } from '@/src/lib/utils';

import { Button } from '../ui/button';
import { FadeIn } from '../ui/fade-in';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function ContactForm() {
  const t = useTranslations('contact');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);

      // Honeypot check
      if (formData.get('botcheck')) {
        setIsLoading(false);
        return toast.error('Bot detected!');
      }

      formData.append(
        'access_key',
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast.success(t('form.success'));

        setTimeout(() => {
          setIsSuccess(false);
          (e.target as HTMLFormElement).reset();
        }, 3000);
      } else {
        toast.error('Web3Forms Error!');
        console.error('Web3Forms Error:', data.error);
        setIsSuccess(false);
      }
    } catch (error) {
      toast.error('Network Error!');
      console.error('Network Error:', error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FadeIn direction="right" delay={FADE_IN_BASE_DELAY}>
      <div className="flex justify-center lg:justify-start">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Honeypot botcheck */}
          <input
            type="text"
            name="botcheck"
            className="hidden"
            autoComplete="off"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-md leading-none font-bold select-none"
              >
                {t('form.name')} <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="bg-card h-10 font-medium"
                disabled={isLoading || isSuccess}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-md leading-none font-bold select-none"
              >
                {t('form.email')} <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                placeholder="john.doe@example.com"
                className="bg-card h-10 font-medium"
                disabled={isLoading || isSuccess}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-md leading-none font-bold select-none"
            >
              {t('form.subject')} <span className="text-destructive">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              required
              placeholder={t('form.subject')}
              className="bg-card h-10 font-medium"
              disabled={isLoading || isSuccess}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-md leading-none font-bold select-none"
            >
              {t('form.message')} <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-card min-h-40 font-medium"
              placeholder={t('form.messagePlaceholder')}
              disabled={isLoading || isSuccess}
            />
          </div>

          <Button
            type="submit"
            className={cn(
              'shadow-chart-2/20 hover:shadow-chart-2/40 relative w-full cursor-pointer overflow-hidden text-base font-medium text-white shadow-md transition-all duration-500 select-none hover:shadow-xl/50',
              isSuccess
                ? 'bg-chart-4'
                : 'from-primary to-chart-2 bg-linear-to-r'
            )}
            disabled={isLoading || isSuccess}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('form.sending')}
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {t('form.success')}
              </>
            ) : (
              <>
                {t('form.send')}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </FadeIn>
  );
}
