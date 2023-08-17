import { Metadata } from "next";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skill from "@/app/components/Skill";
import Contact from "@/app/components/Contact";
import Project from "@/app/components/Project";
import Certificate from "@/app/components/Certificate";
import { groq } from "next-sanity";
import { getClient } from "lib/client";
import PreviewNotif from "@/app/components/Common/PreviewNotif";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const revalidate = 60;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Awd - Beranda",
  description: "Awd",
};

type Props = {
  params: {
    lang: string;
  };
};

export default async function HomePage({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);
  const certificates = await getClient().fetch(groq`*[_type == 'certificate']`);
  const projects = await getClient().fetch(
    groq`*[_type == 'project' && language == $lang] {
    ...,
    linkPreview,
    linkSource,
    technologies[]->
  } | order(_updatedAt desc)`,
    { lang }
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
    }| order(_updatedAt desc)`
  );

  const readySettings = settings.length > 0 ? true : false;

  return (
    <main>
      <PreviewNotif />
      {readySettings ? (
        <div>
          {settings[0].heroSection && <Hero dict={dict} />}
          {settings[0].aboutSection && <About dict={dict} />}
          {settings[0].projectSection && (
            <Project projects={projects} dict={dict} />
          )}
          {settings[0].skillSection && <Skill dict={dict} />}
          {settings[0].certificateSection && (
            <Certificate certificates={certificates} dict={dict} />
          )}
          {settings[0].contactSection && <Contact dict={dict} />}
        </div>
      ) : (
        <Hero dict={dict} />
      )}
    </main>
  );
}
