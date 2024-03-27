import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UsersGetRespose } from "../../model/UsersGetRespose";
import { PicturePostRequest } from "../../model/picturePostRequest";
import { useEffect, useState } from "react";
import { Service } from "../../servics/servic";

function Infomation_Page() {
  const user: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
  const [images, setImage] = useState<PicturePostRequest[]>([]);
  console.log("Uid:"+user.id);
  console.log(user.email);
  const services = new Service();

  useEffect(() => {
    const loadDataAsync = async () => {
      const res = await services.getImgById(user.id);
      const Imgs: PicturePostRequest[] = res;
      setImage(Imgs);
      console.log(Imgs);
      console.log(user.id);

    };
    loadDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const navigates = useNavigate();
  const navigatess = useNavigate();
  const navigatesss = useNavigate();

  function navigateToEditProfile() {
    navigate("/editprofile/");
  }

  function navigateToEditImage(Uid:number,ImgID:number) {
    navigates(`/editimage?Uid=${Uid}&ImgID=${ImgID}`);
  }
  function navigateToBackVote() {
    navigatess("/vote");
  }
  function navigateToAddimage() {
    navigatesss("/addimage");
  }
  function chkBtn(num:number) {
    if (num < 5) {
      return(<div onClick={navigateToAddimage}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          src="https://www.shutterstock.com/image-vector/premium-picture-icon-logo-line-600nw-749844106.jpg"
          style={{
            width: "190px",
            height: "170px", // Maintain aspect ratio
          }}
        />
      </div>)
    }else{
      return <div></div>
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://i.pinimg.com/originals/a7/a5/e3/a7a5e3589be5662d93d4539284062c22.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "94vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      <div style={{ display: "flex", marginRight: "150px" }}>
        <div style={{ marginTop: "0px", color: "black" }}>
          <button className="button" onClick={navigateToBackVote}>
            Back
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1.50)",
              padding: "20px",
              borderRadius: "30px",
              marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              >
                <img
                  src={user.profile}
                  style={{
                    width: "170px",
                    height: "170px", // Maintain aspect ratio
                    borderRadius: "50%", // Make it circular
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: "left",
                  display: "inline-block",
                  verticalAlign: "top",
                }}
              >
                <div className="prompt-light">
                  <h1>{user.name}</h1>
                  <p>
                    Followers 120.10K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Following 57K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ marginTop: "20px", marginRight: "20px" }}>
                    <button className="button prompt-light">Follow</button>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <button
                      className="button prompt-light"
                      onClick={navigateToEditProfile}
                    >
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <br />

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1.50)",
              padding: "20px",
              borderRadius: "30px",
              marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <Grid container spacing={2}>
                {images?.map((image, index) => (
                  <Grid xs={2.4} key={index}>
                    <div>
                      <img
                        src={image.path}
                        style={{
                          height: "160px",
                          width: "160px",
                          
                        }}
                        onClick={()=>{
                          navigateToEditImage(
                            image.Uid,image.id
                          )
                        }}
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
            {chkBtn(images.length)}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Infomation_Page;
