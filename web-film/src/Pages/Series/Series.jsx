// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import { getMovieByType } from "../../db/NewFilm";
// import FilmList from "../../Components/FilmList";

// const Series = () => {
//   const param = useParams();
//   console.log(param);
//   const series = getMovieByType(param.type);
//   console.log(series);

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div className="section-title-wrapper">
//             <h1 className="section-title">Phim bo</h1>
//           </div>
//           <div className="tabs">
            
//             <div className="tabs-content">
//               <FilmList film={series} />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Series;
