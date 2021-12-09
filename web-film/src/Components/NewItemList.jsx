import { Link } from "react-router-dom";

const NewFilmList = ({ film }) => {
  return (
    <div className="new-item-list">
      {film.map((f) => (
        <div className="new-item" key={f.id}>
          <div className="new-item-block">
            <Link
              to={"/film/" + f.alias}
              className="small-item-block-img"
              style={{ backgroundImage: `url(${f.image})` }}
            >
              <div className="item-number smal">{f.rate}</div>
            </Link>
            <Link
              to={"/film/" + f.alias}
              className="item-block-title in-nav w-inline-block"
            >
              <div className="item-block-title in-nav">{f.title}</div>
            </Link>
            <img
              src="//static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa647a78a1222c_4-sao.png"
              alt=""
              className="info-block-icon stars"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewFilmList;
