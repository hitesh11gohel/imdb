export interface ImdbResponse {
  d: Array<ImdbType>;
}

export interface ImdbType {
  i: {
    height: Number;
    imageUrl: string;
    width: Number;
  };
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: Number;
  s: string;
  y: Number;
}

export type HeaderPropType = {
  handleResponse: (response: ImdbResponse) => void;
};
