'use client';

import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const COMPONENT_MAP: Record<string, any> = {
  hero: Hero,
  projects: Projects,
  skills: Skills,
  experience: Experience,
  contact: Contact,
};

export default function DynamicRenderer({ registry, data }: { registry: any[], data: any }) {
  if (!registry) return null;

  return (
    <>
      {registry
        .filter((s: any) => s.isVisible)
        .sort((a, b) => a.order - b.order)
        .map((section: any) => {
          const Component = COMPONENT_MAP[section.type];
          if (!Component) return null;
          
          // Pass relevant data to the component
          const sectionData = data[section.type] || data[`${section.type}s`] || data;
          
          return <Component key={section.type} data={sectionData} />;
        })}
    </>
  );
}
