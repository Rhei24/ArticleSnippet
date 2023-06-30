import React from "react";
// import SampleImage from "./SampleImage.jpg";
const Blog = () => {
  return (
    <div className="">
      {/* flex container*/}

      <div className="container d-flex flex-sm-column-reverse flex-md-row justify-content-md-center gap-4 mx-auto">
        {/* ! mobile responsive design not yet working corrently (no auto margin) */}
        {/* !! w-25 at medium screen, w-100 at smalll screen */}
        <div className="LEFTCONTENT h-100 w-25 d-flex flex-column gap-2 text-start">
          {/* !! Needs to be blue when active, temporarily set as bg-primary*/}

          <div className="border p-1 bg-primary d-flex">
            {/* separate left and right of prev. article */}

            <div className="border w-75">
              <span className="fw-semibold f-5">
                Foo Bar<br></br>
              </span>
              <span className="fw-light fs-6">
                Date published: June 28, 2023
              </span>
            </div>
            <div className="border w-25">
              {/* text should be centered to the parent div */}
              <p className="text-center">TEXT</p>
            </div>
            {/* "d-flex align-items-center justify-content-center border */}
          </div>

          <div className="border p-1">
            <span className="fw-semibold f-5">
              Article Title #2<br></br>
            </span>
            <span className="fw-light fs-6">Date published: </span>
          </div>
          <div className="border p-1">
            <span className="fw-semibold f-5">
              Article Title #3<br></br>
            </span>
            <span className="fw-light fs-6">Date published: </span>
          </div>
          <div className="border">asd</div>
          <div className="border">asd</div>
          <div className="border">asd</div>
          <div className="border">asd</div>
          <div className="border">asd</div>
        </div>
        <div className="RIGHTCONTENT w-75 border p-4">
          <h1 className="text-start">Foo Bar</h1>
          <p className="text-start fw-light">Date Published: June 28, 2023</p>
          <div className="d-flex flex-column justify-left">
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
    </div>
  );
};

export default Blog;
