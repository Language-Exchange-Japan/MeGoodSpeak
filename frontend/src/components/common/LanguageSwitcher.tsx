"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectShadcn";
import { defaultLocale } from "@/i18n/config";

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
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>(defaultLocale);

  const handleLanguageChange = (value: Locale) => {
    setSelectedLanguage(value);
    // TODO: Implement actual language switching logic
    console.log("Language changed to:", value);
  };

  const selectedOption = languageOptions.find((option) => option.value === selectedLanguage);

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-fit min-w-[140px]">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <SelectValue>
            {selectedOption && (
              <span className="flex items-center gap-2">
                <span>{selectedOption.label}</span>
              </span>
            )}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languageOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <span className="flex items-center gap-2">
              <span>{option.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
