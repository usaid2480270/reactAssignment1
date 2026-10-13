function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="portal-breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Students</a></li>
        <li className="breadcrumb-item active" aria-current="page">Directory</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
