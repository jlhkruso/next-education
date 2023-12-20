declare namespace NewsList {
  export interface INews {
    createdDate: string;
    hero: Hero.IProps;
  }
  export interface INewsPages {
    newsPages: NewsList.INews[];
  }
}
