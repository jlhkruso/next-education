declare namespace Global {
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
}
