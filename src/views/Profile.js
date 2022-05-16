import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Alert, Modal, Form, Table } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../database/firebase";
import "../css/CardStyling.css";

function Profile() {
  const [error, setError] = useState();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [confirmDel, setConfirmDel] = useState(false);
  const [forename, setForename] = useState();
  const [updatedForename, setUpdatedForename] = useState();
  const [surname, setSurname] = useState();
  const [updatedSurname, setUpdatedSurname] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [updatedPhoneNum, setUpdatedPhoneNum] = useState();
  const snapData = useRef([]);
  const [tableData, setTableData] = useState(false);
  const [displayHide, setDisplayHide] = useState(false);

  useEffect(() => {
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.uid)
        .get()
        .then((snapshot) => {
          setForename(snapshot.data().firstName);
          setSurname(snapshot.data().lastName);
          setPhoneNum(snapshot.data().number);
        });
    }
  }, [currentUser, forename]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteShow = () => setShowDelete(true);

  const handleDeleteClose = () => {
    setShowDelete(false);
    setConfirmDel(false);
  };

  const handleDelete = () => {
    setConfirmDel(true);
  };

  const confirmDelete = () => {
    if (currentUser) {
      db.collection("users").doc(currentUser.uid).delete();
      currentUser.delete().then(function () {});
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    setMessage("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (forename.value !== forename) {
      setForename(updatedForename);
      if (updatedForename !== undefined) {
        db.collection("users")
          .doc(currentUser.uid)
          .update({ firstName: updatedForename });
      }
    }

    if (surname.value !== surname) {
      setSurname(updatedSurname);
      if (updatedSurname !== undefined) {
        db.collection("users")
          .doc(currentUser.uid)
          .update({ lastName: updatedSurname });
      }
    }
    if (phoneNum.value !== phoneNum) {
      setPhoneNum(updatedPhoneNum);
      if (updatedPhoneNum !== undefined) {
        db.collection("users")
          .doc(currentUser.uid)
          .update({ number: updatedPhoneNum });
      }
    }

    Promise.all(promises)
      .then(() => {
        handleClose();
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
        setMessage("Updated");
      });
  }

  const inputFirstNameHandler = (event) => {
    if (forename.value !== forename) {
      const updatedFirstName = event.target.value;
      setUpdatedForename(updatedFirstName);
    }
  };

  const inputLastNameHandler = (event) => {
    const updatedLastName = event.target.value;
    setUpdatedSurname(updatedLastName);
  };

  const inputNumberHandler = (event) => {
    const updatedPhoneNum = event.target.value;
    setUpdatedPhoneNum(updatedPhoneNum);
  };
  async function getUserData() {
    if (currentUser && snapData.current.length === 0) {
      db.collection("quiz")
        .where("uid", "==", currentUser.uid)
        .onSnapshot((snapShot) => {
          snapShot.forEach((doc) => {
            snapData.current.push({ document: doc.id, ...doc.data() });
            setTableData(true);
            setTableData(false);
            setTableData(true);
            setDisplayHide(true);
          });
        });
    } else if (snapData.current.length > 0) {
      setTableData(true);
      setDisplayHide(true);
    }
  }

  const hideUserData = () => {
    setTableData(false);
    setDisplayHide(false);
  };

  return (
    <>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: </strong>
            {currentUser.email}
            <br></br>
            <strong>Forename: </strong>
            {forename}
            <br></br>
            <strong>Surname: </strong>
            {surname}
            <br></br>
            <strong>Phone Number: </strong>
            {phoneNum}
            <Button
              className="btn btn-primary w-100
          mt-3"
              variant="primary"
              onClick={handleShow}
            >
              Update
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      required
                      defaultValue={currentUser.email}
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordRef}
                      placeholder="Leave blank to keep the same"
                    />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      placeholder="Leave blank to keep the same"
                    />
                  </Form.Group>
                  <Form.Group id="forename-id">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={forename}
                      onChange={inputFirstNameHandler}
                      placeholder="First name"
                      required={false}
                    />
                  </Form.Group>
                  <Form.Group id="surname-id">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={surname}
                      onChange={inputLastNameHandler}
                      placeholder="Last name"
                      required={false}
                    />
                  </Form.Group>
                  <Form.Group id="phone-number-id">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={phoneNum}
                      onChange={inputNumberHandler}
                      placeholder="Phone number"
                    />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Update
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Button
              className="btn btn-primary w-100
          mt-3"
              variant="primary"
              onClick={handleDeleteShow}
            >
              Delete account
            </Button>
            <Modal show={showDelete} onHide={handleDeleteClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete your account?
              </Modal.Body>
              <Modal.Footer>
                {confirmDel === true ? (
                  <>
                    <Button variant="warning" onClick={handleDeleteClose}>
                      Cancel Delete
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                      Confirm Delete
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                      Yes
                    </Button>
                  </>
                )}
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2"></div>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">Quiz Scores</h2>
            {displayHide === false ? (
              <Button variant="primary" onClick={getUserData}>
                View attempts
              </Button>
            ) : (
              <Button variant="primary" onClick={hideUserData}>
                Hide Data
              </Button>
            )}
            {tableData === true ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Score</th>
                    <th>Attempt Time</th>
                    <th>Quiz</th>
                  </tr>
                </thead>
                <tbody>
                  {snapData.current.map((items, attemptNo) => (
                    <tr key={items.id}>
                      <td>{attemptNo + 1}</td>
                      <td>{items.score}</td>
                      <td>{items.time}</td>
                      <td>HTML</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile;
