import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  
  const cardsData = [
    { title: "Card Title 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.", buttonText: "Find Out More!" },
    { title: "Card Title 2", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis.", buttonText: "Find Out More!" },
    { title: "Card Title 3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.", buttonText: "Find Out More!" },
    { title: "Card Title 4", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis.", buttonText: "Find Out More!" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
     
      <div className="container mt-4 flex-grow-1">
        <Jumbotron />
       
        <div className="row mt-4">
          {cardsData.map((card, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <Card
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
