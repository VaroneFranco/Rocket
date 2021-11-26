import React from "react";
import s from "./Profile.module.css";
import CardProfile from "./CardProfile/CardProfile";

const obj = [
  {
    _id: { $oid: "619daaf17b34e02f529f7462" },
    name: "Sabrina The Cat",
    password: "U2FsdGVkX1+VOiDyfP83nDEMI9/CewBTEVFz8nA4S0k=",
    moderator: false,
    email: "sabrina_la_bicha@mongoose.com",
    country: "Guantanamera",
    institution: "Henry",
    score: 5,
    absence: 10,
    reports: 112340,
    active: false,
    __v: 0,
    img: "https://www.itsmiparis.com/wp-content/themes/nextline_v4/images/itsmi_student_life.jpg",
    table: 4,
    meetLink: "https://meet.jit.si/Rocket-Henry-WebFT-18-4",
    about: "aabbbbbbbbbaaaassssssaaa",
  },
];

const Profile = () => {
  return (
    <div className={s.Profile}>
      <div className={s.mainContainer}>
        <CardProfile
          name={obj[0].name}
          img={obj[0].img}
          country={obj[0].country}
          institution={obj[0].institution}
          about={obj[0].about}
          score={obj[0].score}
          absence={obj[0].absence}
          reports={obj[0].reports}
        />
      </div>
    </div>
  );
};

export default Profile;
