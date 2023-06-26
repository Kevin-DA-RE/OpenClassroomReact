import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water }) {
  function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨');
  }

  return (
    <div>
      <li key={id} className="lmj-plant-item" onClick={handleClick}>
        <img
          src={cover}
          className="lmj-plant-item-cover"
          alt={`${name} cover`}
        />
        {name}
        <div>
          <CareScale careType='light' scaleValue={light} />
          <CareScale careType='water'  scaleValue={water} />
        </div>
      </li>
    </div>
  );
}

export default PlantItem;
