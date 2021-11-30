import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          title="Experiencias inolvidables"
        />
        <Card 
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Experiencias inolvidables"
        />
        <Card 
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://images.unsplash.com/photo-1476937673710-8174834aa065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Experiencias inolvidables"
        />
      </div>

      <div className="home__section">
      <Card
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://images.unsplash.com/photo-1637649228998-6c78a67dfa6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          title="Experiencias inolvidables"
          price="130€/night"
        />
        <Card 
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://a0.muscache.com/im/pictures/fcfc8730-818e-40f7-a2ce-8a32a95fb943.jpg"
          title="Experiencias inolvidables"
          price="130€/night"
        />
        <Card 
          description="Es sabiduría reconocer la necesidad, cuando todos los otros cursos ya han sido considerados, aunque pueda parecer locura a aquellos que se atan a falsas esperanzas"
          src="https://a0.muscache.com/im/pictures/fea1d447-c76f-44c2-bd34-12fc957ee0eb.jpg?im_w=1200"
          title="Experiencias inolvidables"
          price="130€/night"
        />
      </div>
    </div>
  );
}
