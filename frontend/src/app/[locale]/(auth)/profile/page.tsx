"use client";
import dynamic from "next/dynamic";

const PersonalAccount = dynamic(() => import("../../../../features/me/personal-account"), {
  ssr: false,
});

export default function MePage() {
  return <PersonalAccount />;
}
