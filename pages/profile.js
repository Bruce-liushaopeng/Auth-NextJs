import UserProfile from "../components/profile/user-profile";
import { getSession } from "next-auth/client";

function ProfilePage() {
  return <UserProfile />;
}

// we don't use getStaticProps, because getStaticProps mainly works in the build time, but in this case every request's context does matter
export async function getServerSideProps(context) {
  // look into the request and getSession and extract the cokie and see if it's valid
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false, // we want to only re-direct this time, becase the user is not loged in, but not permanently
      }, // this way we set the redirect, the front end side won't even flashing
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
