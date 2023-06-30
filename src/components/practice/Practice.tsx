const Practice = () => {
  return (
    <div>
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
    </div>
  );
};

export default Practice;
