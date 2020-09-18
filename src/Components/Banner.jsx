import React from "react";
import "../css/banner.css";
import Products from "../Components/Prodcuts";
import { useStateValue } from "./StateProvider";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img
          className="bannerimg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="BannerImage"
        />

        <div className="firstrow">
          <Products
            id="f1"
            title="Avatar: The Last Airbender The Search Nickelodeon Avatar Collection Comics Books Kids Boys Girls Adult Women Men Fan"
            rating={5}
            price={27.90}
            image="https://m.media-amazon.com/images/I/81IkL0caijL._AC_UL320_.jpg"

          />
          <Products
            id="f2"
            title="Nespresso De'Longhi Inissia EN80.B - Cafetera monodosis de cápsulas Nespresso, 19 bares, apagado automático, color negro"
            rating={4}
            price={342.29}
            image="https://m.media-amazon.com/images/I/712Dc2egINL._AC_UL320_.jpg"
          />
        </div>

        <div className="firstrow" id="secondrow">
          <Products
            id="f3"
            title="Apple - MacBook 12 All-in-One Desktop PC 1.1 GHz, 256 SSD, 8 GB RAM, Intel Plateado"
            rating={5}
            price={1449.59}
            image="https://m.media-amazon.com/images/I/51KW22wO9AL._AC_UL320_.jpg"
          />
          <Products
            id="f4"
            title="ELEGIANT SmartWatch, Reloj Inteligente IP68 con Pantalla Táctil de 1.3'', Pulsera Actividad Inteligente Hombre Mujer Niños para Deporte, Monitor de Actividades, Podómetro Cronómetros para iOS Android"
            rating={5}
            price={30.99}
            image="https://m.media-amazon.com/images/I/818lPnuHL8L._AC_UL320_.jpg"
          />
          <Products
            id="f5"
            title="Samsung Galaxy A70 (128gb, Dual-SIM, pantalla de 6.7  Full HD + Dynamic AMOLED, 4500 MaH), color negro [Versión española]"
            rating={5}
            price={320.45}
            image="https://m.media-amazon.com/images/I/51t1758MlFL._AC_UL320_.jpg"
          />
        </div>

        <div className="firstrow tv">
        <Products
            id="f6"
            title="LG 65UH770V - TV de 65 LED, Super UHD 4K 3840 x 2160, Smart TV webOS 3.0, WiFi, HDMI, USB, Bluetooth Metalizado"
            rating={5}
            price={2157.7}
            image="https://m.media-amazon.com/images/I/51b6kQUe5KL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
