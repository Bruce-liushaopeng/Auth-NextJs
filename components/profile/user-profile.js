import { getSession } from 'next-auth/client';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useEffect, useState } from 'react';

function UserProfile() {
  // Redirect away if NOT auth
  // for useSession, even page is loaded, sometimes the loading is still stay true.
  //const [session, loading] = useSession();
  // const [isLoading, setIsLoading] = useState(true);
  
  // // getSession send a new request to get the latest loading and session, a way to work around that issue
  // useEffect(() => {
  //   getSession().then(session => {
      
  //     if(!session) {
  //       window.location.href = '/auth' // if we don't find a session, we nevigate away
  //     } else {
  //       setIsLoading(false);
  //     }
  //   })
  // }, [])
  // console.log(isLoading)

  // if (isLoading) {
  //   return <p className={classes.profile }> Loading... </p>
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
