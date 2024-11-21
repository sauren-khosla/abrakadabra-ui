import { Header } from "@/components/reusable/header";
import { LinkedInIcon } from "./social/linkedin";
import { XIcon } from "./social/x";
import { MetaIcon } from "./social/meta";
import { InstagramIcon } from "./social/instagram";
import { TwitchIcon } from "./social/twitch";
import { DiscordIcon } from "./social/discord";
import { YouTubeIcon } from "./social/youtube";
import { RedditIcon } from "./social/reddit";
import { TikTokIcon } from "./social/tiktok";
import { SpotifyIcon } from "./social/spotify";
import { IconCard } from "@/components/reusable/icon-card";

export default function SocialIcons() {
  return (
    <div className="flex min-h-screen">
      <div className="w-full">
        <Header title="Social" />
        <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-8 py-2 mt-4">
          <IconCard icon={<LinkedInIcon />} iconName="LinkedIn" />
          <IconCard icon={<XIcon />} iconName="X" />
          <IconCard icon={<MetaIcon />} iconName="Meta" />
          <IconCard icon={<InstagramIcon />} iconName="Instagram" />
          <IconCard icon={<TwitchIcon />} iconName="Twitch" />
          <IconCard icon={<DiscordIcon />} iconName="Discord" />
          <IconCard icon={<YouTubeIcon />} iconName="Youtube" />
          <IconCard icon={<RedditIcon />} iconName="Reddit" />
          <IconCard icon={<TikTokIcon />} iconName="TikTok" />
          <IconCard icon={<SpotifyIcon />} iconName="Spotify" />
        </div>
      </div>
    </div>
  );
}