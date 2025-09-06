export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  stats?: {
    rating: string;
    learners: string;
    languages: string;
  };
}
