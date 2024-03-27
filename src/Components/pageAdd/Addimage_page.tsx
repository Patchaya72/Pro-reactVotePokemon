import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UsersGetRespose } from "../../model/UsersGetRespose";
import { Service } from "../../servics/servic";

function AddImage_Page() {
const services = new Service();
const formData = new FormData();
 let user: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
 console.log(user.id);
  const navigate = useNavigate();

  let name = "";


  function navigateTo() {
    navigate("/info");
  }
  function selectFile(event:any) {
    const file = event.target.files[0];
    

    formData.append("file", file);


    const reader = new FileReader();

    reader.onload = function () {
      const preview = document.getElementById("preview");
      if (preview !== null && preview instanceof HTMLImageElement) {
        preview.src = reader.result as string;
    }
      
    };
    
    reader.readAsDataURL(file);
  }

  async function upload(){
    uploadImageOnFireBase(formData, name,user.id);
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
        &nbsp; &nbsp;
        <div style={{ marginTop: "0px" }}>
          <button className="button containerbt" onClick={navigateTo}>
            Back
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
              padding: "40px",
              borderRadius: "30px",
              marginLeft: "150px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <img width="300px" id="preview" />
              <TextField
                type="file"
                margin="normal"
                id="file"
                required
                fullWidth
                autoFocus
                onChange={selectFile}
              />
            </div>
            <div className="container">
              <TextField
                label="ชื่อรูปภาพ"
                type="Eevee"
                required
                fullWidth
                margin="normal"
              onChange={(e) => {
                  name = e.target.value;
                }}/>
            </div>
            <div>
              {" "}
              <br />
              <a className="button" href="#popup1" onClick={async () => {
                if(name !=""){ 
                  await upload();
                  alert("สำเร็จแล้ว");
                  navigateTo();
                }
                else(
                  alert("ใส่ชื่อรูปด้วยครัช")
                )
               
                 }}>
                ADD
              </a>
            </div>
            <div className="prompt-light" style={{ marginTop: "20px" }}></div>
          </Card>
        </div>
      </div>
    </div>
  );
  async function editUser(
    name: string ,
    path: string,
    id: number
  ) {

    const body = {
      name: name ,
      Uid: id , 
      path: path , 
    };

    await services.postImg(body);

  }

  async function uploadImageOnFireBase(
    data: FormData,
    name: string,
    id:number
  ) {
    console.log("ImageOnfireBase: " + data);
    
    const res = await services.postPictureOnFireBase(data);
    const img = String(res).split(" "); //แบ่งตรงเคื่องหมายวรรคตอน
    console.log("Upload Image On Fire Base: " + img[1]);

    await editUser(name, String(img[1]), id);

  }
}

export default AddImage_Page;
