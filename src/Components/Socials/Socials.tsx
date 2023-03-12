import React from "react";

export type SocialType = {
  name: string;
  link: string;
  icon: React.ReactNode | string;
};

interface SocialsProps {
  socials: SocialType[];
}
export const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return <div></div>;
};
