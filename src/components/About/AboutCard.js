import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avi Andhairya </span>
            from <span className="purple"> Bhavnagar, Gujarat, India.</span>
            <br />I have done B.Tech in Aeronautical Engineering from Apollo Institute of Engineering, Ahmedabad in 2020 and now pursuing MERN Full-stack development course in Masai school
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I am an Shortfilm maker
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinematography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>Gmail: avi.andhariya@gmail.com <br/>Contactno: 8140788412</p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The Best day of life is Tommorow !"{" "}
          </p>
          <footer className="blockquote-footer">Avi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
