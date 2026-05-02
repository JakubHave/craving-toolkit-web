const APP_STORE_URL = "https://apps.apple.com/app/id6761936946";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.jacob.cravingtoolkitapp";

type Props = {
  className?: string;
  size?: "md" | "lg";
};

export default function AppStoreBadges({ className = "", size = "lg" }: Props) {
  const badgeH = size === "lg" ? 56 : 48;

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener"
        className="inline-block transition-transform hover:-translate-y-0.5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Download_on_the_App_Store_Badge_US-UK.svg"
          alt="Download on the App Store"
          height={badgeH}
          style={{ height: badgeH, width: "auto" }}
        />
      </a>

      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener"
        className="inline-block transition-transform hover:-translate-y-0.5"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
          alt="Get it on Google Play"
          height={badgeH}
          style={{ height: badgeH, width: "auto" }}
        />
      </a>
    </div>
  );
}
