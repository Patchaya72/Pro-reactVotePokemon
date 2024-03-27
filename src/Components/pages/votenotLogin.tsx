import {
    Card, CircularProgress,
  } from "@mui/material";
//   import { useNavigate } from "react-router-dom";
  import { UsersGetRespose } from "../../model/UsersGetRespose";
  import { VoteGetRequest } from "../../model/votePostRequest";
  import { PicturePostRequest } from "../../model/picturePostRequest";
  import { Service } from "../../servics/servic";
  import { useEffect, useState } from "react";
  
  function VoteNotLogin_page() {
  
    
    // const navigate = useNavigate();
    // const navigates = useNavigate();
    const [loading, setLoading] = useState(false);
    const [, setOpenDialog] = useState(false); // สถานะของ dialog
    const [picArr, setPicArr] = useState<PicturePostRequest[]>();
    const user: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
    const services = new Service();
    const [, setiMg1] = useState<PicturePostRequest[]>([]);
    const [, setiMg2] = useState<PicturePostRequest[]>([]);
  
    console.log(user);
  
    useEffect(() => {
      autoLoad();
    }, []);
  
    const autoLoad = async () => {
      setLoading(true);
      try {
        const res: PicturePostRequest[] = await services.getAllImg();
  
        const randomIndex1 = Math.floor(Math.random() * res.length);
        const randomIndex2 = Math.floor(Math.random() * res.length);
  
        if (res[randomIndex1].id == res[randomIndex2].id) {
          console.log("IF ID : " + res[randomIndex1].id);
          console.log("IF Name : " + res[randomIndex2].name);
        } else {
          console.log("Else ID : " + res[randomIndex1].id);
          console.log("Else Name : " + res[randomIndex2].name);
          setPicArr([res[randomIndex1], res[randomIndex2]]);
        }
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    function calculateScore(score: number) {
      if (score <= 0) {
        return 0;
      } else {
        return score;
      }
    }
  
    async function calScore(IdWin: number, IdLose: number) {
      function getCurrentDate(): string {
        const currentDate: Date = new Date();
        const day: number = currentDate.getDate();
  
        // สร้างสตริงเพื่อแสดงวันที่ในรูปแบบ "วัน/เดือน/ปี"
        const dateString: string = `${day}`;
  
        return dateString;
      }
      // เรียกใช้งานฟังก์ชัน getCurrentDate
      const currentDate: string = getCurrentDate();
  
      console.log("Win : " + IdWin);
      console.log("Lose : " + IdLose);
      let chk1Win: VoteGetRequest[] = await services.getVoteById(IdWin);
      let chk2Loss: VoteGetRequest[] = await services.getVoteById(IdLose);
  
      let winImg: PicturePostRequest[]=await services.getImgById(IdWin)
      let LossImg: PicturePostRequest[]=await services.getImgById(IdLose)
      setiMg1(winImg)
      setiMg2(LossImg)
      
      let chknullWin:boolean  = false;
  
      let chknullLoss:boolean  = false;
  
      if (chk1Win.length <= 0) {
        chk1Win[0] = {
          id: 0,
          score: 0,
          date: "0",
          ImgID: IdWin,
        };
        console.log(chk1Win + "chk");
        chknullWin = true;
      } else {
        chk1Win.map((e, i = 0) => {
          if (e.date == currentDate) {
            chk1Win[0] = chk1Win[i];
            console.log("win else if :"+chk1Win[0].id);
            chknullWin=false;
          }
          else{
            chknullWin = true;
          }
        });
      }
      if (chk2Loss.length <= 0) {
        chk2Loss[0] = {
          id: 0,
          score: 0,
          date: "0",
          ImgID: IdLose,
        };
        chknullLoss = true;
      } else {
        chk2Loss.map((e, i = 0) => {
          if (e.date == currentDate) {
            chk2Loss[0] = chk2Loss[i];
            console.log(chk2Loss[0]);
            chknullLoss= false;
          }
          else{
            chknullLoss = true;
          }
        });
  
        console.log(chknullWin);
        console.log(chknullLoss);
        
        const K: number = 20;
        // ค่าคาดหวัดผลลัพธ์
        const Ew: number =
          1 / (1 + 10 ** ((chk2Loss[0].score - chk1Win[0].score) / 400));
        const El: number =
          1 / (1 + 10 ** ((chk1Win[0].score - chk2Loss[0].score) / 400));
        // คะแนนล่าสุด
        const w: number = Math.floor(chk1Win[0].score + K * (1 - Ew));
        const l: number = Math.floor(chk2Loss[0].score + K * (0 - El));
        // ผลการคำนวน
        console.log("Win Score : " + w);
        // console.log("Win Score : "+(win.score));
        console.log("Lose Score : " + l);
  
        // สร้าง body สำหรับการ insert vote
        const bodyWin = {
          score: w,
          ImgID: chk1Win[0].ImgID,
        };
        console.log("Body Win: " + bodyWin.score);
  
        const bodyLose = {
          score: calculateScore(l),
          ImgID: chk2Loss[0].ImgID,
        };
  
        console.log("beforAfter:");
        console.log("Body Lose: " + bodyLose.score);
  
        const bodyPictureWin = {
          score: bodyWin.score,
        };
        const bodyPictureLoss = {
          score: bodyLose.score,
        };
  
        if (chknullWin) {
          console.log("this post");
          await services.postVote(bodyWin);
          await services.putScorePictureById(bodyWin, chk1Win[0].ImgID);
        } else if (chk1Win.length > 0 && chk1Win[0].date == currentDate) {
          console.log("this edit");
          console.log("body:" + bodyPictureWin);
          console.log("chkWin:" + chk1Win[0].ImgID);
          await services.putVoteById(bodyPictureWin, chk1Win[0].ImgID);
          await services.putScorePictureById(bodyWin, chk1Win[0].ImgID);
        }
        else{console.log("else");
        }
        if (chknullLoss) {
          console.log("this post loss");
          await services.postVote(bodyLose); //บันทึกการ vote
          await services.putScorePictureById(bodyLose, chk2Loss[0].ImgID);
        } else if (chk2Loss.length > 0 && chk2Loss[0].date == currentDate) {
          await services.putVoteById(bodyPictureLoss, chk2Loss[0].ImgID);
          await services.putScorePictureById(bodyPictureLoss, chk2Loss[0].ImgID);
        }
  
        console.log("end");
        handleOpenDialog();
        // autoLoad(userStorage.id);
      }
    }
  
    // Function เปิด dialog
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    // Function ปิด dialog
    // const handleCloseDialog = () => {
    //   setOpenDialog(false);
    // };
  
    // function navigateTo() {
    //   navigate("/vote2");
    // }
    // function navigateToChoose() {
    //   navigates("/choose");
    // }
  
    return (
      <>
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage:
                "url('https://i.pinimg.com/originals/9d/67/95/9d679563efe7ce2f95e5e3479dabcb19.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              height: "94vh",
              width: "100vw",
              padding: "auto",
            }}
          >
            <div style={{ display: "flex" }}>
              { picArr?.map((pic, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 1.0)",
                    padding: "40px",
                    borderRadius: "30px",
                    marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={pic.path}
                    style={{
                      width: "350px",
                      height: "250px",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="prompt-light" style={{ marginTop: "20px" }}>
                    <h3>{pic.name}</h3>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <button className="button"onClick={()=>{
                      if(index==0){
                        console.log("pic"+pic.id,"pic Arr"+picArr[1].id);
                        
                        calScore(pic.id,picArr[1].id)
                      }
                      else{
                        console.log("pic"+pic.id,"pic Arr"+picArr[0].id);
                        
                        calScore(pic.id,picArr[0].id)
                      }
                    }}>
                      Like
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
  export default VoteNotLogin_page;
  