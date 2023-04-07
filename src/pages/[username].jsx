import { UserProfileProvider } from "@/services/contextApi/userProfileContext";
import UserProfileTemplate from "@/templates/userProfileTemplate";
import Head from "next/head";

function UserProfile() {
  return (
    <>
      <Head>
        <title>luisfer.nest profile</title>
        <meta name="description" content="Social profile of luisfer.nest." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfileProvider>
        <UserProfileTemplate />
      </UserProfileProvider>
    </>
  );
}

export default UserProfile;
