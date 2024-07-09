type PageSectionProps = {
  children?: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  return <div className="w-full page-section relative">{children}</div>;
};

export default PageSection;
