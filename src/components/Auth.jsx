import { elifUser } from "../users/Elif.js"

export const Auth = ({user, setUser}) => {
    
    const handleAuth = () => {
        if(!user.username) {
            setUser((currentUser) => {
                currentUser.username = elifUser.username;
                currentUser.avatar = elifUser.avatar;

                return currentUser;
            });
        } else {
            setUser({username: "", avatar: ""});
        }
    }
    return (
        <section>
          <br />
          {!user.username ? (
            <>
              <p>You are not signed in</p>
              <button onClick={handleAuth}>Sign in</button>
            </>
          ) : (
            <>
              <img src={user.avatar} style={{borderRadius: "25px", height: "50px"}} alt={`avatar for ${user.username}`} />
              <p>{user.username} is signed in.</p>
            </>
          )}
        </section>
      );

}