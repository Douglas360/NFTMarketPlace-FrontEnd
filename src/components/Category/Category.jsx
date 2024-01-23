import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
    //const CategoryArray = [1, 2, 3, 4, 5, 6];
    const CategoryArray = [
        {
            id: 1,
            title: "Music",
            titleInfo: "1995 NFT",
            image: images.creatorbackground1

        },
        {
            id: 2,
            title: "Entertainment",
            titleInfo: "1995 NFTS",
            image: images.creatorbackground2

        },
        {
            id: 3,
            title: "Music",
            titleInfo: "1995 NFT",
            image: images.creatorbackground3

        },
        {
            id: 4,
            title: "Entertainment",
            titleInfo: "1995 NFTS",
            image: images.creatorbackground4

        },
        {
            id: 5,
            title: "Music",
            titleInfo: "1995 NFT",
            image: images.creatorbackground5

        },
        {
            id: 6,
            title: "Entertainment",
            titleInfo: "1995 NFTS",
            image: images.creatorbackground6

        }
    ]
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
                {CategoryArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image
                            src={el.image}
                            className={Style.category_box_img}
                            alt="Background image"
                            width={350}
                            height={150}
                            objectFit="cover"
                        />

                        <div className={Style.category_box_title}>
                            <span>
                                <BsCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>{el.title}</h4>
                                <small>{el.titleInfo}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;