import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Service } from "../../servics/servic";
import { UsersGetRespose } from "../../model/UsersGetRespose";
// import { useState } from "react";

function Editprofile_Page() {
  //ค่าตัวแปร
  let name = "";
  let password = "";
  // let confirmPassword = "";
  let filechk=""


 let user: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
  console.log(user.id);

  const navigate = useNavigate();
  const services = new Service();
  const formData = new FormData();

  function navigateTo() {
    navigate("/info");
  }

  function selectFile(event:any) {
    const file = event.target.files[0];
    filechk=file
    console.log(filechk);
    

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

    uploadImageOnFireBase(formData, user.id, name, password); 
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
        <div style={{ display: "flex" }}></div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "0px", // ลด padding เพื่อทำให้การ์ดเล็กลง
            borderRadius: "20px", // ลดขนาดของ borderRadius เพื่อทำให้การ์ดเล็กลง
            marginLeft: "140px",
          }}
        >
          <form style={{ width: "100%" }}>
            {" "}
            {/* เพิ่ม width เพื่อให้การ์ดทำการย่อตามขนาดของหน้าจอ */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "5px", // เพิ่มระยะห่างด้านล่างของรูปภาพ
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden", // ลดขนาดของรูปภาพให้พอดีกับขนาดของการ์ด
                  width: "150px",
                  height: "150px", // รักษาอัตราส่วน
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
              </div>
              <h2
                className="gradiant-bg prompt-light"
                style={{ textAlign: "center" }}
              >
                Edit Profile
              </h2>
            </div>
            <div className="container prompt-light">
              <TextField
                label="Name"
                type="email"
                required
                fullWidth
                onChange={(e) => {
                  name = e.target.value;
                }}
              />
              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                margin="normal"
                onChange={(e) => {
                  password = e.target.value;
                }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                required
                fullWidth
                margin="normal"
              />
              <div
                className="box"
                onClick={() => {
                  // if (password == confirmPassword&&password != "") {
                  //   upload();
                  //   alert("Register Success!!");
                  // } else {
                  //   alert("Password ไม่ตรงกัน กรุณาใส่ให้ตรงกัน");
                  // }

                  if(name==""&&password==""&&filechk==""){
                    alert("คุณพี่ยังไม่ใส่อะไรเลยค่ะ!!!");
                  }
                  else if(name!=""&&password==""&&filechk==""){
                    //อัพname
                     editUser(name ,undefined,undefined,user.id);
                  }
                  else if (name!=""&&password!=""&&filechk==""){
                     //อัพname and password
                    editUser(name ,password,undefined,user.id);
                  }
                  else if (name!=""&&password!=""&&filechk!=""){
                      //อัพทั้งหมด
                    upload();
                  }
                  else if (name==""&&password!=""&&filechk==""){
                    //อัพ Pssworkd 
                    editUser(undefined ,password,undefined,user.id);
                 }
                 else if (name==""&&password==""&&filechk!=""){
                  //อัพไฟล์อันเดียว
                  uploadImageOnFireBase(formData, user.id,undefined, undefined); 
               }
               else if (name!=""&&password==""&&filechk!=""){
                //อัพ  name and filechk
                uploadImageOnFireBase(formData, user.id,name, undefined); 
             }
             else if (name==""&&password!=""&&filechk!=""){
              //อัพ  password and filechk
              uploadImageOnFireBase(formData, user.id,undefined, password); 
           }
                }}
              >
                <a className="button" href="#popup1">
                  Edit
                </a>
              </div>
              {/* <div id="popup1" className="overlay">
                <div className="popup">
                  <h2>คุณทำการแก้ไขสำเร็จแล้ว</h2>
                  <a className="close" href="#">
                    &times;
                  </a>
                  <div className="content">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      src="https://thumb.ac-illust.com/25/252183b6cb8338c3f596ba058de7b6be_t.jpeg"
                      style={{
                        width: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                        height: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </form>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );

  async function editUser(
    name: string | undefined,
    password: string | undefined,
    profile: string | undefined,
    id: number
  ) {

    const body = {

      
      name: name || undefined,
      password: password || undefined, 
      profile: profile || undefined,
    };

    console.log("Body");

    console.log(body.name);
    console.log(body.password);
    console.log(body.profile);

    console.log("Body :" + body);
    await services.putUserEdit(body, id);

    const res:UsersGetRespose[] = await services.getUserById(id);

    const userUpdate = {
      id:res[0].id,
      name: res[0].name,
      email:res[0].email,
      password:res[0].password,
      profile:res[0].profile,
      role:res[0].role,
    };
    localStorage.setItem("objUser",JSON.stringify(userUpdate))
    let one: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
    console.log(one);
    console.log("res="+res[0].email);
    
    

  }

  async function uploadImageOnFireBase(
    data: FormData,
    id: number,
    name: string| undefined,
    password: string| undefined,
  ) {
    console.log("ImageOnfireBase: " + data);
    
    if (name==""){
      name :undefined
    }
    if (password==""){
      name :undefined
    }
    const res = await services.postPictureOnFireBase(data);
    const img = String(res).split(" "); //แบ่งตรงเคื่องหมายวรรคตอน
    console.log("Upload Image On Fire Base: " + img[1]);

    await editUser(name, password, String(img[1]), id);

  }
}

export default Editprofile_Page;
