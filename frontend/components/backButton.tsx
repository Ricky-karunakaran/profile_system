function BackButton({ link }) {
  return (
    <>
      <a href={link} className="d-flex flex-row gap-2 hoverable btn">
        <i className="bi bi-arrow-left-circle "></i>
        Back
      </a>
    </>
  );
}
export default BackButton;
