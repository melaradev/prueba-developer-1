import React, { useEffect } from "react";
import './styles/DiscountSection.css'
import {useHomePageContent} from "../../hooks/useHomePage"
const DiscountSection = () => {
    const {fetchGeo} = useHomePageContent()

    useEffect(() => {
        fetchGeo()
    }, [])
  return <div className="container discount">

  </div>;
};

export default DiscountSection;
