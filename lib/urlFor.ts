import { getClient } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(getClient());

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
