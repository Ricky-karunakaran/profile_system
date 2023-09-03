import backgroundImg from '@/public/assets/images/title-background-water.jpg';
function PageTitle({ title }) {
  return (
    <>
      <div className="title-img-container">
        <img className="title-img" src={backgroundImg.src}></img>
        <div className="page-title">
          <div>{title}</div>
          <div>{title}</div>
        </div>
      </div>
    </>
  );
}
export default PageTitle;
