export const CollectionSection = () => {
  return (
    <div
      id="collection"
      className="section section-collection container container--lg"
    >
      <div className="section-title">
        <span className="section-title__sub">New Collection</span>
        <h2 className="section-title__main">新作コレクション</h2>
      </div>
      <div className="item-list">
        <a className="item" href="###">
          <div className="item__media img-frame">
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="セラミックの花瓶"
            />
          </div>
          <div className="item__content">
            <h3 className="item__title">Ceramic Vase - 'Suna'</h3>
            <p className="item__text">Pottery / Japan</p>
          </div>
        </a>
        <a className="item" href="###">
          <div className="item__media img-frame">
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="上質なレザーの小物"
            />
          </div>
          <div className="item__content">
            <h3 className="item__title">Premium Leather Goods</h3>
            <p className="item__text">Leather Craft / Italy</p>
          </div>
        </a>
        <a className="item" href="###">
          <div className="item__media img-frame">
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="木製の椅子"
            />
          </div>
          <div className="item__content">
            <h3 className="item__title">Oak Dining Chair</h3>
            <p className="item__text">Furniture / Denmark</p>
          </div>
        </a>
      </div>
    </div>
  );
};
