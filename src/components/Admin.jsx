import React from "react";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";
import Firestore from "./Firestore";

const Admin = (props) => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("existe un usuario");
      setUser(auth.currentUser);
    } else {
      console.log("no existe el usuario");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <div className="mt-5">
      <h3 className="text-center">Ruta Protegida</h3>
      {user && <Firestore user={user}/>}
    </div>
  );
};

export default withRouter(Admin);
