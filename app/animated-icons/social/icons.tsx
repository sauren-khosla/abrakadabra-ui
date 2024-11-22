import { LinkedInIcon } from "./linkedin";
import { XIcon } from "./x";
import { MetaIcon } from "./meta";
import { InstagramIcon } from "./instagram";
import { TwitchIcon } from "./twitch";
import { DiscordIcon } from "./discord";
import { YouTubeIcon } from "./youtube";
import { RedditIcon } from "./reddit";
import { TikTokIcon } from "./tiktok";
import { SpotifyIcon } from "./spotify";
import { GithubIcon } from "./github";
import { IconCard } from "@/components/reusable/icon-card";

export function SocialIcons() {
  return (
    <div className="grid grid-cols-5 gap-4 items-center justify-items-center px-4 py-2 mt-4">
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
      <IconCard icon={<GithubIcon />} iconName="Github" />
    </div>
  );
}
