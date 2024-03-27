import { Card, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Service } from "../../servics/servic";
import { PicturePostRequest } from "../../model/picturePostRequest";

function EditImage_Page() {
  const [searchParams] = useSearchParams();
  const Uid = Number(searchParams.get("Uid"));
  const ImgID = Number(searchParams.get("ImgID"));
  const [Images, setImages] = useState<PicturePostRequest[]>();
  const [loading, setLoading] = useState(false);


  console.log("ID SearchParam"+ImgID);

  const services = new Service();

  const navigate = useNavigate();

  function navigateProfile() {
    navigate("/info");
  }
  function navigateEditImages() {
    navigate(`/editimageing?Uid=${Uid}&ImgID=${ImgID}`);
  }

  useEffect(() => {
    const loadDataAsync = async (id:number) => {
      const res = await services.getPictureById(id);
      // const Imgs: PicturePostRequest[] = res;
      setImages(res);
      console.log(res);
      // console.log(user.id);
    };
    loadDataAsync(ImgID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deleteFunc(picture_id:number) {
    
    console.log("Delete Picture: " + picture_id);
    console.log("path: " + Images?.[0]?.path);

    const resDelVote = await services.deleteVoteByPictureId(picture_id);
    const res = await services.deletePictureById(picture_id);

    console.log("Log Delt" + res);
    console.log("Log Delt Vote" + resDelVote);
    // await services.deletePictureOnFirebase(String(Images?.[0]?.path));
    // navigate(0)
  }


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
                <button
                  className="button containerbt"
                  onClick={navigateProfile}
                >
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
                  <img
                    src={Images?.[0]?.path}
                    style={{
                      width: "400px",
                      height: "auto",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="prompt-light" style={{ marginTop: "20px" }}>
                    <h3>{Images?.[0].name}</h3>
                    <h3>{Images?.[0].score}</h3>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <button className="button" onClick={navigateEditImages}>
                      Edit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="button" onClick={()=>(deleteFunc(Number(Images?.[0].id)))}>Delete</button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditImage_Page;
