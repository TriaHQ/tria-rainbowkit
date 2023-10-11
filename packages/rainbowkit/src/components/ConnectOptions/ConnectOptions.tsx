import React, { useState } from "react";
import { isMobile } from "../../utils/isMobile";
import { DesktopOptions } from "./DesktopOptions";
import { MobileOptions } from "./MobileOptions";

export default function ConnectOptions({ onClose }: { onClose: () => void }) {
  const [loginIframeUrl, setLoginIframUrl] = useState("");

  return (
    <div>
      <iframe src={loginIframeUrl} title="Login" style={{ display: "none" }} />
      <DesktopOptions
        onClose={() => {
          localStorage.setItem("isModalOpen", "false");
          onClose();
        }}
        isMobile={isMobile()}
        setIframeUrl={(url) => {
          setLoginIframUrl(url);
        }}
      />
    </div>
  );
}
