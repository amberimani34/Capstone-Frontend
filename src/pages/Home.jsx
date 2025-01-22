import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router";

function Home(props) {
  return (
    <>
      <div>
        <div className="top-background">
          {/* Content over the background image */}
          <h1 style={{ color: "black" }}>
            Imani Carolyn Organization & Design
          </h1>
        </div>
      </div>
      <div className="designer">
        <img
          className="headshot"
          src="https://media.licdn.com/dms/image/v2/D4D03AQF3ZwQSAiSLzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730298075618?e=1743033600&v=beta&t=CArWgRMPA4Jg6ykEbJTGzc2PU-F16I8t8dQzsILSq-Q"
          alt="photo of me"
        />
        <div className="text">
          <h1 className="heading1">About The Designer</h1>
          <p>
            My name is Amber Roberts, and while I love all things art &
            creativity, my passion is in Interior Design & Organization. I have
            been doing this for 5 years and love every single project I do big
            and small. Every project I take on is an opportunity to combine my
            design expertise with my organizational skills to curate a space
            that balances beauty, comfort, and efficiency. I strive to
            understand each client's vision and bring it to life in a way that
            reflects their style and meets their functional needs. I'm always
            excited to take on new projects and collaborate with people who
            value good design and organized living. If you're looking for a
            fresh perspective on your space, feel free to reach out—I would love
            to work with you!
          </p>
        </div>
      </div>
      <h1 className="testimonial">Testimonials</h1>
      <Carousel />
      <div className="designer">
        <img
          className="business"
          src="https://images.pexels.com/photos/7045846/pexels-photo-7045846.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div>
          <Link to="/services">
            <div>
              <h1>About The Business</h1>
            </div>
          </Link>
          <p>
            Imani Carolyn Organization & Design is a small business known for
            Interior Design, Organization, and Home Staging. I have completed a
            number of successful projects over the span of 5 years with happy
            clients in both Dallas, TX and New Orleans, LA. All services include
            a free consultation which can be booked on the Book Here page. If
            you click the About the Business title, you can also get to our
            services page which shows completed project images as well as
            pricing per room. If you need something that is more custom or not
            listed, please feel free to send me an email or book your free
            consultation in which we can discuss pricing upon viewing of the
            space. I do travel to you to be sure I can take photos,
            measurements, and see firsthand what it is you are needing; which
            also helps me quote potential total hours/cost. I love what I do and
            would love to tackle any home project for you!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
