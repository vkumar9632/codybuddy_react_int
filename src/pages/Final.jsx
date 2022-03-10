import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { rest } from 'msw';
import { isEmpty } from 'lodash';

const Final = () => {
  const [emailId, setEmail] = useState('+91');
  const [disabled, setDisabled] = useState(false);
  const [mobileNo, setMobile] = useState('');
  const navigate = useNavigate();
  const handleEmail = event => {
    let e = document.getElementById('ddlViewBy');
    setEmail(e.value);
  };
  const handleMobile = event => {
    setMobile(event.target.value);
    if (mobileNo.length == 10) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleCheckbox = event => {
    console.log(event.target.value);
  };

  const onBack = () => {
    onSubmit();
    navigate('/posts');
  };

  // const onSubmit = () => navigate('/posts');
  const onSubmit = () => {
    const API_URL = 'https://codebuddy.review';

    rest.post(`${API_URL}/submit`, (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          message: 'Success',
          data: isEmpty(req.body)
            ? {}
            : JSON.parse(
                req?.body ?? {
                  'emailId': 'john.doe@gmail.com',
                  'password': 'QWerty##11',
                  'firstName': 'John',
                  'lastName': 'Doe',
                  'address': '22/B, Baker Street, London - 10089',
                  'countryCode': { emailId },
                  'phoneNumber': { mobileNo },
                },
              ),
        }),
      ),
    );
  };
  return (
    <main>
      <div className="bg-light p-5 mb-5 row">
        <select onChange={handleEmail} id="ddlViewBy">
          <option value="+91">India (+91) </option>
          <option value="+1"> America (+1)</option>
        </select>
        <div className="col-md-12 my-2">
          <label>phoneNumber</label>
          <input className="mx-2" onChange={handleMobile} type="number" value={mobileNo} />
        </div>
        <div className="col-md-12 my-2">
          <input className="mx-2" onChange={handleCheckbox} type="checkbox" value={mobileNo} />
          <label>Accept Terms And Condition</label>
        </div>
      </div>
      <Container>
        <Form className="my-2">
          <Button classname="ml-3" onClick={onBack}>
            Back
          </Button>
        </Form>
        <Form className="my-2">
          <Button classname="ml-3" onClick={onSubmit} disabled={disabled}>
            Save
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Final;
