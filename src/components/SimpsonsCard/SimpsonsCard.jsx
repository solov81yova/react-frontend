import "./styles.css";

// function SimpsonsCard(props) {

function SimpsonsCard({firstName, lastName, avatar, job, hobby}) {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "Watching TV",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

//   const getFullName = () => {
//     return `${homerSimpson.firstName} ${homerSimpson.lastname}`;
//   };

// const getSimpsonName = () => {
//     return `${props.firstName} ${props.lastName}`
// };


const getSimpsonName = () => {
    return `${firstName} ${lastName}`
};
  return (
    <div className="card-wrapper">
      {/* { homerSimpson.avatar && (<img className="avatar" src={""} alt="Avatar" />)} */}
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {getSimpsonName()}</p>
      <p className="card-item">Job:{job}</p>
      <p className="card-item">Hobby:{hobby}</p>
    </div>
  );
}

export default SimpsonsCard;
