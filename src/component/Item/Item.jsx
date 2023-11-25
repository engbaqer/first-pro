import "./Item.css";
import info from "../info.json";
import Container from "../Container/Container";
const Item = () => {
  const data = info;
  return (
    <Container>
      <div className="grid">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="img">
              <img src={item.img} alt="iiii" />
            </div>
            <div className="content">
              <div>
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
              <h6>{item.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Item;
