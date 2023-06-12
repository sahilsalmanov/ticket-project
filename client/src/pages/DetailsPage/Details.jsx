import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './details.css';




function Details() {
  const event = {
    name: 'Etkinlik Adı',
    date: 'Etkinlik Tarihi',
    description: 'Etkinlik Açıklaması',
    ticketPrices: [
      { category: 'Kategori 1', price: '10 TL' },
      { category: 'Kategori 2', price: '20 TL' },
      { category: 'Kategori 3', price: '30 TL' },
    ],
    location: 'Etkinlik Yeri',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faz.wikipedia.org%2Fwiki%2F%25C5%259E%25C9%2599ki_xan_saray%25C4%25B1&psig=AOvVaw2sRyKJAu-IDHK-w5JOXK-0&ust=1686593683391000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCzwJ3pu_8CFQAAAAAdAAAAABAE',
  };





  return (
   <>
   <Nav/>
    <div className="event-details">
    <div className="event-info">
      <h2>{event.name}</h2>
      <p className="event-date">Tarih: {event.date}</p>
      <p className="event-description">Açıklama: {event.description}</p>
      <p>Price range</p>
      <div className="ticket-section">
        <p className="ticket-heading">Bilet Fiyatları:</p>
        <ul className="ticket-prices">
          {event.ticketPrices.map((ticket, index) => (
            <li key={index} className="ticket-item">
              <span className="ticket-category">{ticket.category}:</span>{' '}
              <span className="ticket-price">{ticket.price}</span>
            </li>
          ))}
        </ul>
      </div>
     <button> <p>Add to Favourites</p></button>
      <p className="event-location">Yer: {event.location}</p>
    </div>
    <div className="event-image">
    <img src={photo} alt="Logo" />;
    </div>
  </div>
  <Footer/>
   </>
);
};


export default Details;
