import { Award, Calendar, MessageCircle, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeatureCard = () => {
  const t = useTranslations("features.items");

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-black" />,
      key: "realConversations",
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      key: "globalCommunity",
    },
    {
      icon: <Calendar className="h-8 w-8 text-black" />,
      key: "flexibleScheduling",
    },
    {
      icon: <Award className="h-8 w-8 text-black" />,
      key: "trackProgress",
    },
  ];

  return (
    <>
      {features.map((feature) => (
        <div key={feature.key} className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="rounded-xl bg-gray-100 p-3">{feature.icon}</div>
          </div>
          <h3 className="text-xl font-semibold text-black">{t(`${feature.key}.title`)}</h3>
          <p className="text-gray-600">{t(`${feature.key}.description`)}</p>
        </div>
      ))}
    </>
  );
};
