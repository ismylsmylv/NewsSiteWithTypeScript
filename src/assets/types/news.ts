export interface IdNews {
  id: string;
  likes: number;
  dislikes: number;
  date: number;
  image: string;
  title: string;
  authors: [];
  views: string;
  text: string;
  topic: string;
  category: string;
}

export interface ConnectState {
  idNews: IdNews;
  news: IdNews[];
  backnews: IdNews[];
  loading: boolean;
  error: string;
}
