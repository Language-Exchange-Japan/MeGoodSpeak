import { setRequestLocale } from "next-intl/server";

import { HeaderPublic } from "@/components/common/headers/HeaderPublic";
import Layout from "@/components/common/Layout";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AuthLayout({ children, params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeaderPublic />
      <Layout>{children}</Layout>
    </>
  );
}
