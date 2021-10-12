import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from "../components/Layout/Layout"
function Home(props) {
  return (
    <Layout>
      <Container>
        <h1 className="text-center" style={{ marginTop: "1rem", background: "grey", padding: "5rem" }}>WELCOME TO ADMIN DASHBOARD</h1>
        <p classname="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam sequi, harum mollitia aliquid quisquam similique. Dolorem sed quos suscipit eos, odio, voluptates qui dolor aspernatur rerum amet, nobis hic!
          Non dolor sit officiis eius debitis. Repudiandae saepe animi rerum nobis nihil consectetur porro, labore alias similique explicabo, ratione illo repellendus ducimus vero laborum quam, perspiciatis modi quae blanditiis rem.</p>
      </Container>
    </Layout >
  );
}

export default Home;