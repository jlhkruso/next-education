declare namespace Global {
  // hero
  export interface IHero {
    hero: Global.IHero;
  }
  // RTE
  interface IHtml {
    html: string;
  }
  export interface IRawHtmlComponentProps {
    htmlContent: Global.IHtml;
  }
  export interface IImage {
    url: string;
    alt?: string;
  }
  // error
  export interface IError {
    error: string;
    reset?: function;
  }
  // settings
  export interface ISlug {
    slug: string;
    slugTitle: string;
  }
  export interface ISettings {
    setting: {
      logo: Global.IImage;
      navigation: Global.ISlug[];
    };
  }
}
