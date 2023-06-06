export interface ImdbResponse {
  d: Array<ImdbType>;
}

export interface ImdbType {
  i: Array<String>
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
