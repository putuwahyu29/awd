import SectionHeader from "@/app/components/Common/SectionHeader";

import type { Technology } from "common-types";
import { getClient } from "lib/client";
import { Metadata } from "next";
import { groq } from "next-sanity";
import TechnologyList from "@/app/components/Project/TechnologyList";

export const fetchCache = 'force-no-store';
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Awd - Semua Teknologi",
  description: "Awd",
};

const TechnologyPage = async () => {
  const technologies = await getClient().fetch(
    groq`*[_type == 'technology'] {
        ...,
      } | order(_updatedAt desc)`
  );
  return (
    <>
      <section id="teknologi">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 pt-25">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `TEKNOLOGI`,
                subtitle: `Semua teknologi`,
                description: `Semua daftar teknologi yang ada.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <TechnologyList technologies={technologies} />
      </section>
    </>
  );
};

export default TechnologyPage;
