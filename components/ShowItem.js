import { Media } from 'reactstrap'

const ShowItem = ({
  show: {
    image,
    name,
  },
}) => (
  <Media>
    {
      image && image.medium &&
      <Media left href="#">
        <Media className="show-preview" object src={image.medium} alt={name} />
      </Media>
    }
    <Media body>
      <Media heading>
        {name}
      </Media>
    </Media>
    <style jsx>{`
      :global(.show-preview) {
        max-width: 4rem;
        margin-right: 1rem;
      }
    `}</style>
  </Media>
)

export default ShowItem