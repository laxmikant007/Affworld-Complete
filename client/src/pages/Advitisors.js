import React, { useEffect } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./style/affilates.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addNewAdvitisors, deleteAdvitisorsData, fetchAdvitisors } from '../service/api';






export default function Advitisors() {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCamapgin, setModalVisibleCampagin] = useState(false);

  const [AdvitisorName, setAdvitisorName] = useState("");
  const [description, setDescription] = useState("");
  const [loading,setLoading] = useState(false);
  const [advitisor_id , setAdvitisor_id] = useState("")



  const [data, setData] = useState([]);

  const showNotification = () => {
    toast.success("Advitisor Added Successfully!! ", {
      autoClose: 2000,
    });
  }

  const showNotificationDelete = () => {
    toast.success("Advitisor Removed Successfully!! ", {
      autoClose: 2000,
    });
  }


  const getData = async () => {
    try {
      const result =  await fetchAdvitisors();
      setData(result)
      setLoading(true);

    } catch (error) {
      console.log("error is-->", error)
    }

  }

  const addAdvitisors = async () => {

    try {
      const data = {
          name: AdvitisorName, 
          desc: description 
      }
      const result = await addNewAdvitisors(data);
      // console.log("Addadbitisor callled", result);
      setModalVisible(false);
      showNotification();
      getData();

    } catch (error) {
      console.log("error is while post-->", error)
    }

  }


  const deleteAdvitisor = async(id) => {

  
    try {
      console.log("id is -->", id)
      // const url = `https://affilator.onrender.com/api/advitisor/${id}`;
      // console.log("url is-->", url)
      
      // let result = await fetch(url, {
      //     method: "delete",
      //     headers: {
      //         'Content-Type': 'application/json',
      //         api_key: "key"  
      //     },
      // });
      // // result = await result.json()
      const result = await deleteAdvitisorsData(id);
      // console.log("result of deleting is ", result)
      // console.log("result is-->", result)
  
      if (result === 204) {
        console.log("Advitisor deleted Success!!")
        showNotificationDelete();
        getData();
      }

      
    } catch (error) {
        console.log("error  while delete Advitisor-->", error)
    }
  }

  const addCampaginAdvi = async (id) => {
    console.log("add campagin id-->", id);
    console.log("add campagin called");  
    setModalVisibleCampagin(true);
    // setAdvitisor_id(id);
  }




  useEffect(() => {
    getData()
  }, []);


  return (
    <>

    
    <div style={{ padding: 15, marginLeft: 40 }} className='main-container-affilate'>

      <div style={{ marginTop: 60 }} className="  advertisers">
        <h1 className='top-name-advertiser'>Advitisors</h1>
        <div className="advertisers-top">
          <a href="#">All Advitisors</a>
          <a href="#">My Advitisors</a>
          <a href="#">Pending Advitisors</a>
          <Button variant="primary" onClick={() => setModalVisible(true)}>
            + Add Advitisors
          </Button>
        </div>

        <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
          <Modal.Header closeButton>
            <Modal.Title>+ Add Advitisors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
                Advitisor Name:
                <input type="text" name="AdvitisorName" onChange={(e) => setAdvitisorName(e.target.value)} />
              </label>
              <label>

                Description:
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
              </label>
            </form>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setModalVisible(false)}>
              Close
            </Button>
            <Button onClick={addAdvitisors} variant="success">Save changes</Button>
          </Modal.Footer>
        </Modal>

        {/* campagin add Advitisor ID */}

        <Modal show={modalVisibleCamapgin} onHide={() => setModalVisibleCampagin(false)}>
          <Modal.Header closeButton>
            <Modal.Title>+ Add Campagin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
              advitisor_id:
                <input type="text" name="advitisor_id" onChange={(e) => setAdvitisor_id(e.target.value)} />
              </label>
              {/* <label>

                Description:
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
              </label> */}
            </form>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setModalVisibleCampagin(false)}>
              Close
            </Button>
            <Button onClick={()=>setModalVisibleCampagin(false)} variant="success">Save changes</Button>
          </Modal.Footer>
        </Modal>


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





        <div className="affilate-table-container">
          <div className="affilate-table-container">
            <table className="table table-striped table-hover">
          
              <thead className="table-primary">
                <tr>
                  <th className="affilate-deatils-all">No.</th>
                  <th className="affilate-deatils-all">Advitisors</th>
                  <th className="affilate-deatils-all">Description</th>
                  <th className="affilate-deatils-all">Tags</th>
                  <th className="affilate-deatils-all">Remarks</th>
                  <th className="affilate-deatils-all">Add</th>
                </tr>
              </thead>
              <tbody>

                {

                 loading?(
                  data?.length > 0 &&
                  data.map((item, index) => (
                    <tr key={index}>
                      <td className="affilate-deatils-all">{index + 1}</td>
                      <td className="affilate-deatils-all">{item?.name}</td>
                      <td className="affilate-deatils-description">{item?.desc}</td>
                      <td className="affilate-deatils-all">10</td>
                      <td className="affilate-deatils-all">
                        <Button style={{ marginLeft: 20 }} variant="danger" onClick={() => deleteAdvitisor(item._id)}>
                          Delete
                        </Button>

                      </td>
                      <td className="affilate-deatils-all">
                        <Button style={{ marginLeft: 20 }} variant="success" onClick={() => addCampaginAdvi(item._id)}>
                         + Add Campagin
                        </Button>

                      </td>
                    </tr>
                  ))
                  ):<Loader/>
                  


                  }


                  

              </tbody>
            </table>
          </div>
        </div>



        <div className='main-data-affilate'>

        </div>








      </div>
    </div>
    <ToastContainer />
    </>




  )
}
