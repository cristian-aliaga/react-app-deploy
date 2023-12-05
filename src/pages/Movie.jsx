import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data.json';

export const Movie = () => {
  return (
    <>
      {
        data.movies.map(movie => (
          <Card key={movie.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.year}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
}
