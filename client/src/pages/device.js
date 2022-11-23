import '../styles/device.scss'

const Device = () => {
  const device = {"id":1,"name":"iPhone 12 Pro 256GB Graphite","price":72000,"rating":0,"img":"1c0b459e-b8e9-4285-8374-64e04c70989b.jpg","createdAt":"2022-11-12T16:40:46.466Z","updatedAt":"2022-11-12T16:40:46.466Z","typeId":2,"brandId":1}
  return (
    <section className="device">
      <img className="device__image" width='500' height='500' src={'http://localhost:5000/' + device.img} alt={device.name} />
      <h2 className="device__name">{device.name}</h2>
      <h3 className="device__price">{device.price}</h3>
      <button className="device__add-to-basket">Добавить в корзину</button>
      <p className="device__rating">{'Рейтинг: ' + device.rating}</p>
      <aside className="device__description">
        <h3 className="device__description--header">Описание</h3>
        <p className="device__description--content">{device.description}</p>
      </aside>
    </section>
  );
}

export default Device