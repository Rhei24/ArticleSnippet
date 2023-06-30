import "./Article.css";

// import SampleImage from "./SampleImage.jpg";

/* 


  */

const Article = () => {
  return (
    /* put container class here when running as main page */
    <div className="">
      {/* flex container*/}
      <div className="d-flex flex-sm-column-reverse flex-md-row justify-content-md-center gap-4">
        {/* ! mobile responsive design not yet working corrently (no auto margin) */}
        {/* !! w-25 at medium screen, w-100 at smalll screen */}

        {/* limit of 10 articles for simplicity, succeeding older ones will be available inside the Article Archive */}
        <div className="left-content d-flex flex-column text-start gap-3">
          {/* !! Needs to be blue when active, temporarily set as bg-primary*/}

          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #1</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: June 28, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}

          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #2</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: June 10, 2023</span>
              <div className="bg-danger fw-bold px-2 py-1 text-white rounded-pill">
                Advisory
              </div>
            </div>
          </div>
          {/* Card End */}

          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #3</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: May 28, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Events
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #4</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: May 10, 2023</span>
              <div className="bg-warning fw-bold px-2 py-1 text-white rounded-pill">
                Seminar - ICT
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">
                Article Title that is very long that will go to the next line #5
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: April 28, 2023</span>
              <div className="bg-warning fw-bold px-2 py-1 text-white rounded-pill">
                Seminar - HR
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #6</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: March 7, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #7</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: March 6, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #8</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: March 5, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #9</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: March 4, 2023</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}
          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column rounded">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Article Title #10</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: March 3, 2022</span>
              <div className="bg-success fw-bold px-2 py-1 text-white rounded-pill">
                Extra-Curricular
              </div>
            </div>
          </div>
          {/* Card End */}

          {/* "d-flex align-items-center justify-content-center border */}

          {/* Link to Article Archive */}
          <a href="/" className="text-decoration-none">
            See more Article Archive
          </a>
        </div>
        <div className="right-content shadow-lg p-3">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h1 className="">Foo Bar</h1>
            <span className="fw-light">Date Published: June 28, 2023</span>
          </div>
          <div className="d-flex flex-column justify-left gap-3">
            <img
              src="public/SampleImage.jpg"
              alt="ArticleImage"
              className="h-50 w-100"
            />
            {/* put indention for every separate paragraph */}
            <p className="text-start">
              "On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains." "On the other hand, we denounce with
              righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by
              desire, that they cannot foresee the pain and trouble that are
              bound to ensue; and equal blame belongs to those who fail in their
              duty through weakness of will, which is the same as saying through
              shrinking from toil and pain. These cases are perfectly simple and
              easy to distinguish. In a free hour, when our power of choice is
              untrammelled and when nothing prevents our being able to do what
              we like best, every pleasure is to be welcomed and every pain
              avoided. But in certain circumstances and owing to the claims of
              duty or the obligations of business it will frequently occur that
              pleasures have to be repudiated and annoyances accepted. The wise
              man therefore always holds in these matters to this principle of
              selection: he rejects pleasures to secure other greater pleasures,
              or else he endures pains to avoid worse pains."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
