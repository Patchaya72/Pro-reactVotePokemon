import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UsersGetRespose } from "../../model/UsersGetRespose";
import { VoteGetRequest } from "../../model/votePostRequest";
import { Service } from "../../servics/servic";
import { useState } from "react";

function Vote_page() {
  const navigate = useNavigate();
  const navigates = useNavigate();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // สถานะของ dialog
  const [picArr, setPicArr] = useState([]);
  const user: UsersGetRespose = JSON.parse(localStorage.getItem("objUser")!);
  const services = new Service();
  
  console.log(user);

  const autoLoad = async () => {
    // setLoading(true);
    try {
      const res = await services.getAllImg();
      console.log(res);


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

  async function calScore(win: VoteGetRequest, loss: VoteGetRequest) {
    if (win.result[0].id == null) {
      win.result[0].score = 0;
    }
    if (loss.result[0].id == null) {
      loss.result[0].score = 0;
    }

    const K: number = 20;
    // ค่าคาดหวัดผลลัพธ์
    const Ew: number =
      1 / (1 + 10 ** ((loss.result[0].score - win.result[0].score) / 400));
    const El: number =
      1 / (1 + 10 ** ((win.result[0].score - loss.result[0].score) / 400));
    // คะแนนล่าสุด
    const w: number = Math.floor(win.result[0].score + K * (1 - Ew));
    const l: number = Math.floor(loss.result[0].score + K * (0 - El));
    // ผลการคำนวน
    console.log("Win Score : " + w);
    // console.log("Win Score : "+(win.score));
    console.log("Lose Score : " + l);

    // สร้าง body สำหรับการ insert vote
    const bodyWin = {
      score: w,
      ImgID: win.result[0].ImgID,
    };
    console.log("Body Win: " + bodyWin.score);

    const bodyLose = {
      score: calculateScore(l),
      ImgID: loss.result[0].ImgID,
    };
    console.log("Body Lose: " + bodyLose.score);
    let chkWin: VoteGetRequest[] = await services.getVoteById(
      loss.result[0].ImgID
);
    let chkLoss: VoteGetRequest[] = await services.getVoteById(
      loss.result[0].ImgID
    );

    const bodyPictureWin = {
      score: win.result[0].score,
    };
    const bodyPictureLoss = {
      score: loss.result[0].score,
    };

    function getCurrentDate(): string {
      const currentDate: Date = new Date();
      const day: number = currentDate.getDate();
      
      // สร้างสตริงเพื่อแสดงวันที่ในรูปแบบ "วัน/เดือน/ปี"
      const dateString: string = `${day}`;
      
      return dateString;
    }
    // เรียกใช้งานฟังก์ชัน getCurrentDate
    const currentDate: string = getCurrentDate();

    if (chkWin.length <= 0) {
      await services.postVote(bodyWin); //บันทึกการ vote
    } else if (chkWin.length > 0 &&chkWin?.[0]?.result[0].date == currentDate) {
      await services.putVoteById(bodyPictureWin, win.result[0].ImgID);
    }
    else{
      await services.postVote(bodyWin); //บันทึกการ vote
    }
    if (chkLoss.length <= 0) {
      await services.postVote(bodyLose); //บันทึกการ vote
    } else if (chkLoss.length > 0  &&chkLoss?.[0]?.result[0].date == currentDate) {
      await services.putVoteById(bodyPictureLoss, loss.result[0].ImgID);
    }else{
      await services.postVote(bodyLose); //บันทึกการ vote
    }
    handleOpenDialog();
    autoLoad(userStorage.id);
  }

  // Function เปิด dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function ปิด dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  function navigateTo() {
    navigate("/vote2");
  }
  function navigateToChoose() {
    navigates("/choose");
  }

  return ( <>
   <ButtonAppBar />
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "15vh",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            {picArr.map((e, i = 0) => (
              <Card
                sx={{
                  maxWidth: 600,
                  minWidth: 300,
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
                  marginRight: "50px",
                }}
              >
                <CardActionArea
                  onClick={async () => {
                    console.log("EID: " + e?.ImgID);
                    console.log("I: " + i);

                    if (i == 0) {
                      await calScore(picArr[0], picArr[1]);
                    } else if (i == 1) {
                      await calScore(picArr[1], picArr[0]);
                    }
                    i++;
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={e?.path}
                  />
                  <CardContent>
                    <Typography
                      style={{ textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {e?.name} <br />
                      {e?.score}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            onClick={() => handleCloseDialog()}
          >
            <DialogTitle>ผลลัพธ์</DialogTitle>
            <DialogContent>
              <div
                style={{
                  display: "flex",
                  width: "500px",
                  height: "300px",
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                    }}
                    component="img"
                    // image={obj.wImg}
                  />
                  <h4
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {/* {obj.win} (ชนะ) */}
                  </h4>
                  <br />
                  <p>ค่าคาดหวังคือ: </p>
                  <p>คะแนนเดิมมีอยู่: </p>
                  <p>ได้คะแนนเพิ่มขึ้น: </p>
                  <p>คะแนนใหม่ที่ได้คือ: </p>
                </Box>
                <hr />
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                    }}
                    component="img"
                    // image={obj.lImg}
                  />
                  <h4
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {/* {obj.lose} (แพ้) */}
                  </h4>
                  <br />
                  <p>ค่าคาดหวังคือ:</p>
                  <p>คะแนนเดิมมีอยู่:</p>
                  <p>คะแนนลดลง:</p>
                  {/* {obj.lNew < 0 ? (
                    <p>คะแนนใหม่ที่ได้คือ: 0</p>
                  ) : (
                    <p>คะแนนใหม่ที่ได้คือ: {obj.lNew}</p>
                  )} */}
                </Box>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
  </>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundImage:
    //       "url('https://i.pinimg.com/originals/9d/67/95/9d679563efe7ce2f95e5e3479dabcb19.gif')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     color: "white",
    //     height: "94vh",
    //     width: "100vw",
    //     padding: "auto",
    //   }}
    // >
      
    //   <div style={{ display: "flex",marginRight: "150px" }}>
    //   &nbsp; &nbsp; 
    //   <div style={{ marginTop: "0px"  }}>
    //           <button className="button" onClick={navigateToChoose}>Back</button>
    //         </div>
    //         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //     <div style={{ display: "flex" }}>
    //       <Card
    //         sx={{
    //           backgroundColor: "rgba(255, 255, 255, 1.0)",
    //           padding: "40px",
    //           borderRadius: "30px",
    //           marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           textAlign: "center",
    //         }}
    //       >
    //         <img
    //           src={}
    //           style={{
    //             width: "400px",
    //             height: "auto",
    //             borderRadius: "15px",
    //           }}
    //         />
    //         <div className="prompt-light" style={{ marginTop: "20px" }}>
    //           <h3>Eevee</h3>
    //           <h3>120 โหวต</h3>
    //         </div>
    //         <div style={{ marginTop: "20px" }}>
    //           <button className="button" onClick={navigateTo}>Like</button>
    //         </div>
    //       </Card>

    //       <div
    //         style={{ color: "black", display: "flex", alignItems: "center" }}
    //       >
    //         <h2 style={{ margin: "0" }}>VS &nbsp; &nbsp; </h2>
    //       </div>

    //       <Card
    //         sx={{
    //           backgroundColor: "rgba(255, 255, 255, 1.0)",
    //           padding: "40px",
    //           borderRadius: "30px",
    //           marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           textAlign: "center",
    //         }}
    //       >
    //         <img
    //           src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
    //           style={{
    //             width: "400px",
    //             height: "auto",
    //             borderRadius: "15px",
    //           }}
    //         />
    //         <div className="prompt-light" style={{ marginTop: "20px" }}>
    //           <h3>Umbreon</h3>
    //           <h3>120 โหวต</h3>
    //         </div>
    //         <div style={{ marginTop: "20px" }}>
    //           <button className="button" onClick={navigateTo}>Like</button>
    //         </div>
    //       </Card>
    //     </div>
    //   </div>
    // </div>

    
  );
}

export default Vote_page;
