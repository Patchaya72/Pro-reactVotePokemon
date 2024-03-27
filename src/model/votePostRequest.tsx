      export interface VoteGetRequest {
        id:    number;
        score: number;
        date:  string;
        ImgID: number;
    }

    export interface ImageHome {
      expextation: number;
      picture: string;
      name: string;
      beforeScore: number;
      score: number;
      newScore: number;
    }