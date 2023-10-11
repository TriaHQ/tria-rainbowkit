export enum SocialLoginTypes {
  Google = "google",
  Instagram = "instagram",
  X = "X",
  Discord = "Discord",
}

export interface SocialLogin {
  id: string;
  iconUrl: string;
  type: SocialLoginTypes;
}

export function useSocialLoginConnectors() {
  const google: SocialLogin = {
    iconUrl:
      "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/191:100/w_1280,c_limit/google-logo.jpg",
    id: "1",
    type: SocialLoginTypes.Google,
  };
  const instagram: SocialLogin = {
    iconUrl:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg?size=1200:675",
    id: "2",
    type: SocialLoginTypes.Instagram,
  };
  const twitter: SocialLogin = {
    iconUrl:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg?size=1200:675",
    id: "3",
    type: SocialLoginTypes.X,
  };
  // const discord: SocialLogin = {
  //   iconUrl:
  //     "https://static.vecteezy.com/system/resources/previews/018/930/718/original/discord-logo-discord-icon-transparent-free-png.png",
  //   id: "4",
  //   type: SocialLoginTypes.Discord,
  // };
  return [google, instagram];
}
