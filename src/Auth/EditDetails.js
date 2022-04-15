import React, { useState, useEffect, useRef } from "react";
import "../Auth/EditDetails.css";
import "../components/UserDashboard/UserDashboard.css";
import firebase from "firebase";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header/Header2";
import { GrEdit } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const EditDetails = (props) => {
  const auth = firebase.auth();

  let uid = "";
  const [name, setName] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [updatestate, setupdateState] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showrofile, setShowProfile] = useState(null);
  const [isFetching, setFetching] = useState(false);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const imageUploadRef = useRef();
  const [imageChange,setImageChange]=useState(false);
  const [imgUrl,setImgUrl]=useState("")

  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "phoneno") {
      setPhoneNo(value);
    }
  }

  function handleProfileImageChange(e) {
    setImageChange(true);
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProfileImage(selectedFile);
      
    } 
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
     setShowProfile(e.target.result);
      
    };
    fileReader.readAsDataURL(selectedFile);
    
  }
  const fetchUserData = async () => {
    setFetching(true);
    await auth.onAuthStateChanged((user) => {
      if (user) {
        uid = user.uid;
        db.collection("Users")
          .doc(uid)
          .get()
          .then((doc) => {
            const data = doc.data();
            setName(data.name);
            setPhoneNo(data.phoneNo);
            setShowProfile(data.imageUrl);
            setProfileImage(data.imageUrl);
            setImgUrl(data.imageUrl);
            setFetching(false);
          });
      } else {
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const db = firebase.firestore();
  const storage = firebase.storage();

  // async function editUserProfile(profileImage) {
  //   await auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       uid = user.uid;
  //       const uploadTask = storage.ref("Users/" + uid).put(profileImage);
  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log(progress);
  //         },
  //         (err) => {
  //           console.log(err.message);
  //         },
  //         () => {
  //           storage
  //             .ref("Users")
  //             .child(uid)
  //             .getDownloadURL()
  //             .then((imageUrl) => {
  //               db.collection("Users")
  //                 .doc(uid)
  //                 .update({
  //                   imageUrl: imageUrl,
  //                 })
  //                 .then(() => {
  //                   toast.success("Profile picture uploded succesfully");
  //                   setShowProfile(imageUrl);
  //                   setImageChange(false);
                    
  //                 });
  //             });
  //         }
  //       );
  //     }
  //   });
  // }

  // async function editUserdetails(event) {
  //   event.preventDefault();
  //   if(imageChange){
  //    await editUserProfile(profileImage);
  //   }
    
  //   await auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       uid = user.uid;
  //       db.collection("Users")
  //         .doc(uid)
  //         .update({
  //           name: name,
  //           phoneNo: phoneno,
  //         })
  //         .then(() => {
  //           toast.success("Details updated successfully!");
  //           if(props.updateVal===true){
  //                     props.setUpdate(false);
  //                   }
  //                   else{
  //                     props.setUpdate(true);
  //                   }

            
  //           setupdateState(true);
  //           props.onHide();
  //         });
  //     }
  //   });
  // }

  async function editDetails(event){
    event.preventDefault();
    await auth.onAuthStateChanged((user) => {
      if (user) {
        uid=user.uid;
   
    if(imageChange){
      const uploadTask=storage.ref("Users/"+uid).put(profileImage);
      uploadTask.on(
        "state_changed",
        (snapshot)=>{
          const progress=
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        },(err) => {
          console.log(err.message);
        },
        ()=>{
          storage
              .ref("Users")
              .child(uid)
              .getDownloadURL()
              .then((imageUrl)=>{
                db.collection("Users")
                .doc(uid)
                .update({
                  imageUrl: imageUrl,
                  name: name,
                  phoneNo: phoneno,
                })
                .then(()=>{
                  toast.success("Details updated successfully!");
            if(props.updateVal===true){
                      props.setUpdate(false);
                    }
                    else{
                      props.setUpdate(true);
                    }

            
            setupdateState(true);
            props.onHide();
                });
              });
        }

      );
      }
      else{
        db.collection("Users")
        .doc(uid)
        .update({
          name: name,
          phoneNo: phoneno,
          imageUrl:imgUrl
        })
        .then(() => {
          toast.success("Details updated successfully!");
          if(props.updateVal===true){
                    props.setUpdate(false);
                  }
                  else{
                    props.setUpdate(true);
                  }

          
          setupdateState(true);
          props.onHide();
        });
      }


    }
    })
  }


  if (isFetching) {
    return <h2>nhi hua dubara kar</h2>;
  } else {
    return (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="edit-details-modal-main"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              EDIT DETAILS
            </Modal.Title>
          </Modal.Header> */}
          <Modal.Body className="edit-details-modal">
            {updatestate ? <Redirect to="/userdashboard" /> : null}
            <ToastContainer />
            <div className="contact-us-main">
              <div className="contact-us-container">
                <div className="contact-us-form">
                  <div className="contact-info" style={{ textAlign: "center" }}>
                    <button
                      onClick={() => {
                        imageUploadRef.current.click();
                      }}
                      className="edit-image-btn"
                    >
                      <GrEdit className="edit-image-icon" />
                    </button>
                    <img id="yuiop2" src={showrofile} alt="custom"></img>
                  </div>
                  <div className="contact-form">
                    <form className="contact-us-main-form">
                      <div className="contact-form-input-container">
                        <input
                          type="text"
                          name="name"
                          className="contact-input"
                          onChange={handleChange}
                          value={name}
                        />
                        <span className="uyit">Name</span>
                      </div>

                      <div className="contact-form-input-container">
                        <input
                          type="text"
                          name="phoneno"
                          className="contact-input"
                          onChange={handleChange}
                          value={phoneno}
                        />
                        <span className="uyit">Phone Number</span>
                      </div>
                      <Form>
                        <Form.File
                          onChange={handleProfileImageChange}
                          id="userImage"
                          ref={imageUploadRef}
                          style={{ display: "none" }}
                        />
                      </Form>
                    </form>
                    <Row>
                      <Col className="edit-modal-actions-col">
                        <button onClick={editDetails} className="dummy-btn">
                          <FaCheck className="update-details-btn" />
                        </button>
                      </Col>
                      <Col className="edit-modal-actions-col">
                        <button onClick={props.onHide} className="dummy-btn">
                          <ImCross className="forfeit-btn" />
                        </button>
                      </Col>
                    </Row>
                  </div>
                  {/* <Button 
                    onClick={props.onHide}
                    className="ed-btn"
                    value="Preview"
                    onClick={editUserProfile}
                  >
                    Preview
                  </Button>
                  <Button
                    onClick={props.onHide}
                    className="ed-btn"
                    value="Submit"
                    onClick={editUserdetails}
                  >
                    Submit
                  </Button> */}
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button
              onClick={props.onHide}
              className="ed-btn"
              value="Preview"
              onClick={editUserProfile}
            >
              Preview
            </Button>
            <Button
              onClick={props.onHide}
              className="ed-btn"
              value="Submit"
              onClick={editUserdetails}
            >
              Submit
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
};

export default EditDetails;
