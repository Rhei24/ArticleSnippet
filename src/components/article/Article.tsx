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

        {/* limit of 10 articles */}
        <div className="left-content d-flex flex-column gap-2 text-start">
          {/* !! Needs to be blue when active, temporarily set as bg-primary*/}

          {/* Card */}
          <div className="shadow-lg p-2 d-flex flex-column">
            {/* separate left and right of prev. article */}
            <div>
              <span className="fw-semibold fs-5">Foo Bar </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-light">Date Published: June 28, 2023</span>
              <div className="rounded-pill bg-danger">
                <div className="bg-danger fw-bold px-2 py-1 text-white rounded-pill">
                  Advisory
                </div>
              </div>
            </div>
          </div>
          {/* Category */}
          {/* ! text should be centered to the parent div */}
          {/* -> temporarily flexing date published and category */}

          {/* "d-flex align-items-center justify-content-center border */}
          {/* Card End */}

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
              pains to avoid worse pains."
            </p>
          </div>
        </div>
      </div>
      {/* Testing Non-utility classes*/}

      {/* 
        ! card-body default class padding is too big, need utility class to make it smaller
        -> padding cannot utilize negative values
        Solved: App.css giving card extra padding
        ! need utility class that targets screen size; md:w-50, sm:w-100
        
        
        */}
      <div className="my-5 fs-6 fw-bold">
        TESTING DEFAULT CLASSES BOOTSTRAP transfer to pratice.tsx
      </div>
      {/* flex container */}
      <div className="d-flex container">
        {/* Left Content */}

        <div className="card w-50">
          <div className="card-body text-start">
            {/* inserted utility class for adding gap to header and body */}
            <div className="d-flex flex-column gap-4">
              <div className="Header">
                <h3 className="card-title">Foo</h3>
                <p className="card-subtitle fw-light">
                  Date published: June 28, 2023
                </p>
              </div>
              <div className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Content */}
    </div>
  );
};

export default Article;
