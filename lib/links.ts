export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "project":
      return slug ? `/proyek/${slug}` : undefined;
    case "post":
      return slug ? `/blog/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
