import PreviewNotif from "@/app/components/Common/PreviewNotif";
import SectionHeader from "@/app/components/Common/SectionHeader";
import Contact from "@/app/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awd - Tentang Saya",
  description: "Awd",
};

const AboutPage = () => {
  return (
    <>
      <PreviewNotif />
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-35">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `TENTANG`,
              subtitle: `Tentang Saya`,
              description: `Deskripsi singkat tentang saya`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
        <Contact />
      </div>
    </>
  );
};

export default AboutPage;
