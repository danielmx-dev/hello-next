import Link from 'next/link';
import { Badge, Container, Row, Col } from 'reactstrap'

const ShowDetail =  ({
  show: {
    name,
    summary,
    image,
    genres,
  }
}) => (
  <Container>
    <h1>{name}</h1>
    <Row>
      <Col>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </Col>
      <Col>
        <img src={image.medium}/>

        <div className='details'>
          {genres.map(genre => (
            <Link as={`/genre/${genre}`} href={`/genre?genre=${genre}`}>
              <a className='genre'><Badge>{genre}</Badge></a>
            </Link>
          ))}
        </div>
      </Col>
    </Row>
    <style jsx>{`
      img {
        float: right;
      }
      .genre {
        margin-right: 1rem;
      }
    `}</style>
  </Container>
)

export default ShowDetail