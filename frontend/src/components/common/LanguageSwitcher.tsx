"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectShadcn";
import { usePathname, useRouter } from "@/i18n/navigation";

import type { Locale } from "@/i18n/config";

interface LanguageOption {
  value: Locale;
  label: string;
}

const languageOptions: LanguageOption[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ja",
    label: "日本語",
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (value: Locale) => {
    if (value === locale || isPending) return;

    startTransition(() => {
      // Use next-intl's router which automatically handles locale prefixes
      router.replace(pathname, { locale: value });
    });
  };

  const selectedOption = languageOptions.find((option) => option.value === locale);

  return (
    <Select value={locale} onValueChange={handleLanguageChange} disabled={isPending}>
      <SelectTrigger className="w-fit min-w-[140px] cursor-pointer">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <SelectValue>
            {selectedOption && (
              <span className="flex items-center gap-2">
                <span>{selectedOption.label}</span>
                {isPending && <span className="text-xs opacity-50">...</span>}
              </span>
            )}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value} className="cursor-pointer">
            <span className="flex items-center gap-2">
              <span>{option.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
