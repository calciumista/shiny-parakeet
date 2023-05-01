<script lang="ts" , context="module">
  import axios from "axios";

  interface Root {
    success: boolean;
    data: Data;
  }

  interface Data {
    spotify: Spotify;
    listening_to_spotify: boolean;
    discord_user: DiscordUser;
    discord_status: string;
    activities: Activity[];
    active_on_discord_web: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
  }

  interface Spotify {
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  }

  interface DiscordUser {
    username: string;
    public_flags: number;
    id: string;
    global_name: any;
    display_name: any;
    discriminator: string;
    bot: boolean;
    avatar_decoration: string;
    avatar: string;
  }

  interface Activity {
    type: number;
    sync_id?: string;
    state: string;
    session_id: string;
    party?: Party;
    name: string;
    id: string;
    flags: number;
    details: string;
    created_at: number;
    assets: Assets;
    buttons?: string[];
    application_id?: string;
  }

  interface Party {
    id: string;
  }

  interface Assets {
    large_text: string;
    large_image: string;
    small_text?: string;
    small_image?: string;
  }

  export function getPresence() {
    axios.get("https://api.lanyard.rest/v1/users/1018551539482230936").then((response) => {
      console.log(response.data);
      const obj: Root = response.data;
      const name = document.querySelector("#name");
      const pfp = document.querySelector("#pfp") as HTMLImageElement;
      const spot = document.querySelector("#song");
      if (name) {
        name.innerHTML = obj.data.discord_user.username + "#" + obj.data.discord_user.discriminator;
      }
      if (pfp) {
        pfp.src = "https://cdn.discordapp.com/avatars/" + obj.data.discord_user.id + "/" + obj.data.discord_user.avatar;
      }
      if (obj.data.listening_to_spotify) {
        if (spot) {
          spot.innerHTML = "Listening to " + obj.data.spotify.song + " by " + obj.data.spotify.artist + ".";
        }
      } else {
      }
    });
  }
</script>

<div class="flex flex-col items-center mx-auto">
  <div class="blue-border flex max-w-[22.5%]">
    <img src="" id="pfp" alt="pfp" class="rounded-full p-2" />
    <div class="px-1" />
    <div class="flex-col text-left my-auto pr-4">
      <p class="font-bold" id="name">Name....</p>
      <p id="song" class="">No Spotify Activity.</p>
    </div>
  </div>
</div>
