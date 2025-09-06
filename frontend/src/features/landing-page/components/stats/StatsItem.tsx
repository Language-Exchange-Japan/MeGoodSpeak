export const StatItem = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Active Learners",
      description: "Join our growing community",
    },
    {
      number: "100+",
      label: "Languages",
      description: "From popular to rare languages",
    },
    {
      number: "1M+",
      label: "Conversations",
      description: "Practice sessions completed",
    },
    {
      number: "4.9★",
      label: "User Rating",
      description: "Based on 10,000+ reviews",
    },
  ];
  return (
    <>
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2 text-center">
          <div className="text-4xl font-bold text-black lg:text-5xl">{stat.number}</div>
          <div className="text-lg font-semibold text-black">{stat.label}</div>
          <div className="text-gray-600">{stat.description}</div>
        </div>
      ))}
    </>
  );
};
