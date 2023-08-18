import PreviewNotif from "@/app/components/Common/PreviewNotif";
import SectionHeader from "@/app/components/Common/SectionHeader";
import Contact from "@/app/components/Contact";
import { Metadata } from "next";
import { getDictionary } from "@/app/[lang]/dictionaries";

export const metadata: Metadata = {
  title: "Awd - Tentang Saya",
  description: "Awd",
};

type Props = {
  params: {
    lang: string;
  };
};

const AboutPage = async ({ params: { lang } }: Props) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `${dict.aboutMe.title}`,
              subtitle: `${dict.aboutMe.subtitle}`,
              description: `${dict.aboutMe.description}`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
        <Contact dict={dict} />
      </div>
    </>
  );
};

export default AboutPage;
