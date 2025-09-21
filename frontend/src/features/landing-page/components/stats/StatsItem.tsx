import { useTranslations } from "next-intl";

export const StatItem = () => {
  const t = useTranslations("landing.stats.items");

  const stats = [
    { key: "learners" },
    { key: "languages" },
    { key: "conversations" },
    { key: "rating" },
  ];

  return (
    <>
      {stats.map((stat) => (
        <div key={stat.key} className="space-y-2 text-center">
          <div className="text-4xl font-bold text-black lg:text-5xl">{t(`${stat.key}.number`)}</div>
          <div className="text-lg font-semibold text-black">{t(`${stat.key}.label`)}</div>
          <div className="text-gray-600">{t(`${stat.key}.description`)}</div>
        </div>
      ))}
    </>
  );
};
