declare namespace Hero {
  export interface IProps {
    heroTitle: string;
    heroBodytext: Global.IHtml;
    heroImage: {
      image: Global.IImage;
      alt: string;
    };
  }
  export interface IData {
    data: Hero.IProps;
  }
}
