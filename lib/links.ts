export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "project":
      return slug ? `/proyek/${slug}` : undefined;
  
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
