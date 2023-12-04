declare module "common-types" {
  type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };


  interface Project extends Base {
    body: Block[];
    technologies: Technology[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    linkPreview: URL;
    linkSource: URL;
    type: string;
    author: Author;
  }

  interface Author extends Base {
    bio: string;
    image: Image;
    name: string;
    slug: Slug;
  }

  interface Image {
    _type: "image";
    asset: Reference;
  }

  interface Reference {
    _ref: string;
    _type: "reference";
  }

  interface Slug {
    _type: "slug";
    current: string;
  }

  interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  }

  interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }


  interface Technology extends Base {
    description: string;
    title: string;
    slug: Slug;
  }

  interface MainImage {
    _type: "image";
    asset: Reference;
  }

  interface Title {
    _type: "string";
    current: string;
  }

  interface Certificate extends Base {
    description: string;
    title: string;
    mainImage: Image;
  }

  interface Setting extends Base {
    heroSection: Boolean;
    aboutSection: Boolean;
    projectSection: Boolean;
    skillSection: Boolean;
    certificateSection: Boolean;
    contactSection: Boolean;
  }

  export type Menu = {
    id: number;
    title: string;
    titleEn: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
    show: boolean;
  };
}
