export const RTE = ({ htmlContent }: Global.IRawHtmlComponentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent.html }} />;
};
