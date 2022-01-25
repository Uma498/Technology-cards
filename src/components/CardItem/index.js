// Write your code here.
import './index.css'
const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imgUrl, className} = cardsDetails

  return (
    <li className={`${className} card-container`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
