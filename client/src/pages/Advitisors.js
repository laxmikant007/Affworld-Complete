import React, { useEffect } from 'react'
import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./style/affilates.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'react-bootstrap';
import { Box, Button, Text } from '@chakra-ui/react';
import Loader from '../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addNewAdvitisors, deleteAdvitisorsData, fetchAdvitisors } from '../service/api';
import Layout from '../components/Layout/Layout';






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
  const [loading, setLoading] = useState(false);
  const [advitisor_id, setAdvitisor_id] = useState("")



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
      const result = await fetchAdvitisors();
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


  const deleteAdvitisor = async (id) => {


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

  const boxstyle = {
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgClip: "text",
    fontSize: "4xl",
    fontWeight: "extrabold"
  }




  useEffect(() => {
    getData()
  }, []);


  return (
    <Layout>




      <div >

        <Box display={"flex"} flexDirection={"coloumn"} justifyContent={"space-around"}  >

          <Box display={"flex"} alignItems={"center"}>
            <Text sx={boxstyle}  >
              Advitisors
            </Text>
          </Box>

          <Box display={"flex"} alignItems={"center"}>

            <Button colorScheme='orange' onClick={() => setModalVisible(true)}>
              + Add Advitisors
            </Button>
          </Box>

        </Box>

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
            <Button colorScheme='red' onClick={() => setModalVisible(false)}>
              Close
            </Button>
            <Button onClick={addAdvitisors} colorScheme='whatsapp'>Save changes</Button>
          </Modal.Footer>
        </Modal>

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
            </form>



          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme='red' onClick={() => setModalVisibleCampagin(false)}>
              Close
            </Button>
            <Button onClick={() => setModalVisibleCampagin(false)} colorScheme='whatsapp'>Save changes</Button>
          </Modal.Footer>
        </Modal>


        {
          loading && data.length > 0 ? (

            <div >
              <table className="table table-striped table-hover">

                <thead className="table-primary">
                  <tr>
                    <th >No.</th>
                    <th >Advitisors</th>
                    <th >Description</th>

                    <th >Remarks</th>
                    <th >Add Campagin</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    data.map((item, index) => (
                      <tr key={index}>
                        <td >{index + 1}</td>
                        <td >{item?.name}</td>
                        <td >{item?.desc}</td>

                        <td >
                          <Button colorScheme='red' onClick={() => deleteAdvitisor(item._id)}>
                            Delete
                          </Button>

                        </td>
                        <td >
                          <Button colorScheme='purple' onClick={() => addCampaginAdvi(item._id)}>
                            + Add Campagin
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















      </div>

      <ToastContainer />
    </Layout>




  )
}
