import React from 'react'


//INTERNAL IMPORT
import Style from '../styles/index.module.css'
import { HeroSection, Service, BigNFTSilder, Subscribe, Title, Category, Filter, NFTCard, Collection } from '../components/componentsindex'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="New Collections"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Collection />

      <Title
        heading="Featured NFTs"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Filter />
      <NFTCard />

      <Subscribe />
    </div>
  )
}

export default Home