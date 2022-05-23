import React, { useState } from "react";
import axios from 'axios'

const ReactContact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const getUserData= (e)=> {
      setUser({
          ...user, [e.target.name]: e.target.value
      })
  }
//   posting data to the firebase 
const onSubmit = async (e)=>{
    e.preventDefault()
  await axios.post('https://react-contact-form-e6f28-default-rtdb.asia-southeast1.firebasedatabase.app/contactform.json', user )

}

      
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <form onSubmit={onSubmit}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="name"
                  value={user.name}
                  name='name'
                  onChange={getUserData}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  value={user.email}
                  name='email'
                  onChange={getUserData}

                />
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={user.address}
                name='address'
                onChange={getUserData}

              />
            </div>
            <div class="form-group col-md-6">
              <label for="message">Message</label>
              <textarea
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
                value={user.message}
                name='message'
                onChange={getUserData}

              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReactContact;
