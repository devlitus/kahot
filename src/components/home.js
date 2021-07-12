import "./home.css";
import {Link} from 'react-router-dom';
import quiz from "../images/undraw_Questions_re_1fy7.svg";

export const Home = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Kahoot !!!!</h1>
      <Link to="/quiz">
      <div className="card">
        <img className="card-image" src={quiz} alt="quiz" />
        <div className="card-body">
          <p>Noves Preguntes</p>
        </div>
      </div>
      </Link>
    </div>
  );
};
