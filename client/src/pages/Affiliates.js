import React from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';



export default function Affiliates() {
  const [pendingVisible, setPendingVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const [data, setData] = useState([]);


  const togglePending = () => {
    setPendingVisible(!pendingVisible);
  };

  const toggleCountry = () => {
    setCountryVisible(!countryVisible);
  };

  const toggleTag = () => {
    setTagVisible(!tagVisible);
  };

  const toggleTeammate = () => {
    setTeammateVisible(!teammateVisible);
  };

  function handledropdown() {
    if (dropdown === false) {
      document.getElementById("profileOption").style.height = "fit-content";
      setdropdown(true);
      // } else {
      //     document.getElementById("profileOption").style.height = "0px";
      //     setdropdown(false);
      // }
    }
  }

  function handledropdown2() {
    document.getElementById("profileOption").style.height = "0px";
    setdropdown(false);
  }

  const getData = async () => {


    try {
      const url = "https://affilator.onrender.com/api/advitisor/";

      let result = await fetch(url, {
        method: "get",
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'key'
        }
      });
      result = await result.json();
      console.log("jjh", result[0])
      setData(result)

    } catch (error) {
      console.log("error is-->", error)
    }

  }




  return (
    <div style={{ padding:15, marginLeft:40}}  className='main-container-affilate'>

      <div className="  advertisers">
        <h1 className='top-name-advertiser'>Affiliates</h1>
        <div className="advertisers-top">
          <a href="#">All Affiliates</a>
          <a href="#">My Affiliates</a>
          <a href="#">Pending Affiliates</a>
          <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> + Add Affiliates</button>
        </div>
        {addFormVisible && (
          <div className="add-advertiser-form">
            <form>
              <h1 className="form-title-advertiser">Add Affiliates</h1>
              <label>
                Company Name:
                <input type="text" name="companyName" />
              </label>
              <label>
                Status:
                <select name="status">
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </label>
              <label>
                Profile Picture:
                <input type="file" name="profilePicture" />
              </label>
              <div className="credential"><h3>Access Credentials</h3></div>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <label>
                Confirm Password:
                <input type="password" name="confirmPassword" />
              </label>
              <div class="contact">
                <h2>Contact</h2>
                <label>
                  First Name:
                  <input type="text" name="firstName" />
                </label>
                <label>
                  Last Name:
                  <input type="text" name="lastName" />
                </label>
                <label>
                  Phone:
                  <input type="tel" name="phone" />
                </label>
                <label>
                  Contact Type:
                  <select name="contactType">
                    <option value="skype">Skype</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="facebook-messenger">Facebook Messenger</option>
                    <option value="viber">Viber</option>
                    <option value="telegram">Telegram</option>
                    <option value="line">Line</option>
                  </select>
                </label>
                <button class="add-contact-button">+ Add Contact</button>
              </div>


              <div class="address">
                <h2>Address</h2>
                <label>
                  Country:
                  <input type="text" name="country" />
                </label>
                <label>
                  Religion:
                  <input type="text" name="religion" />
                </label>
                <label>
                  City:
                  <input type="text" name="city" />
                </label>
                <label>
                  Postcode:
                  <input type="text" name="postcode" />
                </label>
                <label>
                  Street:
                  <input type="text" name="street" />
                </label>
              </div>


              <div class="administration">
                <h2>Administration</h2>
                <label>
                  Tags:
                  <select name="tags">
                    <option value="business">Business</option>
                    <option value="clothing">Clothing</option>
                    <option value="computer-networking">Computer Networking</option>
                  </select>
                </label>
                <label>
                  Traffic Types:
                  <select name="trafficTypes">
                    <option value="banners">Banners</option>
                    <option value="email">Email</option>
                    <option value="social-media">Social Media</option>
                    <option value="search">Search</option>
                    <option value="non-incentivized">Non-Incentivized</option>
                    <option value="incentivized">Incentivized</option>
                  </select>
                </label>
                <label>
                  Teammates:
                  <select name="teammate">
                    <option value="rahul">Rahul</option>
                    <option value="raman">Raman</option>
                    <option value="Aman">Aman</option>

                  </select>
                </label>
              </div>





              <input type="submit" value="Submit" />
            </form>
          </div>
        )}










        <div className="advertisers-lower">

          <div className="main-container">
            <div className="list-item">
              <div className="item-header " onClick={handledropdown}>
                Pending
              </div>
              {/*
              {pendingVisible && (
                <div className="sub-list">
                  <div>Status</div>
                  <div>Active</div>
                  <div>Pending</div>
                  <div>Inactive</div>
                </div>
              )} */}
              <div onMouseLeave={handledropdown2} className="profile-options" id="profileOption">
                <ul>
                  <li>
                    <a style={{ cursor: "pointer" }} to="/profiledetails" onClick={""} >My Profile</a>
                  </li>

                  <li >
                    <Link to="/book">Booked Vehicles</Link>
                  </li>
                  <li>
                    <Link to="/help">FAQ's & Help</Link>
                  </li>
                  <li >
                    <Link style={{ cursor: "pointer" }} onClick={""} >Logout</Link>
                  </li>
                </ul>



              </div>
            </div>
            <div className="list-item">
              <div className="item-header" onClick={toggleCountry}>
                Country
              </div>
              {countryVisible && (
                <div className="sub-list">
                  <div>India</div>
                  <div>USA</div>
                </div>
              )}
            </div>
            <div className="list-item">
              <div className="item-header" onClick={toggleTag}>
                Tag
              </div>
              {tagVisible && (
                <div className="sub-list">
                  <input type="text" placeholder="Search"></input>
                </div>
              )}
            </div>
            <div className="list-item">
              <div className="item-header" onClick={toggleTeammate}>
                Teammate
              </div>
              {teammateVisible && (
                <div className="sub-list">
                  <input type="text" placeholder="Search"></input>
                </div>
              )}
            </div>

          </div>
        </div>




        <div className="advertisers-body">
          <div className='m-3'>
            <button className="btn btn-primary " onClick={getData}>Click me!</button>

          </div>
          <div className="advertisers-body-container">
            <button className="advertisers-body-button">Affiliates</button>
            <div className="advertisers-body-item">Contacts</div>
            <div className="advertisers-body-item">Tags</div>
            <div className="advertisers-body-item">Teammates</div>
            <div className="advertisers-body-item">Registration</div>
            <div className="advertisers-body-item">Balance</div>
            <div className="advertisers-body-item">Conversions</div>
          </div>

        </div>

        <div className=''>
          {
            data?.length > 0 && data?.map((item) => (
              <div className='Container' style={{ background: "#b4f5fa", margin: 10 }} key={item?._id}>
                <h1>Affilate Name : {item?.name}</h1>
                <h1>Description of Affilate  : {item?.desc}</h1>
              </div>
            ))


          }

        </div>


      </div>
    </div>





  )
}
