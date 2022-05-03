import React, { useState } from "react";
import '../Assignment/Body.css';

const Body = () => {
  const [state, setState] = useState({
    rating: '',
    input: "",
    text: "",
  });
  const [newFlag, setNewFlag] = useState(false)
  const [flag, setflag] = useState(false)
  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (state.input.length < 4) {
      setflag(true)
      setNewFlag(false)
    } else if (state.input.length > 12) {
      setNewFlag(true)
      setflag(false)

    }
    else {
      setflag(false)
      alert(state.input + ' ' + state.text + ' ' + state.rating)
      setNewFlag(false)
    }
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">

            Y@shCode
          </a>
        </div>
      </nav>



      <div className="container">
        <div className="row">
          <div className="card col-4 mx-5 " style={{ width: "18rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFf21czKpsY4NmsLv2YgJV02LRv1BWzqJmTDmQWnvRz6wVIJUhwg0TlxUFYm2IBG60ZJs&usqp=CAU" alt="" />
             <div className="card-body">
              <h5 className="card-title">Tshirt </h5>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Review this product
              </button>
            </div>
          </div>

          <div className="card col-4 mx-5 " style={{ width: "18rem" }}>
            <img src="https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/w/o/woven-chanderi-silk-kurta-in-beige-v1-mjx160.jpg" alt="" />
              <div className="card-body">
              <h5 className="card-title">Kurtas</h5>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Review this product
              </button>
            </div>
          </div>

          <div className="card col-4 mx-5 " style={{ width: "18rem" }}> 
          <img src="https://media.istockphoto.com/photos/male-dark-blue-blazer-on-isolated-background-picture-id1152838910?k=20&m=1152838910&s=612x612&w=0&h=TWebGfvtYp3IWhqK8spnXiE3qXUBEn1vPGbqP7BQKYQ=" alt="" />          
            <div className="card-body">
              <h5 className="card-title">Blazers </h5>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Review this product
              </button>
            </div>
          </div>

        </div>

      </div>
      {/* modals */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="rating" className="col-form-label">
                    rating:
                  </label>
                  <select id="rating" name='rating' onChange={changeHandler}>
                    <option value="none" select disabled hidden>
                      Select an Option
                    </option>
                    <option value="1">*</option>
                    <option value="2">**</option>
                    <option value="3">***</option>
                    <option value="4">****</option>
                    <option value="5">*****</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="input"
                    id="recipient-name"
                    onChange={changeHandler}
                  />
                  {
                    flag && <p style={{ color: 'red' }}>name must be greater than 4</p>

                  }
                  {
                    newFlag && <p style={{ color: 'red' }}>name must be smaller than 12</p>
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    name="text"
                    id="message-text"
                    onChange={changeHandler}
                  ></textarea>
                </div>
                {/* button */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <button type="submit" className="btn btn-primary" onClick={submitHandler}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
