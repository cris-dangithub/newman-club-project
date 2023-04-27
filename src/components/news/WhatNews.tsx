import IconRudder from "../../assets/svg/IconRudder";
import { news } from "../../lib/mocks/news.mocks";
import CardNews from "./CardNews";
import "./WhatNews.css";

const WhatNews = () => {
  return (
    <article className="flex-col c-WhatNews">
      <div className="flex-col WhatNews__title-container">
        <IconRudder />
        <h2 className="font-red-hat-display--regular WhatNews__title">
          What's{" "}
          <span className="font-red-hat-display--bold WhatNews__title--bold">
            new
          </span>
        </h2>
      </div>
      <div className="flex-col WhatNews__container">
        {news.map((info) => (
          <CardNews key={info.id} info={info} />
        ))}
      </div>
      <div className="WhatNews__circle-background-container">
        <div className="WhatNews__circle-background"></div>
      </div>
      <button className="font-segoe--bold orange-btn">Find out more</button>
    </article>
  );
};

export default WhatNews;
