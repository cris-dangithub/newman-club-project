import { FC } from "react";
import "./CardNews.css";
import { INews } from "../../lib/interfaces/news.interface";
import getTimeFormated from "../../lib/utils/getTimeFormated";

interface ICardNews {
  info: INews;
}

const CardNews: FC<ICardNews> = ({ info }) => {
  const { dateShortDDMY } = getTimeFormated(info.date);
  return (
    <section className="flex-col font-poppins c-CardNews">
      <img className="CardNews__background" src={info.img} alt="" />
      <div className="overlay overlay--deg"></div>
      <div className="flex-col CardNews__date-container">
        <span className="CardNews__date CardNews__date--day">
          {dateShortDDMY.day}
        </span>
        <span className="CardNews__date">{dateShortDDMY.monthShort}</span>
        <span className="CardNews__date">{dateShortDDMY.year}</span>
      </div>
      <span className="CardNews__autor">{info.autor}</span>
      <h3 className="CardNews__name-new">{info.name}</h3>
      <section className="flex-col CardNews__description-container">
        <p className="CardNews__description">{info.description}</p>
        <button className="font-arimo--bold CardNews__btn">SEE MORE</button>
      </section>
    </section>
  );
};

export default CardNews;
