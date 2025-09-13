import { Award, Calendar, MessageCircle, Users } from "lucide-react";

export const FeatureCard = () => {
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-black" />,
      title: "Real Conversations",
      description:
        "Practice with native speakers through video calls, voice messages, and text chat.",
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Global Community",
      description: "Connect with learners and teachers from over 190 countries worldwide.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-black" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with our easy-to-use calendar system.",
    },
    {
      icon: <Award className="h-8 w-8 text-black" />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and achievement badges.",
    },
  ];
  return (
    <>
      {features.map((feature) => (
        <div key={feature.title} className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="rounded-xl bg-gray-100 p-3">{feature.icon}</div>
          </div>
          <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </>
  );
};
