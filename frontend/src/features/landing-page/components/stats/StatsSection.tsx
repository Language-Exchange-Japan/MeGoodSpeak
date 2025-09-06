import { StatItem } from "./StatsItem";

export const StatsSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium text-black lg:text-5xl">
            Trusted by learners worldwide
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <StatItem />
        </div>
      </div>
    </section>
  );
};
