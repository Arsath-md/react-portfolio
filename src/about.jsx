// About Section Component
// Displays profile info, stats, and skill progress bars.

export default function About() {
  return (
    <>
      <div className="container m-5 p-5 mx-auto text-center">
        {/* Section Title */}
        <h1 className="m-5" id="About">About Me</h1>

        {/* Main Layout */}
        <div
          className="row justify-content-center align-items-center flex-wrap"
          id="about"
        >

          {/* Left Side — Profile Info */}
          <div className="col-12 col-md-6 text-center disp1">
            <img
              src="/logo192.png"
              alt="profile"
              className="h-0 w-25"
            />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est
              ratione sit minus, esse fuga quo at deleniti placeat qui in, odio
              illo sequi eveniet et repellendus voluptatibus dignissimos maxime!
            </h4>
          </div>

          {/* Right Side — Stats + Skills */}
          <div className="col-12 col-md-6 text-center d-flex justify-content-center">
            <div className="container">

              {/* Stats Row */}
              <div className="row">
                <div className="d-flex justify-content-center m-4 disp1">

                  {/* Single Stat Item */}
                  <div className="d-flex flex-column m-3">
                    <h1>3</h1>
                    <p>Projects</p>
                  </div>

                  <div className="d-flex flex-column m-3">
                    <h1>2</h1>
                    <p>Experience</p>
                  </div>

                  <div className="d-flex flex-column m-3">
                    <h1>1</h1>
                    <p>Clients</p>
                  </div>

                </div>
              </div>

              {/* Non-Technical Skills */}
              <div className="row text-center">
                <h1 className="m-3 disp1">Non-technical</h1>

                <div className="level text-center disp2">

                  {/* Skill: Communication */}
                  <h5>Communication</h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary w-50"
                      role="progressbar"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>

                  {/* Skill: English */}
                  <h5>English</h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary w-75"
                      role="progressbar"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>

                  {/* Skill: Team Work */}
                  <h5>Team Work</h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary w-25"
                      role="progressbar"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>

                  {/* Skill: Problem Solving */}
                  <h5>Problem Solving</h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary w-10"
                      role="progressbar"
                      aria-valuemax="100"
                    >
                      10%
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
