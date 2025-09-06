/**
 * Props for the PageHeader component.
 */
export interface HeaderPublicProps {
  /** Main title text */
  title: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** Optional content displayed on the right side of the header */
  children?: React.ReactNode;
}
