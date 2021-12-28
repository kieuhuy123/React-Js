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
              {/* <div className="item-number smal">{f.rate}</div> */}
            </Link>
            <Link
              to={"/film/" + f.alias}
              className="item-block-title in-nav w-inline-block"
            >
              <div className="item-block-title in-nav">{f.title}</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewFilmList;
