export interface VoteGetRequest{

        result: Result[];
    }
    
      export interface Result {
        id:    number;
        score: number;
        date:  string;
        ImgID: number;
    }