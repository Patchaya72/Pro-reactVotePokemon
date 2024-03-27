import { Card, CircularProgress, TextField } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PicturePostRequest } from "../../model/picturePostRequest";
import { SetStateAction, useEffect, useState } from "react";
import { Service } from "../../servics/servic";

function EditImageing_Page() {
  const [searchParams] = useSearchParams();
  const Uid = Number(searchParams.get("Uid"));
  const ImgID = Number(searchParams.get("ImgID"));
  const [Images, setImages] = useState<PicturePostRequest[]>();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const formData = new FormData();

  console.log("ID SearchParam" + ImgID);

  const services = new Service();

  const navigate = useNavigate();

  function navigateProfile() {
    navigate("/info");
  }
  function navigateEditImages() {
    navigate(`/editimageing?ImgID=${ImgID}`);
  }

  const handleNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const loadDataAsync = async (id: number) => {
      const res = await services.getPictureById(id);
      // const Imgs: PicturePostRequest[] = res;
      setImages(res);
      console.log(res);
      // console.log(user.id);
    };
    loadDataAsync(ImgID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const navigate = useNavigate();

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

  // async function upload(data:FormData,picture_id:number,user_id:number,name:string){

  //   uploadImageOnFireBase(formData,picture_id,user_id, name); 
  // }

  async function editPicture(data: FormData, picture_id: number, name: string) {

    const resDelVote = await services.deleteVoteByPictureId(picture_id);
    console.log(resDelVote);
    
    // services.deletePictureOnFirebase(String(Images?.[0]?.path));
    console.log("FromData: "+data);
    console.log("ID: "+picture_id);
    console.log("Name: "+name);
    
    const res = await services.postPictureOnFireBase(data);
    const img = String(res).split(" "); //แบ่งตรงเคื่องหมายวรรคตอน
    console.log("IMG");
    console.log(img);
    
    const body = {
      name:name,
      score:0,
      path:String(img[1])
    }

    console.log("body:"+body);
    
    await services.updatePictureById(body,picture_id)
  }

  // async function uploadImageOnFireBase(
  //   data: FormData,
  //   picture_id: number,
  //   user_id: number,
  //   name: string| undefined,
  // ) {
  //   console.log("ImageOnfireBase: " + data);
    
  //   const res = await services.postPictureOnFireBase(data);
  //   const img = String(res).split(" "); //แบ่งตรงเคื่องหมายวรรคตอน
  //   console.log("Upload Image On Fire Base: " + img[1]);

  //   await editUser(name, password, String(img[1]), id);

  // }

  return (
    <>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
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
                    marginLeft: "140px", // เพิ่มระยะห่างด้านขวาของการ์ด
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
                      label="Eevee"
                      type="Eevee"
                      required
                      fullWidth
                      margin="normal"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    {" "}
                    <br />
                    <a className="button" href="#popup1" onClick={()=>{
                      editPicture(formData,ImgID,name)
                    }}>
                      Edit
                    </a>
                  </div>
                  <div id="popup1" className="overlay">
                    <div className="popup">
                      <h2>คุณทำการแก้ไขสำเร็จแล้ว</h2>
                      <a className="close" href="#">
                        &times;
                      </a>
                      <div className="content">
                        &nbsp;&nbsp;
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
                  </div>
                  <div
                    className="prompt-light"
                    style={{ marginTop: "20px" }}
                  ></div>
                </Card>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditImageing_Page;
