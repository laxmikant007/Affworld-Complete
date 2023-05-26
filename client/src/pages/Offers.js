import React from 'react'
import { useState, useEffect } from 'react';
import "./style/campagin.css";
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




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
  const [loading,setLoading] = useState(false);



  const [modalVisible, setModalVisible] = useState(false);

  const [campaginName, setCampaginName] = useState("");
  const [campaginEmail, setCampaginEmail] = useState("");
  const [description, setDescription] = useState("");
  const [campaginUrl, setCampaginUrl] = useState("");

  const [advitisor_id, setAdvitisor_id] = useState("");



  useEffect(() => {
    getData()
  }, []);


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

  const showNotification = () => {
    toast.success("Campagin Added Successfully!! ", {
      autoClose: 2000,
    });
  }

  const showNotificationDelete = () => {
    toast.success("Campagin Removed Successfully!! ", {
      autoClose: 2000,
    });
  }

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
      setData(result);
      setLoading(true);

    } catch (error) {
      console.log("error is-->", error)
    }

  };


  const addCampagin = async () => {

    try {
      const url = "https://affilator.onrender.com/campaign/";
      console.log("data is-->", description, campaginName, campaginUrl, advitisor_id)
      let result = await fetch(url, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          'api_key': 'key'
        },
        body: JSON.stringify({
          advitisor_id: advitisor_id,
          name: campaginName,
          description: description,
          url: campaginUrl,
          macros: [

          ]

        }),
      });
      result = await result.json();
      console.log("Campagin callled", result);
      setModalVisible(false);
      showNotification();
      getData();
    } catch (error) {
      console.log("error is while post-->", error)
    }

  }


  const deleteCampagin = async (id) => {

    
      try {
        console.log("id is -->", id)
        const url = `https://affilator.onrender.com/campaign/${id}`;
   
        let result = await fetch(url, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                api_key: "key"  
            },
        });
        result = await result.json()
        console.log("result is-->", result)
        if (result) {
            showNotificationDelete();
            console.log("user deleted Success!!")
            getData();
        }
      } catch (error) {
          console.log("error is while deleteing-->", error)
      }






  




  }





  return (
    <>

    <div style={{ marginTop: 80 }} className="  advertisers">

      <h1 className='top-name-advertiser'>Offers</h1>
      <div className="advertisers-top">
        <a href="#">All Offers</a>
        <a href="#">Featured Offers</a>
        <a href="#">Offers Requests</a>
        <a href="#">Smart Links</a>
        <Button variant="primary" onClick={() => setModalVisible(true)}>
          + Add Campagin
        </Button>
      </div>

      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>+ Add Campagin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Advitisor Name:
              <input type="text" name="campaginName" onChange={(e) => setCampaginName(e.target.value)} />
            </label>
            <label>

              Description:
              <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
            </label>

            <label>

              URL:
              <input type="text" name="campaginUrl" onChange={(e) => setCampaginUrl(e.target.value)} />
            </label>

            <label>

              advitisor_id:
              <input type="text" name="setAdvitisor_id" onChange={(e) => setAdvitisor_id(e.target.value)} />
            </label>




          </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalVisible(false)}>
            Close
          </Button>
          <Button onClick={addCampagin} variant="success">Save changes</Button>
        </Modal.Footer>
      </Modal>

      <div className="advertisers-lower">


        <div className="search-container">
          <input style={{ padding: 10, fontSize: 20, borderRadius: 20, fontWeight: 600 }} type="text" placeholder="Search"></input>
        </div>
        <div style={{ padding: 20 }} className="main-container">

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
            <thead className="table-primary">
              <tr>
                <th className="affilate-deatils-all">No.</th>
                <th className="affilate-deatils-all">Campagin</th>
                <th className="affilate-deatils-all">Description</th>
                <th className="affilate-deatils-all">Tags</th>
                <td className="affilate-deatils-all"> URL</td>
                <td className="affilate-deatils-all"> code</td>
                <td className="affilate-deatils-all"> Remarks</td>
              </tr>
            </thead>


            <tbody>
              {
                
                loading ? (
                data?.length > 0 &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td className="affilate-deatils-all">{index + 1}</td>
                    {/* <td className="affilate-deatils-all">{item?.advitisor_id}</td> */}
                    <td className="affilate-deatils-all">{item?.name}</td>
                    <td className="affilate-deatils-description">{item?.description}</td>
                    <td className="affilate-deatils-all">10</td>
                    <td style={{ fontSize: 20 }} className='affilate-deatils-all'>
                      <a href={item?.url} target="_blank" rel="noopener noreferrer">
                        Link
                      </a>
                    </td>
                    <td className="affilate-deatils-all">{item?.code}</td>
                    {/* <td className="affilate-deatils-all">{item?._id}</td> */}

                    <td >                    
                
                    <Button style={{marginLeft:20}} variant="danger" onClick={()=>deleteCampagin(item._id)}>
                      Delete
                    </Button></td>

                  </tr>
                ))
              ) : <Loader />
                
                
                }
            </tbody>



          </table>
        </div>

      </div>



    </div>
      <ToastContainer />
    </>

  )
}
