import React, { useEffect } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./style/affilates.css";
import 'bootstrap/dist/css/bootstrap.css';




export default function Affiliates() {
  const [pendingVisible, setPendingVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [country, setCountry] = useState("100");
  const [status, setStatus] = useState("100");
  const [tag, setTag] = useState("100");
  const [teammate, setTeammate] = useState("100");


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
      console.log("jjh", result)
      setData(result)

    } catch (error) {
      console.log("error is-->", error)
    }

  }



  useEffect(() => {
    getData()
  }, []);


  return (
    <div style={{ padding: 15, marginLeft: 40 }} className='main-container-affilate'>

      <div style={{marginTop:60}}  className="  advertisers">
        <h1 className='top-name-advertiser'>Advitisors</h1>
        <div  className="advertisers-top">
          <a href="#">All Advitisors</a>
          <a href="#">My Advitisors</a>
          <a href="#">Pending Advitisors</a>
          <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> + Add Affiliates</button>
        </div>
        {addFormVisible && (
          <div className="add-advertiser-form">
            <form>
              <h1 className="form-title-advertiser">Add Advitisors</h1>
              <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> Close</button>
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

          <div style={{ padding: 20 }} className="main-container">
            

            <select className='form-select form-select-lg me-5 ' name="status" id="status" style={{ "cursor": "pointer" }} value={status} onChange={(e) => setStatus(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> Status</option>
              <option style={{ "cursor": "pointer" }} value="active"   > Active </option>
              <option style={{ "cursor": "pointer" }} value="pending"   > Pending</option>
              <option style={{ "cursor": "pointer" }} value="done"   > Done</option>
              <option style={{ "cursor": "pointer" }} value="Inactive"   > Inactive</option>

            </select>

            <select className='form-select form-select-lg  me-5  ' name="country" id="country" style={{ "cursor": "pointer" }} value={country} onChange={(e) => setCountry(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> All Countries</option>
              <option style={{ "cursor": "pointer" }} value="2"   > India </option>
              <option style={{ "cursor": "pointer" }} value="5"   > USA</option>
              <option style={{ "cursor": "pointer" }} value="50"   > Australia</option>
              <option style={{ "cursor": "pointer" }} value="50"   > UK</option>

            </select>

            <select className='form-select form-select-lg  me-5 ' name="tag" id="tag" style={{ "cursor": "pointer" }} value={tag} onChange={(e) => setTag(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> All Tags</option>
              <option style={{ "cursor": "pointer" }} value="Casino"   > Casino </option>
              <option style={{ "cursor": "pointer" }} value="Bar"   > Bar</option>
              <option style={{ "cursor": "pointer" }} value="Games"   > Games</option>
              <option style={{ "cursor": "pointer" }} value="Betting"   > Betting</option>


            </select>

            <select className='form-select form-select-lg  me-5  ' name="city" id="city" style={{ "cursor": "pointer" }} value={teammate} onChange={(e) => setTeammate(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> Teammates</option>
              <option style={{ "cursor": "pointer" }} value="Rahul"   > Rahul </option>
              <option style={{ "cursor": "pointer" }} value="Lakshya"   > Lakshya</option>
              <option style={{ "cursor": "pointer" }} value="Anil"   > Anil</option>
              <option style={{ "cursor": "pointer" }} value="Sunil"   > Sunil</option>


            </select>

          </div>
        </div>
        <div  className="affilate-table-container">
          <div className="affilate-table-container">
            <table  className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th className="affilate-deatils-all">No.</th>
                  <th className="affilate-deatils-all">Advitisors</th>
                  <th className="affilate-deatils-all">Description</th>
                  <th className="affilate-deatils-all">Tags</th>
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="affilate-deatils-all">{index + 1}</td>
                      <td className="affilate-deatils-all">{item?.name}</td>
                      <td className="affilate-deatils-all">{item?.desc}</td>
                      <td className="affilate-deatils-all">10</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>



        <div className='main-data-affilate'>

        </div>








      </div>
    </div>





  )
}
