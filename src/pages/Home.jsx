import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [emailId, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmail = event => {
    setEmail(event.target.value);
    if (!isEmail(emailId)) {
      setErrorEmail('format is wrong');
      setDisabledButton(true);
    } else {
      setErrorEmail('');
      setDisabledButton(false);
    }
  };
  const handleMobile = event => {
    setPassword(event.target.value);
  };

  const onSubmitNext = () => {
    onSubmit();
    navigate('/posts');
  };
  // const onSubmit = () => navigate('/posts');
  const onSubmit = () => {
    console.log(emailId, password);
  };

  const isEmail = str => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
  };
  return (
    <main>
      <div className="bg-light p-5 mb-5 row">
        <div className="col-md-12">
          <label>Email Id</label>
          <input className="mx-3" onChange={handleEmail} value={emailId} />
        </div>
        {!errorEmail.lenght > 0 ? (
          <div className="col-md-12">
            <p style={{ color: 'red' }}>{errorEmail}</p>
          </div>
        ) : (
          <div>hii</div>
        )}
        <div className="col-md-12 my-2">
          <label>Password</label>
          <input className="mx-2" onChange={handleMobile} value={password} type="password" />
        </div>
      </div>
      <Container>
        <Form className="my-2">
          <Button classname="ml-3" onClick={onSubmit} disabled={disabledButton}>
            Save
          </Button>
        </Form>
        <Form>
          <Button classname="mt-3" onClick={onSubmitNext} disabled={disabledButton}>
            Save and next
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
