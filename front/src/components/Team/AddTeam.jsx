import React, { useEffect, useState } from "react";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
const AddTeam = () => {
  const navigate = useNavigate()
  const [nameTeam, setNameTeam] = useState("");
  const [secteur, setSecteur] = useState("");
  const [responsable, setResponsable] = useState("");
  /** start states */
  const [formData, setFormData] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      setResponsable(decoded.id)
    }
  }, [])
  console.log(responsable)
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: "",
  });
  /** end states */

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append("categoryImage", files[0]);
    data.append("name", files[0].name);
    data.append("nameTeam", nameTeam);
    data.append("responsable", responsable);
    data.append("secteur", secteur);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    // setInfo({
    //   image: "",
    //   name: "",
    //   nameTeam,
    //   responsable,
    // });
    setProgressPercent(0);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setProgressPercent(percent);
      },
    };
    axios
      .post("http://localhost:5000/equipe/add", formData, options)
      .then((res) => {
        localStorage.setItem("equipe", res.data._id);
        setTimeout(() => {
          // setInfo(res.data.equipe);
          setProgressPercent(0);
        }, 1000);
        navigate('/addPlayer')
      })
      .catch((err) => {
        console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors,
        });
        setTimeout(() => {
          setError({
            found: false,
            message: "",
          });
          setProgressPercent(0);
        }, 3000);
      });
  };
  return (
    <div className="back">
      {/*Responsable */}
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ margin: "auto" }}>
            <div className="administrator">
              <span className="text">ADD A TEAM</span>
              <img
                style={{ width: "80px" }}
                src="https://t3.ftcdn.net/jpg/02/03/40/20/360_F_203402061_1nSZ5lt348w8E0suHMggk5pEQ4LGhePZ.jpg"
              />
              <div className="d-flex justify-content-center align-items-center flex-column">
                {error.found && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{ width: "359px" }}
                  >
                    {error.message}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  style={{
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="TeamName"
                    placeholder="Team Name ..."
                    value={nameTeam}
                    onChange={(e) => setNameTeam(e.target.value)}
                  />
                  <input
                    type="text"
                    readonly
                    className="form-control-plaintext"
                    id="secteur"
                    placeholder="Secteur ..."
                    value={secteur}
                    onChange={(e) => setSecteur(e.target.value)}
                  />
                  <div className="progress mb-3 w-100">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${progressPercent}%` }}
                      aria-valuenow={progressPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      {progressPercent}
                    </div>
                  </div>

                  {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  > */}
                  <div className="upload-btn-wrapperp">
                    <PhotoSizeSelectActualIcon
                      style={{ color: "", height: "34px", width: "70px" }}
                    />
                    <input
                      type="file"
                      name="myfile"
                      aria-describedby="inputGroupFileAddon04"
                      onChange={upload}
                      id="inputGroupFile04"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{
                      height: "40px",
                      margin: "0",
                      width: "170px !important",
                    }}
                  >
                    Submit
                  </button>
                  {/* </div> */}
                </form>
              </div>
              <img
                style={{
                  width: "170px",
                  marginTop: "10px",
                  marginLeft: "40px",
                }}
                src="data:image/jpeg;base64,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"
              />
              {/* <Link to="/player">
                <img
                  style={{
                    width: "100px",
                    height: "50px",
                    marginLeft: "200px",
                    marginTop: "10px",
                  }}
                  src="https://www.pngkit.com/png/detail/192-1929101_arrow-right-vector-clip-art-green-right-arrow.png"
                />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
