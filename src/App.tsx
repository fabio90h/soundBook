import React, { useEffect } from "react";
import Sound from "./Sound";
import posthog from "posthog-js";

posthog.init("phc_5zykuZYgnCIKRtYSlFU25xEMAtO0j1h9cgRAoVGkKtZ", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});

function App() {
  useEffect(() => {
    posthog.identify();
  }, []);

  return (
    <div>
      <Sound />
    </div>
  );
}

export default App;
