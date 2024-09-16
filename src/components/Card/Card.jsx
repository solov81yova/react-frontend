import "./styles.css";

function Card() {
    const park = {
        name:"Keukenhof",
        picture:"https://media.istockphoto.com/id/611102194/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%86%D0%B2%D0%B5%D1%82%D1%83%D1%89%D0%B8%D0%B5-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%B2-%D0%BF%D0%B0%D1%80%D0%BA%D0%B5-keukenhof-%D0%B2-%D0%BD%D0%B8%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%B0%D1%85-%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0.jpg?s=612x612&w=0&k=20&c=pqWBxEybsaatnF0IJVzMXhD15qCWkyMW9MiBqsiAUr4=",
        website:"https://www.keukenhof.nl",
        email:"info@keukenhof.nl",
        phone:"+31 (0) 252 465 555",
        description:"Keukenhof is the world`s largest park of flower gardens, famous for it`s spring tulip displays.",
        isOpen: true
    };

    return (
        <div className="card">
        <div className="card-container"> 
        <p className="card-title">Park Card</p>
        <img className="card-picture" src={park.picture} alt="Park Keukenhof" />
        <h2 className="card-name">Name: {park.name}</h2>
        <p className="card-info">Location:{park.location}</p>  
        <p className="card-info">Website:{park.website}</p>
        <p className="card-info">Email:{park.email}</p>
        <p className="card-info">phone:{park.phone}</p>
        <p className="card-info">Description:{park.description}</p>
        <p className="card-info">Season:{park.isOpen ? "March, April, May" : "Closed"}</p>
        </div>
        </div>
    );
}

export default Card;