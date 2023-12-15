declare namespace NewsList {
  export interface INews {
    createdDate: string;
    hero: Components.IHero;
  }
  export interface INewsPages {
    newsPages: NewsList.INews[];
  }
}
