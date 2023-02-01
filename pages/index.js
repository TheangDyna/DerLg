import React from "react";

import { SampleButton } from "../components";

export default function Home() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-6 gap-4">
        <SampleButton>Sample</SampleButton>
        <SampleButton variant="outlined">Sample</SampleButton>
        <SampleButton variant="text">Sample</SampleButton>
        <SampleButton variant="link">Sample</SampleButton>
      </div>
    </div>
  );
}
