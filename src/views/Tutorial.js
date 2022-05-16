import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HTMLEditor from "../components/HTMLEditor";
import "../css/CardStyling.css";

export default function Practice() {
  const [showP, setShowP] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showUL, setShowUL] = useState(false);
  const [showOL, setShowOL] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleCloseP = () => setShowP(false);
  const handleShowP = () => setShowP(true);
  const handleCloseButton = () => setShowButton(false);
  const handleShowButton = () => setShowButton(true);
  const handleCloseTable = () => setShowTable(false);
  const handleShowTable = () => setShowTable(true);
  const handleCloseOL = () => setShowOL(false);
  const handleShowOL = () => setShowOL(true);
  const handleCloseUL = () => setShowUL(false);
  const handleShowUL = () => setShowUL(true);
  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);
  const handleCloseHeader = () => setShowHeader(false);
  const handleShowHeader = () => setShowHeader(true);

  const pTag = "<p>";
  const buttonTag = "<button>";
  const tableTag = "<table>";
  const olTag = "<ol>";
  const ulTag = "<ul>";
  const formTag = "<form>";
  const inputTag = "<input>";
  const headerTag = "<h>";
  const heading1Tag = "<h1>";
  const heading6Tag = "<h6>";
  return (
    <>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">What is HTML?</h2>
            <div>
              <p>
                HTML stands for Hyper Text Markup Language <br></br>
                HTML is the standard markup language for creating Web pages{" "}
                <br></br>
                HTML describes the structure of a Web page <br></br>
                HTML consists of a series of elements <br></br>
                HTML elements tell the browser how to display the content{" "}
                <br></br>
                HTML elements label pieces of content such as "this is a
                heading", "this is a paragraph", "this is a link", etc.
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">What is a HTML element?</h2>
            <div>
              <p>
                An HTML element is defined by a start tag, some content, and an
                end tag: <br></br>
                {elementExplained} <br></br>
                The HTML element is everything from the start tag to the end
                tag: <br></br>
                {elementsExplained}
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">Need to know:</h2>
            <div>
              <p>
                These are HTML elements that are always required, where we will
                look into later<br></br>
                {requiredTag1} <br></br>
                {requiredTag2} <br></br>
                {requiredTag3}
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {pTag} Tag</h2>
            <div>
              <p>
                The HTML {pTag} element defines a paragraph. <br></br>A
                paragraph always starts on a new line, and browsers
                automatically add some white space (a margin) before and after a
                paragraph. <br></br>
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {pElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowP}>
              Try it yourself
            </Button>
            <Modal show={showP} onHide={handleCloseP}>
              <Modal.Header closeButton>
                <Modal.Title>HTML Paragraphs</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={pElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {headerTag} Tag</h2>
            <div>
              <p>
                HTML headings are defined with the {heading1Tag} to{" "}
                {heading6Tag} tags. <br></br>
                {heading1Tag} defines the most important heading. {heading6Tag}{" "}
                defines the least important heading. <br></br>
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {hElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowHeader}>
              Try it yourself
            </Button>
            <Modal show={showHeader} onHide={handleCloseHeader}>
              <Modal.Header closeButton>
                <Modal.Title>HTML headings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={hElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {buttonTag} Tag</h2>
            <div>
              <p>
                The {buttonTag} tag defines a clickable button. <br></br>
                you can put text (and tags like i, b, strong, br, img, etc.).
                That is not possible with a button created with the {
                  inputTag
                }{" "}
                element! <br></br>
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {buttonElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowButton}>
              Try it yourself
            </Button>
            <Modal show={showButton} onHide={handleCloseButton}>
              <Modal.Header closeButton>
                <Modal.Title>HTML {buttonTag} Tag</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={buttonElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {tableTag} Tag</h2>
            <div>
              <p>
                HTML tables allow web developers to arrange data into rows and
                columns <br></br>
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {tableElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowTable}>
              Try it yourself
            </Button>
            <Modal
              contentClassName="modal-props"
              show={showTable}
              onHide={handleCloseTable}
            >
              <Modal.Header closeButton>
                <Modal.Title>HTML Tables</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={tableElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {olTag} Tag</h2>
            <div>
              <p>
                The {olTag} tag defines an ordered list. An ordered list can be
                numerical or alphabetical.
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {orderedElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowOL}>
              Try it yourself
            </Button>
            <Modal show={showOL} onHide={handleCloseOL}>
              <Modal.Header closeButton>
                <Modal.Title>HTML ol Tag </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={orderedElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
          <Card.Body>
            <h2 className="text-center mb-4">HTML {ulTag} Tag</h2>
            <div>
              <p>
                The {ulTag} tag defines an unordered (bulleted) list. <br></br>
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {unorderedElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowUL}>
              Try it yourself
            </Button>
            <Modal show={showUL} onHide={handleCloseUL}>
              <Modal.Header closeButton>
                <Modal.Title>HTML ul Tag</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={unorderedElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">HTML {formTag} Tag</h2>
            <div>
              <p>
                An HTML form is used to collect user input. The user input is
                most often sent to a server for processing. <br></br>
                The HTML {formTag} element is used to create an HTML form for
                user input <br></br>
                The {formTag} element is a container for different types of
                input elements, such as: text fields, checkboxes, radio buttons,
                submit buttons, etc.
              </p>
            </div>
            <SyntaxHighlighter language={Practice} style={docco}>
              {formElement}
            </SyntaxHighlighter>
            <Button variant="primary" onClick={handleShowForm}>
              Try it yourself
            </Button>
            <Modal show={showForm} onHide={handleCloseForm}>
              <Modal.Header closeButton>
                <Modal.Title>HTML Forms</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <HTMLEditor statemessage={formElement} />
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

const pElement = `<!DOCTYPE html>
<html>
<body>

<p>This is a paragraph.</p>
<p>This is a paragraph.</p>
<p>This is a paragraph.</p>

</body>
</html>
`;

const hElement = `<!DOCTYPE html>
<html>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

</body>
</html>
`;
const buttonElement = `<!DOCTYPE html>
<html>
<body>

<h1>The button Element</h1>

<button type="button" onclick="alert('Hello world!')">Click Me!</button>
 
</body>
</html>

`;

const tableElement = `<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>HTML Table</h2>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

</body>
</html>


`;

const unorderedElement = `<ul>
<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
</ul>
`;

const orderedElement = `<!DOCTYPE html>
<html>
<body>

<h1>The ol element</h1>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
 
</body>
</html>

`;

const elementExplained = `<tagname> Content goes here... </tagname>
`;

const elementsExplained = `<h1>My First Heading</h1>
<p>My first paragraph.</p>
`;

const requiredTag1 = `The <!DOCTYPE html> declaration defines that this document is an HTML5 document
`;

const requiredTag2 = `The <html> element is the root element of an HTML page
`;

const requiredTag3 = `The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
`;

const formElement = `<!DOCTYPE html>
<html>
<body>

<h2>Text input fields</h2>

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>

<p>Note that the form itself is not visible.</p>

<p>Also note that the default width of text input fields is 20 characters.</p>

</body>
</html>


`;
