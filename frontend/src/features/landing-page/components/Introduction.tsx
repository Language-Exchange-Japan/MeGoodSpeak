import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * App introduction section.
 */
export const Introduction = () => {
  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-4xl leading-tight font-medium text-black lg:text-6xl">
                Learn new
                <span className="block text-gray-600">languages,</span>
                <span className="block">make new friends</span>
              </div>
              <p className="max-w-lg text-lg leading-relaxed text-gray-600 lg:text-xl">
                Connect with native speakers around the world. Practice conversations, improve your
                skills, and build lasting friendships through language exchange.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group flex items-center justify-center rounded-md bg-black px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-gray-800"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <button className="flex items-center justify-center rounded-md border border-gray-300 px-8 py-4 text-lg font-medium text-black transition-colors duration-200 hover:border-black">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current text-yellow-500" />
                <span> 4.9/5 rating</span>
              </div>
              <div>50k+ active learners</div>
              <div>100+ languages</div>
            </div>
          </div>

          <div className="relative">
            <Image
              priority={true}
              src="/images/People-talking.png"
              alt="People learning languages together"
              width={800}
              height={600}
              className="h-auto w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-500" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-green-500" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-black">Live Session</div>
                  <div className="text-xs text-gray-600">12 people practicing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
