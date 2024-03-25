import axios from "axios";
import { UsersGetRespose } from "../model/UsersGetRespose";
import { PicturePostRequest } from "../model/picturePostRequest";
import { VoteGetRequest } from "../model/votePostRequest";

// eslint-disable-next-line react-refresh/only-export-components
const HOST: string = "http://localhost:3000/"; 

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
    const url = HOST + `picture/${id}`;
    const response = await axios.get(url);
    const user: PicturePostRequest[] = response.data; 
    return user;
  }

  async putPictureById(id: number) {
    const url = HOST + `edit/${id}`;
    const response = await axios.put(url);
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

  async postImg(body: { score: number;date: string ; ImgID: number ; }) {
    const url = HOST + `vote/add`;
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
    const url = HOST + `img/add`;
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
    const response = await axios.put(url);
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
  
}
