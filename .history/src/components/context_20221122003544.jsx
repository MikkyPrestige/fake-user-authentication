// USER AUTHENTICATION CONTEXT: ?? This is the context for the user authentication in the app (login and register)

import React, { createContext, useState } from "react";

  useEffect(() =&gt; {
    checkLogin();
  }, [ ]);


const [loading, setLoading] = useState(false)


const [user, setUser] = useState({
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password