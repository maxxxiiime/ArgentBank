import React from "react";
import Banner from "../../components/Banner/Banner";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Chat from "../../assets/img/icon-chat.webp";
import Money from "../../assets/img/icon-money.webp";
import Security from "../../assets/img/icon-security.webp";
import "./home.scss";

export default function Home() {



  return (
    <main>
        <Banner />
        <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem
                    image={Chat}
                    altText="Chat-Icon"
                    title="You are our #1 priority"
                    description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <FeatureItem
                    image={Money}
                    altText="Money"
                    title="More savings means higher rates"
                    description="The more you save with us, the higher your interest rate will be!" />
                <FeatureItem
                    image={Security}
                    altText="Security"
                    title="Security you can trust"
                    description="We use top of the line encryption to make sure your data and money is always safe." />
            </section>

    </main>
  )
}