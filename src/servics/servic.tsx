import axios from "axios";
import { UsersGetRespose } from "../model/UsersGetRespose";

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
    const url = HOST + `user/idx?id=${id}`;
    const response = await axios.get(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

   async putUserEdit(body: {  name: string | undefined; password: string| undefined ;profile:string; },id:number) {
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

  async getPictureById(id: number) {
    const url = HOST + `picture/${id}`;
    const response = await axios.get(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

  async putPictureById(id: number) {
    const url = HOST + `edit/${id}`;
    const response = await axios.put(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

  async postUserRegister(body: { name: string; email: string ; password: string ;profile:string;role: number;}) {
    const url = HOST + `user/`;
    const response = await axios.post(url,body);
    const res = response.data
    console.log(res);
    
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
