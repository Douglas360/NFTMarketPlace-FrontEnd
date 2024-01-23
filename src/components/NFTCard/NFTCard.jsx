import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
    //const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const featureArray = [
        {
            id: 1,
            image: images.nft_image_1,
            like: 99,
            remainingTime: "3h : 15m : 20s",
            title: "Crypto#17373",
            currentBid: "1.000ETH",
            inStock: 6
        },
        {
            id: 2,
            image: images.nft_image_2,
            like: 6,
            remainingTime: "2h : 15m : 20s",
            title: "Digital#17373",
            currentBid: "1.000ETH",
            inStock: 19
        },
        {
            id: 3,
            image: images.nft_image_3,
            like: 256,
            remainingTime: "1h : 15m : 20s",
            title: "Pixel#17373",
            currentBid: "1.000ETH",
            inStock: 1
        }
    ]

    const [likes, setLikes] = useState(featureArray.map(() => false));

    const likeNft = (index) => {
        setLikes((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    return (
        <div className={Style.NFTCard}>
            {featureArray.map((el, i) => (
                <div className={Style.NFTCard_box} key={i + 1}>
                    <div className={Style.NFTCard_box_img}>
                        <Image
                            src={el.image}
                            alt="NFT images"
                            width={600}
                            height={600}
                            className={Style.NFTCard_box_img_img}
                        />
                    </div>

                    <div className={Style.NFTCard_box_update}>
                        <div className={Style.NFTCard_box_update_left}>
                            <div
                                className={Style.NFTCard_box_update_left_like}
                                onClick={() => likeNft(i)}
                            >
                                {likes[i] ? (
                                    <AiFillHeart
                                        className={Style.NFTCard_box_update_left_like_icon}
                                    />
                                ) : (
                                    <AiOutlineHeart />

                                )}
                                {""} {el.like}
                            </div>
                        </div>

                        <div className={Style.NFTCard_box_update_right}>
                            <div className={Style.NFTCard_box_update_right_info}>
                                <small>Remaining time</small>
                                <p>{el.remainingTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className={Style.NFTCard_box_update_details}>
                        <div className={Style.NFTCard_box_update_details_price}>
                            <div className={Style.NFTCard_box_update_details_price_box}>
                                <h4>{el.title}</h4>

                                <div className={Style.NFTCard_box_update_details_price_box_box}>
                                    <div
                                        className={Style.NFTCard_box_update_details_price_box_bid}
                                    >
                                        <small>Current Bid</small>
                                        <p>{el.currentBid}</p>
                                    </div>
                                    <div
                                        className={Style.NFTCard_box_update_details_price_box_stock}
                                    >
                                        <small>In stock: {el.inStock}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.NFTCard_box_update_details_category}>
                            <BsImages />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NFTCard;