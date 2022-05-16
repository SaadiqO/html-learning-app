import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../database/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const collectionRef = collection(db, "users");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Please try again");
    }
    setLoading(false);
    if (register) {
      history.push("/");
    }
  }

  useEffect(() => {
    if (currentUser) {
      setDoc(doc(collectionRef, currentUser.uid), {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        number: numberRef.current.value,
        email: emailRef.current.value,
      });
    }
  }, [collectionRef, currentUser]);
  return (
    <>
      <div className="align--card">
        <Card className="cardStyle">
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" ref={firstNameRef} required />
              </Form.Group>
              <Form.Group id="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" ref={lastNameRef} required />
              </Form.Group>
              <Form.Group id="number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" ref={numberRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default Register;
