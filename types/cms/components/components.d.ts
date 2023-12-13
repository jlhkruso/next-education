declare namespace Components {
  export interface IText {
    html: string;
  }
  export interface IHero {
    heroTitle: string;
    heroBodytext: Components.IText;
    heroImage: string;
  }
}
