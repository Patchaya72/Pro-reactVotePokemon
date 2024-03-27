import axios from "axios";
import { UsersGetRespose } from "../model/UsersGetRespose";
import { PicturePostRequest } from "../model/picturePostRequest";
import { VoteGetRequest } from "../model/votePostRequest";
import { RangGetRespose } from "../model/rangGetRespose";
import { GraphGEtRespose } from "../model/graphGEtRespose";

// eslint-disable-next-line react-refresh/only-export-components
const HOST: string = "http://localhost:3000/"; 
// const HOST: string = "https://project-reactvotepokemon-b.onrender.com/";

export class Service {
  async getAllUser() {
    const url = HOST + `user`;
    const response = await axios.get(url);
    const users: UsersGetRespose[] = response.data;
    return users;
  }

  async getUserById(id: number) {
    const url = HOST + `user/${id}`;
    const response = await axios.get(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

   async putUserEdit(body: {  name: string | undefined; password: string| undefined ;profile:string | undefined; },id:number) {
    const url = HOST + `user/edit/${id}`;
    const response = await axios.put(url,body);
    const res = response.data
    console.log(res);
    
  }

  //   async getAllPicture() {
  //     const url = HOST + `picture`;
  //     const response = await axios.get(url);
  //     const pictures: PictureGetResponse[] = response.data;
  //     return pictures;
  //   }

  //   async getPictureById(id: number) {
  //     const url = HOST + `picture/${id}`;
  //     const response = await axios.get(url);
  //     const user: PictureGetResponse[] = response.data;
  //     return user;
  //   }

  //   async getPictureByUID(id: number) {
  //     const url = HOST + `picture/uid/${id}`;
  //     const response = await axios.get(url);
  //     const user: PictureGetResponse[] = response.data;
  //     return user;
  //   }
  async getAllImg() {
    const url = HOST + `img/`;
    const response = await axios.get(url);
    const user: PicturePostRequest[] = response.data;
    return user;
  }


  async getPictureById(id: number) {
    const url = HOST + `img/img/${id}`;
    const response = await axios.get(url);
    const user: PicturePostRequest[] = response.data; 
    return user;
  }

  async deletePictureById(id:number) {
    const url = HOST + `img/${id}`;
    const response = await axios.delete(url);
    const res = response.data
    console.log(res);
    
  }

  async deleteVoteByPictureId(id:number) {
    const url = HOST + `vote/edit/null/${id}`;
    const response = await axios.put(url);
    const res = response.data
    console.log(res);
    
  }

  async updatePictureById(body:{ name:string | undefined; score:number | undefined; path:string|undefined},id:number) {
    const url = HOST + `img/edit/picture/${id}`;
    const response = await axios.put(url,body);
    const res = response.data
    console.log(res);
    
  }

  async deletePictureOnFirebase(path:string) {
    const url = HOST + `img/paths?path=`+path;
    console.log("URL: "+url);
    const response = await axios.delete(url);
    const res = response.data
    console.log(res);
    return (res)
  }

  async putPictureById(id: number) {
    const url = HOST + `edit/${id}`;
    const response = await axios.put(url);
    const user: PicturePostRequest[] = response.data;
    return user;
  }

  async putScorePictureById(body: { score: number},id: number) {
    const url = HOST + `img/edit/${id}`;
    const response = await axios.put(url,body);
    const user: PicturePostRequest[] = response.data;
    return user;
  }

  async postUserRegister(body: { name: string; email: string ; password: string ;profile:string;role: number;}) {
    const url = HOST + `user/`;
    const response = await axios.post(url,body);
    const res = response.data
    console.log(res);
    
  }


  async getImgById(id: number) {
    const url = HOST + `img/uid/${id}`;
    const response = await axios.get(url);
    const img: PicturePostRequest[]  = response.data;
    return img;
  }

  async postImg(body: { name: string;Uid: number ; path: string ; }) {
    const url = HOST + `img/add`;
    const response = await axios.post(url,body);
    const res = response.data
    console.log(res);
    
  }

  ///vote
  async getAllVote() {
    const url = HOST + `vote`;
    const response = await axios.get(url);
    const vote : VoteGetRequest  = response.data;
    return vote;
  }
  
   async postVote(body: { score: number ; ImgID: number ; }) {
    const url = HOST + `vote/add`;
    const response = await axios.post(url,body);
    const res = response.data
    console.log(res);
    
  }

  
  async getVoteById(id: number) {
    const url = HOST + `vote/vote/${id}`;
    const response = await axios.get(url);
    const img: VoteGetRequest[]  = response.data;
    return img;
  }

  async putVoteById(body: { score: number},id: number) {
    
    const url = HOST + `vote/edit/${id}`;
    const response = await axios.put(url,body);
    const user: UsersGetRespose[] = response.data;
    return user;
  }



  //filebase

  async postPictureOnFireBase(file:FormData) {
    const url = HOST + `img/`;
    const response = await axios.post(url,file);
    const res = response.data
    console.log(res);
    return (res)
  }

  async getRangToday() {
    
    const url = HOST + `img/rankToday/get`;
    const response = await axios.get(url);
    const vote :  RangGetRespose[] = response.data;
    console.log(vote);
    return vote;
  }

  async getPictureRankingYesterday() {
    const url = HOST + `img/rankYesterday/get`;
    const response = await axios.get(url);
    const vote :  RangGetRespose[] = response.data;
    console.log(vote);
    return vote;
  }
  async getGraph(id: number) {
    const url = HOST + `img/Graph/${id}`;
    const response = await axios.get(url);
    const vote :  GraphGEtRespose[] = response.data;
    console.log(vote);
    return vote;
  }
}
