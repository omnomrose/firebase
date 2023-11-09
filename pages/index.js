import styles from '@/styles/Home.module.css'
import GoogleSignIn from '@/firebase/GoogleSignIn'
import UserRegistrationSignIn from '@/firebase/UserRegistration'
import UserEmailSignIn from '@/firebase/UserEmailSignIn'
import UserLogout from '@/firebase/UserLogout'

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'

export default function Home() {
  const [user, setUser] = useState({});

  // Know this for lab #2, need this in order to get an update on the current user logged in.
  // This will either show or hide the users information later on the screen.
  //optional chaining is ?.
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  return (
    <>

      <main className={`${styles.main}`}>
        <GoogleSignIn />
        <UserRegistrationSignIn />
        <UserEmailSignIn />
        <UserLogout />
        <div>
          <h2>User Logged In</h2>
          <div>
            {user?.email}
          </div>
        </div>
      </main>
    </>
  )
}
