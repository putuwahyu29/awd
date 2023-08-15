import { Metadata } from "next";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skill from "@/app/components/Skill";
import Contact from "@/app/components/Contact";
import Project from "@/app/components/Project";
import Certificate from "@/app/components/Certificate";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import PreviewNotif from "../components/Common/PreviewNotif";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Beranda",
  description: "Awd",
};

export default async function HomePage() {
  const certificates = await getClient().fetch(groq`*[_type == 'certificate']`);
  const projects = await getClient().fetch(
    groq`*[_type == 'project'] {
    ...,
    linkPreview,
    linkSource,
    technologies[]->
  } | order(_createdAt desc)`
  );


  const settings = await getClient().fetch(
    groq`*[_type == 'settings']{
      ...,
      heroSection,
      aboutSection,
      projectSection,
      skillSection,
      certificateSection,
      contactSection
    }| order(_createdAt desc)`
  );

  const readySettings = settings.length > 0 ? true : false;

  return (
    <main>
      <PreviewNotif />
      {readySettings ? (
        <div>
          {settings[0].heroSection && <Hero />}
          {settings[0].aboutSection && <About />}
          {settings[0].projectSection && <Project projects={projects} />}
          {settings[0].skillSection && <Skill />}
          {settings[0].certificateSection && (
            <Certificate certificates={certificates} />
          )}
          {settings[0].contactSection && <Contact />}
        </div>
      ) : (
        <Hero />
      )}
    </main>
  );
}
