import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CTASection = () => {
  return (
    <section className="bg-black px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl leading-tight font-medium text-white lg:text-5xl">
            Ready to start your language journey?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 lg:text-xl">
            Join thousands of learners who are already improving their language skills with native
            speakers.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="group inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-black transition-colors duration-200 hover:bg-gray-100"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-400">
            Free to start • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
