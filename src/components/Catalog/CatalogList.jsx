import React, { memo } from "react";
import CatalogItem from "./CatalogItem";
import { NavLink } from "react-router-dom";
import catalogImgFirst from "/src/assets/mebel.jpg";
import catalogImgSecond from "/src/assets/aksesuar.jpg";
import catalogImgThird from "/src/assets/xraneniya-podarok.jpg";
import catalogImgFourth from "/src/assets/aksesuari.png";
import catalogImgFifth from "/src/assets/mebel-2.jpg";
import catalogImgSixth from "/src/assets/aksesuar-2.svg";
import catalogImgSeventh from "/src/assets/xraneniya-podarok-2.jpg";
import catalogImgEighth from "/src/assets/aksesuari-2.jpg";

const CatalogList = () => {
  const catalogInfo = [
    {
      id: 1,
      image: catalogImgFirst,
      title: "Мебель",
      texts: [
        "Шкафы и шкафы-купе",
        "Стеллажи и книжные шкафы",
        "Столы",
        "Стулья",
        "Кровати",
      ],
      more: "Больше",
    },

    {
      id: 2,
      image: catalogImgSecond,
      title: "Аксессуары для создания уюта",
      texts: [
        "Постельное белье",
        "Одеяла",
        "Комплекты постельного белья",
        "Подушки",
        "Пледы",
      ],
      more: "Больше",
    },

    {
      id: 3,
      image: catalogImgThird,
      title: "Хранение и порядок",
      texts: [
        "Аксессуары для хранения",
        "Крючки и полки на стену обувницы, полки с крючками для хранения",
        "Вешалки, обувницы, полки с крючками для хранения",
        "Системы для хранения",
        "Шкафы и шкафы-купе",
      ],
      more: "Больше",
    },

    {
      id: 4,
      image: catalogImgFourth,
      title: "Аксессуары",
      texts: [
        "Шкафы и шкафы-купе",
        "Стеллажи и книжные шкафы",
        "Столы",
        "Стулья",
        "Кровати",
      ],
      more: "Больше",
    },

    {
      id: 5,
      image: catalogImgFifth,
      title: "Мебель",
      texts: [
        "Шкафы и шкафы-купе",
        "Стеллажи и книжные шкафы",
        "Столы",
        "Стулья",
        "Кровати",
      ],
      more: "Больше",
    },

    {
      id: 6,
      image: catalogImgSixth,
      title: "Аксессуары для создания уюта",
      texts: [
        "Постельное белье",
        "Одеяла",
        "Комплекты постельного белья",
        "Подушки",
        "Пледы",
      ],
      more: "Больше",
    },

    {
      id: 7,
      image: catalogImgSeventh,
      title: "Хранение и порядок",
      texts: [
        "Аксессуары для хранения",
        "Крючки и полки на стену обувницы, полки с крючками для хранения",
        "Вешалки, обувницы, полки с крючками для хранения",
        "Системы для хранения",
        "Шкафы и шкафы-купе",
      ],
      more: "Больше",
    },

    {
      id: 8,
      image: catalogImgEighth,
      title: "Аксессуары",
      texts: [
        "Шкафы и шкафы-купе",
        "Стеллажи и книжные шкафы",
        "Столы",
        "Стулья",
        "Кровати",
      ],
      more: "Больше",
    },
  ];
  return (
    <div className="container py-[70px]">
      <h2 className="text-4xl font-jost font-bold mb-10">Каталог</h2>

      <div className="grid grid-cols-4 gap-[24px] gap-y-[53px]">
        {catalogInfo?.map(({ id, image, title, texts, more }) => (
          <CatalogItem
            key={id}
            image={image}
            title={title}
            texts={texts?.map((text) => (
              <NavLink to={"#"} key={text}>
                {text}
              </NavLink>
            ))}
            more={more}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(CatalogList);
