import Card from "react-bootstrap/Card";
/* 
    ArticlePage figma shared link:
    https://www.figma.com/file/Ju1E4eWuHziXSsoZNzkHDo/Announcement--%3E-Article-Page?type=design&node-id=0%3A1&mode=design&t=jgW3WcRLnOYG64K6-1
*/

/* 
         !! whole card body should be a clickable link to the article page 
         !! wrong color, circle-bg-color should be dark pink and horizontal-bg-color should be light pink
         !! no rounded-l-lg for horizontal-bg-color, circle-bg-color cant be circular as it will show horizontal on the left side
*/

function Home() {
  return (
    <Card style={{ width: "30rem" }} className="gap-4">
      <h1 className="fw-bold">Announcement</h1>
      {/* Article #1 */}
      <Card.Body className="container d-grid gap-1 shadow-lg">
        {/* horizontal background color */}
        <div className="rounded-start bg-info">
          {/* flex article number and title*/}
          <div className="d-flex gap-2">
            {/* circle background color*/}
            <div className="rounded-start bg-primary p-2">
              <span className="p-1 fw-bold">1</span>
            </div>
            <Card.Title className="p-1 text-uppercase fw-bold">
              Article Title #1
            </Card.Title>
          </div>
        </div>
        <Card.Text className="text-muted text-start fs-6">
          The first lines of the article should be displayed here upto a maximum
          of 2 lines then succeeding words will be replaced by an ellipsis ...
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href="#" className="text-start">
            See More
          </Card.Link>
          {/* Type of Article */}
          <div className="bg-success fw-bold p-2 text-white rounded-pill">
            Extra-Curricular
          </div>
        </div>
      </Card.Body>
      {/* Article #2 */}
      <Card.Body className="container d-grid gap-1 shadow-lg">
        {/* horizontal background color */}
        <div className="rounded-start bg-info">
          {/* flex article number and title*/}
          <div className="d-flex gap-2">
            {/* circle background color*/}
            <div className="rounded-start bg-primary p-2">
              <span className="p-1 fw-bold">2</span>
            </div>
            <Card.Title className="p-1 text-uppercase fw-bold">
              Article Title #2
            </Card.Title>
          </div>
        </div>
        <Card.Text className="text-muted text-start fs-6">
          The first lines of the article should be displayed here upto a maximum
          of 2 lines then succeeding words will be replaced by an ellipsis ...
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href="#" className="text-start">
            See More
          </Card.Link>
          {/* Type of Article */}
          <div className="bg-danger fw-bold p-2 text-white rounded-pill">
            Advisory
          </div>
        </div>
      </Card.Body>
      {/* Article #3 */}
      <Card.Body className="container d-grid gap-1 shadow-lg">
        {/* horizontal background color */}
        <div className="rounded-start bg-info">
          {/* flex article number and title*/}
          <div className="d-flex gap-2">
            {/* circle background color*/}
            <div className="rounded-start bg-primary p-2">
              <span className="p-1 fw-bold">3</span>
            </div>
            <Card.Title className="p-1 text-uppercase fw-bold">
              Article Title #3
            </Card.Title>
          </div>
        </div>
        <Card.Text className="text-muted text-start fs-6">
          The first lines of the article should be displayed here upto a maximum
          of 2 lines then succeeding words will be replaced by an ellipsis ...
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href="#" className="text-start">
            See More
          </Card.Link>
          {/* Type of Article */}
          <div className="bg-success fw-bold p-2 text-white rounded-pill">
            Events
          </div>
        </div>
      </Card.Body>
      {/* Article #4 */}
      <Card.Body className="container d-grid gap-1 shadow-lg">
        {/* horizontal background color */}
        <div className="rounded-start bg-info">
          {/* flex article number and title*/}
          <div className="d-flex gap-2">
            {/* circle background color*/}
            <div className="rounded-start bg-primary p-2">
              <span className="p-1 fw-bold">4</span>
            </div>
            <Card.Title className="p-1 text-uppercase fw-bold">
              Article Title #4
            </Card.Title>
          </div>
        </div>
        <Card.Text className="text-muted text-start fs-6">
          The first lines of the article should be displayed here upto a maximum
          of 2 lines then succeeding words will be replaced by an ellipsis ...
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href="#" className="text-start">
            See More
          </Card.Link>
          {/* Type of Article */}
          <div className="bg-warning fw-bold p-2 text-white rounded-pill">
            Seminar - ICT
          </div>
        </div>
      </Card.Body>
      {/* Article #5 */}
      <Card.Body className="container d-grid gap-1 shadow-lg">
        {/* horizontal background color */}
        <div className="rounded-start bg-info">
          {/* flex article number and title*/}
          <div className="d-flex gap-2">
            {/* circle background color*/}
            <div className="rounded-start bg-primary p-2">
              <span className="p-1 fw-bold">5</span>
            </div>
            <Card.Title className="p-1 text-uppercase fw-bold">
              Article Title #5
            </Card.Title>
          </div>
        </div>
        <Card.Text className="text-muted text-start fs-6">
          The first lines of the article should be displayed here upto a maximum
          of 2 lines then succeeding words will be replaced by an ellipsis ...
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Link href="#" className="text-start">
            See More
          </Card.Link>
          {/* Type of Article */}
          <div className="bg-warning fw-bold p-2 text-white rounded-pill">
            Seminar - HR
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Home;
