import Image from "next/image";
import Link from "next/link";
import urlFor from "lib/urlFor";
import Refractor from "react-refractor";
import "../../prism-solarizedlight.css";

Refractor.registerLanguage(require("refractor/lang/jsx"));
Refractor.registerLanguage(require("refractor/lang/tsx"));
Refractor.registerLanguage(require("refractor/lang/css"));
Refractor.registerLanguage(require("refractor/lang/bash"));
Refractor.registerLanguage(require("refractor/lang/php"));

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog post Image"
            fill
          ></Image>
        </div>
      );
    },
    code: ({ value }: any) => (
      <div className="flex flex-wrap overflow-x-auto">
        <Refractor
          className="rounded-md p-5 overflow-x-auto w-full"
          language={value.language}
          value={value.code}
          markers={value.highlightedLines}
          inline={false}
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="py-10 text-4xl font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="py-10 text-3xl font-bold">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="py-10 text-2xl font-bold">{children}</h1>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-emphasize py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
