import "./page-footer.css";

function PageFooter() {
  const year = new Date().getFullYear();
  return <footer className="page-footer">© Brendan Lienau, {year}</footer>;
}

export default PageFooter;
