import React from 'react'
import "../assets/css/advertisers.css";
import { useState } from 'react';
import Layout from '../components/Layout/Layout';


export default function Advertisers() {
  const [pendingVisible, setPendingVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);

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

  //   const addAdvertiserButton = document.getElementById("add-advertiser-button");
  // const addAdvertiserForm = document.querySelector(".add-advertiser-form");

  // addAdvertiserButton.addEventListener("click", () => {
  //   addAdvertiserForm.classList.add("open");
  // });




  return (
    <Layout>
      <div className="advertisers">
        <h1 className='top-name-advertiser'>Advertisers</h1>
        <div className="advertisers-top">
          <a href="#">All Advertisers</a>
          <a href="#">My Advertisers</a>
          <a href="#">Pending Advertisers</a>
          <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> + Add Advertiser</button>
        </div>
        {addFormVisible && (
          <div className="add-advertiser-form">
            <form>
              <h1 className="form-title-advertiser">Add Advertiser</h1>
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
                  Street :
                  <input type="text" name="street" />
                </label>
              </div>

              <div className="Financial Information">
                <h2 id="finicial-informaton">Financial Information</h2>
                <label>
                  Payment Details:
                  <textarea autosize="" class="payment-field-text"></textarea>
                </label>
              </div>
              <div class="administration">
                <h2>Administration  </h2>
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
                <label>
                  External ID:
                  <input type="text" name="external-id" />
                </label>


              </div>





              <input type="submit" value="Submit" />
            </form>
          </div>

        )}





















        <div className="advertisers-lower">

          <div className="main-container">
            <div className="list-item">
              <div className="item-header" onClick={togglePending}>
                Pending
              </div>
              {pendingVisible && (
                <div className="sub-list">
                  <div>Status</div>
                  <div>Active</div>
                  <div>Pending</div>
                  <div>Inactive</div>
                </div>
              )}
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
          <div className="advertisers-body-container">
            <button className="advertisers-body-button">Advertiser</button>
            <div className="advertisers-body-item">Contacts</div>
            <div className="advertisers-body-item">Tags</div>
            <div className="advertisers-body-item">Teammates</div>
            <div className="advertisers-body-item">Registration</div>
            <div className="advertisers-body-item">Conversions</div>
          </div>

        </div>



      </div>








    </Layout>

  )
}









