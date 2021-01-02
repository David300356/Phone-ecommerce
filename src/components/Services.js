import React, { Component } from "react";
import Title from "./Title";
import {FaHeadphones,FaSimCard,FaChargingStation,FaPhone} from 'react-icons/fa'
export default class Services extends Component {
  state = {
    services: [
      {
        icon:<FaHeadphones/>,
        title: "Free HeadPhones",
        info:
          "Shop at our store to get free headphones without Extra charges..."
      },
      {
        icon:<FaSimCard/>,
        title: "Free SimCards",
        info:
          "Get dual sim cards which have longer lifespan,use across all networks..."
      },
      {
        icon:<FaChargingStation/>,
        title: "Charging Station",
        info:
          "Charge your phone in munites with our fast charging systems...."
      },
      {
        icon:<FaPhone/>,
        title: "Customer Care",
        info:
          "Our 24/7 customer care servises can save you a lot of time...."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
