const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <span>
        <p>
          Welcome to our website, where you can easily enroll in classes and
          manage your course load. Our platform allows you to browse through a
          wide range of classes and register for the ones that interest you.
          Once you've enrolled, you can view all of the classes you're currently
          taking and track your progress towards graduation.
        </p>
        <p>
          But that's not all - our website also features a community aspect
          where you can leave comments on classes you've taken, providing
          valuable feedback for other users. With our user-friendly interface,
          you can manage your schedule, track your progress, and engage with
          other learners all in one place.
        </p>
        <p>
          Whether you're looking to broaden your horizons, gain new skills, or
          pursue a degree, our website makes it easy and convenient to achieve
          your educational goals. So why wait? Sign up today and start exploring
          the world of learning!
        </p>
        <p>
          Thank you for visiting our website, and we hope that you find the
          information here helpful in planning your education!
        </p>
      </span>
      <div className="about-us">
        <div className="liz-profile">
          <img
            className="liz"
            src={'https://imagizer.imageshack.com/img922/9600/ytDtvZ.jpg'}
            alt=""
          />
          <a
            className="liz-git"
            href="https://github.com/martinsliz"
            target="blank"
          >
            <img
              className="github"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/AjmoOeq.png"
              alt="github"
            />
          </a>
          <a
            className="liz-linkedIn"
            href="https://www.linkedin.com/in/elizmartins/"
            target="blank"
          >
            <img
              className="linkedIn"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/N4ceP5A.png"
              alt="linkedIn"
            />
          </a>
        </div>
        <div className="ting-ting-profile">
          <img
            className="ting-ting"
            src={'https://i.imgur.com/otWjrs9.jpg'}
            alt=""
          />
          <a
            className="ting-ting-git"
            href="https://github.com/ttqiu"
            target="blank"
          >
            <img
              className="github"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/AjmoOeq.png"
              alt="github"
            />
          </a>
          <a
            className="ting-ting-linkedIn"
            href="https://www.linkedin.com/in/ting-ting-qiu-062587246/"
            target="blank"
          >
            <img
              className="linkedIn"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/N4ceP5A.png"
              alt="linkedIn"
            />
          </a>
        </div>
        <div className="will-profile">
          <img
            className="will"
            src={'https://imagizer.imageshack.com/img923/4145/AaH38A.jpg'}
            alt=""
          />
          <a
            className="will-git"
            href="https://github.com/wszeto11"
            target="blank"
          >
            <img
              className="github"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/AjmoOeq.png"
              alt="github"
            />
          </a>
          <a
            className="will-linkedIn"
            href="https://www.linkedin.com/in/will-szeto-a449b021a/"
            target="blank"
          >
            <img
              className="linkedIn"
              style={{ width: 30, height: 30 }}
              src="https://i.imgur.com/N4ceP5A.png"
              alt="linkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
