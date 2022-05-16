import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Cards from "../components/Cards";
import "../css/Home.css";
import Footer from "../components/Footer";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../database/firebase";
export default function Home() {
  const { currentUser } = useAuth();
  const [forename, setForename] = useState();
  const [surname, setSurname] = useState();

  useEffect(() => {
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.uid)
        .get()
        .then((snapshot) => {
          setForename(snapshot.data().firstName);
          setSurname(snapshot.data().lastName);
        });
    }
  }, [currentUser]);

  console.log(currentUser);
  return (
    <>
      <div className="Test20">
        {currentUser ? (
          <>
            <h1>
              Hi, {forename} {surname}!
            </h1>
          </>
        ) : null}
      </div>
      <Cards />
      <div className="Test20">
        <div className="Cardt">
          <Card>
            <Card.Body>
              <CardHeader>
                <h3>What is HTML ?</h3>
              </CardHeader>
              <p>
                HTML, in full hypertext markup language, a formatting system for
                displaying material retrieved over the Internet. Each retrieval
                unit is known as a Web page (from World Wide Web), and such
                pages frequently contain hypertext links that allow related
                pages to be retrieved. HTML is the markup language for encoding
                Web pages. It was designed by the British scientist Sir Tim
                Berners-Lee at the CERN nuclear physics laboratory in
                Switzerland during the 1980s. HTML markup tags specify document
                elements such as headings, paragraphs, and tables. They mark up
                a document for display by a computer program known as a Web
                browser. The browser interprets the tags, displaying the
                headings, paragraphs, and tables in a layout that is adapted to
                the screen size and fonts available to it.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
