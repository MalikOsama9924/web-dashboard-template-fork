import React from "react";
import { getMetadata } from "@/utils/helper-functions";
import CustomLink from "@/components/ui/CustomLink/CustomLink";

export const metadata = getMetadata({
  title: "Profile",
});

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <ul>
        <li>
          <CustomLink href="/profile/information">Information</CustomLink>
        </li>
        <li>
          <CustomLink href="/profile/settings">Settings</CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
