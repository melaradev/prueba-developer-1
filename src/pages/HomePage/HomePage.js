import React, { useEffect } from "react";
import Header from "../../Components/Header/Header"
import Body from "../../Components/Body/BodySection"
import DiscountSection from './components/DiscountSection/DiscountSection'
import SubscribeForm from './components/SubscribeForm/SubscribeForm'
import {useHomePageContent} from "./hooks/useHomePage"
const HomePage = () => {
    const {contentData, fetchContent} = useHomePageContent()
    useEffect(() => {
        fetchContent()
    }, [])
    return (
        <>
        <Header/>
        <Body/>
        <DiscountSection />
        <SubscribeForm data={contentData} />
        </>
        
    )
}

export default HomePage