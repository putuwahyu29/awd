import React from "react";
import { draftMode } from "next/headers";
import { readToken } from "env";

export default async function PreviewNotif() {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;
  return (
    <div>
      {preview ? (
        <div className="text-center inline">
          <h1>Draft Mode.</h1>
        </div>
      ) : null}
    </div>
  );
}
