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

      <Box display={"flex"} flexDirection={"coloumn"} justifyContent={"space-around"}  >

        <Box display={"flex"} alignItems={"center"}>
          <Text sx={boxstyle}  >
            Offers Section
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Button colorScheme='orange' onClick={() => setModalVisible(true)}>
            + Add Campagin
          </Button>
        </Box>

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

      {
        loading && data.length > 0 ? (
          <div >
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th >No.</th>
                  <th >Campagin</th>
                  <th >Description</th>
                  <td > URL</td>
                  {/* <td>Code</td> */}
                  <td > Delete</td>

                </tr>
              </thead>


              <tbody>

                {


                  data?.map((item, index) => (
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

                      {/* <td >{item?.code}</td> */}


                      <td >

                        <Button style={{ marginLeft: 20 }} colorScheme='red' onClick={() => deleteOfferCampagin(item._id)}>
                          Delete
                        </Button>

                      </td>

                    </tr>
                  ))

                }




              </tbody>



            </table>
          </div>
        ) : <Loader />
      }












      <ToastContainer />
    </Layout>

  )
}
