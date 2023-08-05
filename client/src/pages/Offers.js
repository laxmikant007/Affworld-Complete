import React, { useState, useEffect } from 'react';
import "./style/campagin.css";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Box, Button, Text } from '@chakra-ui/react';
import Loader from '../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { addCampagin, deleteCampagin, getData } from '../service/api';
import Layout from '../components/Layout/Layout';
import { getUserFromLocalStorage } from '../utils/localstorage';



export default function Offers() {
  const user = getUserFromLocalStorage();

  const [statusVisible, setstatusVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [goalVisible, setGoalVisible] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("100");
  const [loading, setLoading] = useState(false);



  const [modalVisible, setModalVisible] = useState(false);

  const [campaginName, setCampaginName] = useState("");
  const [campaginEmail, setCampaginEmail] = useState("");
  const [description, setDescription] = useState("");
  const [campaginUrl, setCampaginUrl] = useState("");

  const [advitisor_id, setAdvitisor_id] = useState("");



  useEffect(() => {
    fetchData();
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

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.log('error is-->', error);
    }
  };


  const addToCampagin = async () => {

    try {
      const data = {
        advitisor_id: advitisor_id,
        name: campaginName,
        description: description,
        url: campaginUrl,


      }
      const result = await addCampagin(data);
      console.log("Thid is result --->", result);
      setModalVisible(false);
      showNotification();
      fetchData();
    } catch (error) {
      console.log("error is while post-->", error)
    }

  }


  const deleteOfferCampagin = async (id) => {


    try {
      console.log("id is -->", id)
      const result = await deleteCampagin(id)
      if (result) {
        showNotificationDelete();
        console.log("user deleted Success!!")
        fetchData();
      }
    } catch (error) {
      console.log("error is while deleteing-->", error)
    }
  }

  //   <Button colorScheme='orange' onClick={() => setModalVisible(true)}>
  //   + Add Campagin
  // </Button>
  const boxstyle = {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgClip: "text",
    fontSize: "4xl",
    fontWeight: "extrabold"
  }



  return (
    <Layout>

      <Box p={3} display={"flex"} flexDirection={"row"} >


        <Text mr={"auto"} alignitems="center" display="flex" justifyContent="center" fontSize="4xl" sx={boxstyle}  >
          Offers Section
        </Text>
        <Button colorScheme='orange' onClick={() => setModalVisible(true)}>
          + Add Campagin
        </Button>

      </Box>

      <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>+ Add Campagin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Campagin Name:
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

              Advitisor ID:
              <input type="text" name="campaginUrl" onChange={(e) => setAdvitisor_id(e.target.value)} />
            </label>



          </form>



        </Modal.Body>
        <Modal.Footer>
          <Button colorScheme='red' onClick={() => setModalVisible(false)}>
            Close
          </Button>
          <Button onClick={addToCampagin} colorScheme='whatsapp'>Save changes</Button>
        </Modal.Footer>
      </Modal>







      {/* <h1 className='top-name-advertiser'>Offers</h1>
        <div className="advertisers-top">
          <a href="#">All Offers</a>
          <a href="#">Featured Offers</a>
          <a href="#">Offers Requests</a>
          <a href="#">Smart Links</a>
         
        </div>

        

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
        </div> */}


      <div style={{ width: "100%" }}>


        <div style={{ margin: "20px" }} >
          <div >
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th >No.</th>
                  <th >Campagin</th>
                  <th >Description</th>
                  <td > URL</td>
                  <td>Code</td>
                  <td > Delete</td>

                </tr>
              </thead>


              <tbody>
                {

                  loading ? (
                    data?.length > 0 &&
                    data.map((item, index) => (
                      <tr key={index}>
                        <td >{index + 1}</td>

                        <td >{item?.name}</td>
                        <td >{item?.description}</td>
                        <td style={{ fontSize: 20 }} >

                          <Button colorScheme="linkedin" style={{ fontWeight: 700 }}>
                            <a href={item?.url} target="_blank" rel="noopener noreferrer">
                              Link
                            </a>
                          </Button>
                        </td>

                        <td >{item?.code}</td>


                        <td >

                          <Button style={{ marginLeft: 20 }} colorScheme='red' onClick={() => deleteOfferCampagin(item._id)}>
                            Delete
                          </Button>

                        </td>

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
    </Layout>

  )
}
