import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080C09",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(29,69,51,0.55), transparent)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#88A896",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          {site.role} · {site.focus}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            color: "#E9E7E0",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "#88A896",
            maxWidth: 800,
          }}
        >
          Building reliable backend systems and production-ready applications.
        </div>
      </div>
    ),
    { ...size }
  );
}
