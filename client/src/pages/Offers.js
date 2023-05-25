import React from 'react'
import { useState, useEffect } from 'react';
import "./style/campagin.css";
import { Link } from 'react-router-dom';


export default function Offers() {

  const [statusVisible, setstatusVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [goalVisible, setGoalVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("100");


  const toggleStatus = () => {
    setstatusVisible(!statusVisible);
  };


  const toggleTag = () => {
    setTagVisible(!tagVisible);
  };

  const toggleTeammate = () => {
    setTeammateVisible(!teammateVisible);
  };
  const toggleCountry = () => {
    setCountryVisible(!countryVisible);
  };


  const toggleCategory = () => {
    setCategoryVisible(!categoryVisible);
  };

  const toggleGoal = () => {
    setGoalVisible(!goalVisible);
  };

  const getData = async () => {


    try {
      const url = "https://affilator.onrender.com/campaign/";

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
    <div style={{ marginTop: 80 }} className="  advertisers">

      <h1 className='top-name-advertiser'>Offers</h1>
      <div className="advertisers-top">
        <a href="#">All Offers</a>
        <a href="#">Featured Offers</a>
        <a href="#">Offers Requests</a>
        <a href="#">Smart Links</a>
        <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}> + Add Offers</button>
      </div>
      {addFormVisible && (
        <div className="add-advertiser-form">
          <form>
            <h1 className="form-title-advertiser">Add Offers</h1>
            <button className="add-advertiser-btn" onClick={() => setAddFormVisible(!addFormVisible)}>Close</button>
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
            <label>
              Advertiser:
              <input style={{ width: "30%" }} type="text" placeholder='search' name="advertiser" />
            </label>
            <label style={{ width: "30%" }} type="text" >
              <h2 >Offer Availability:</h2>
              <select name="offers-availability">
                <option value="public">Public</option>
                <option value="approval">Requires Approval</option>
                <option value="private">Private</option>
              </select>
            </label>



            <div class="landing-page" style={{ width: "60%" }} >
              <h2>Offer Landing Page</h2>

              <label>
                Landing Page URL:
                <input type="text" name="landing-page-url" placeholder='http://landing-page.com' />
              </label>

              <label>
                Preview URL:
                <input type="text" name="preview-page-url" placeholder='http://preview-page.com' />
              </label>




            </div>

            <div class="offer-goal" style={{ width: "60%" }} >
              <h2>Offer Goal</h2>


              <label>
                Goal Title:
                <input type="text" name="goal-title" />
              </label>
              <label>
                Goal Type:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>


              <label>
                Revenue:
                <input type="text" name="preview-page-url" placeholder='$' />
              </label>

              <label>
                Payout:
                <input type="text" name="preview-page-url" placeholder='$' />
              </label>


            </div>



            <div class="offer-goal" style={{ width: "60%" }} >
              <h2>Additional Information</h2>

              <label>
                Categories:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>

              <label>
                Tags:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>

              <label>
                Allowed Traffic Types:
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>


              <label>
                Denied Traffic Types
                :
                <select name="trafficTypes">
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpc">CPC</option>
                  <option value="cpa">CPA(fixed payout)</option>
                  <option value="cpl">CPL(fixed payout)</option>
                  <option value="cps">CPS</option>
                  <option value="cpi">CPI(fixed payout)</option>
                  <option value="reg">REG</option>
                  <option value="dep-cpa">DEP CPA(fixed payout)</option>
                  <option value="dep-rev">DEP RevShare(%)</option>
                </select>
              </label>
            </div>
            <div>


              <label>
                External ID:
                <input type="text" name="external-id" />
              </label>


            </div>






          </form>
        </div>
      )}

















      <div className="advertisers-lower">


        <div className="search-container">
          <input style={{padding:10, fontSize:20, borderRadius:20,fontWeight:600}} type="text" placeholder="Search"></input>
        </div>
        <div style={{ padding: 20 }} className="main-container">
          {/* <div className="list-item">
            <div className="item-header" onClick={toggleStatus}>
              Status
            </div>
            {statusVisible && (
              <div className="sub-list">
                <div>Status</div>
                <div>Active</div>
                <div>Pending</div>
                <div>Inactive</div>
              </div>
            )}
          </div> */}
          <div className="list-item">
          <select className='form-select form-select-lg me-5 ' name="status" id="status" style={{ "cursor": "pointer" }} value={status} onChange={(e) => setStatus(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> Status</option>
              <option style={{ "cursor": "pointer" }} value="active"   > Active </option>
              <option style={{ "cursor": "pointer" }} value="pending"   > Pending</option>
              <option style={{ "cursor": "pointer" }} value="done"   > Done</option>
              <option style={{ "cursor": "pointer" }} value="Inactive"   > Inactive</option>

            </select>

           </div>



          <div className="list-item">
            <div className="item-header" onClick={toggleTag}>
              Availability
            </div>
            {tagVisible && (
              <div className="sub-list">
                <input type="text" placeholder="Search"></input>
              </div>
            )}
          </div>


          <div className="list-item">
            <div className="item-header" onClick={toggleTeammate}>
              Advertisers
            </div>
            {teammateVisible && (
              <div className="sub-list">
                <input type="text" placeholder="Search"></input>
              </div>
            )}

          </div>

          <div className="list-item">
            <div className="item-header" onClick={toggleCountry}>
              Country
            </div>
            {countryVisible && (
              <div className="sub-list">
                <input type="text" placeholder="Search"></input>
              </div>
            )}

          </div>

          <div className="list-item">
            <div className="item-header" onClick={toggleCategory}>
              Category
            </div>
            {categoryVisible && (
              <div className="sub-list">
                <input type="text" placeholder="Search"></input>
              </div>
            )}

          </div>

          <div className="list-item">
            <div className="item-header" onClick={toggleGoal}>
              Goal Type
            </div>
            {goalVisible && (
              <div className="sub-list">
                <input type="text" placeholder="Search"></input>
              </div>
            )}

          </div>



        </div>
      </div>
      <div className="affilate-table-container">
        <div className="affilate-table-container">
          <table className="table table-striped table-hover">
            <thead  className="table-primary">
              <tr>
                <th className="affilate-deatils-all">No.</th>
                <th className="affilate-deatils-all">Campagin</th>
                <th className="affilate-deatils-all">Description</th>
                <th className="affilate-deatils-all">Tags</th>
                <td className="affilate-deatils-all"> URL</td>
                <td className="affilate-deatils-all"> code</td>
              </tr>
            </thead>

    
            <tbody>
                {data?.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="affilate-deatils-all">{index + 1}</td>
                      <td className="affilate-deatils-all">{item?.name}</td>
                      <td className="affilate-deatils-all">{item?.description}</td>
                      <td className="affilate-deatils-all">10</td>
                      <td style={{ fontSize: 20 }} className='affilate-deatils-all'>
                      <a href={item?.url} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>
                    </td>
                    <td className="affilate-deatils-all">{item?.code}</td>

                    </tr>
                  ))}
              </tbody>



          </table>
        </div>

      </div>



    </div>



  )
}
