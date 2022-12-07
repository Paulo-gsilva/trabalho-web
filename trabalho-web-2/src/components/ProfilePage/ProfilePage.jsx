import React from "react";
import { NavMenu } from "../NavMenu";
import Profile from "./Profile/Profile";
import Footer from "../Footer/Footer";

function ProfilePage() {
  return (
    <>
      <NavMenu />
      <Profile
        alt="foto de perfil"
        name="Cláudio Ricardo"
        email="claudio@gmail.com"
        city="Russas"
        educationalLevel="Segundo Grau"
        isTeacher={true}
        gender="M"
      />
      <Footer style="footer-section-profile" />
    </>
  );
}

export default ProfilePage;
