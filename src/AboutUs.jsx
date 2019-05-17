import React, { Component } from "react";
import "./style.css";
import bgImg from "./assets/01.jpg";
import imgWoodWall from "./img/05.jpg";
import imgGroup1 from "./assets/10.jpg";
import imgGroup2 from "./assets/11.jpg";
import imgPool from "./img/pool.jpg";
import img13 from "./img/13.jpg";
class AboutUs extends Component {
  render() {
    return (
      <div className="main_content">
        <div className="flex flex-col md:flex-row py-16 max-w-5xl mx-auto">
          <div className="w-1/2 text-left md:text-center text-2xl font-semibold pt-8 p-text-def">
            VILLA ANUGRAHA
          </div>
          <div className="w-1/2 text-left w-full my-2 py-4 max-w-2xl">
            <p className="p-text-def text-xl font-normal">
              A private residence, Anugraha is an ode to slow living, good
              design and the natural splendors of Kerala—that place they call
              ‘God’s Own Country’. The Villa at the heart of the estate is a
              classic Keralan building, constructed more than a century ago. It
              was restored under the direction of architect Bijoy Jain of Studio
              Mumbai and styled with contemporary art from the homeowner’s
              private collection, and an edit of design objects.
              <br />
            </p>
          </div>
        </div>
        <div className="h-300px cover">
          <img src={bgImg} />
        </div>
        <div className="pt-10">
          <img src={imgWoodWall} />
        </div>
        <div className="flex flex-col md:flex-row py-16 max-w-5xl mx-auto">
          <div className="w-1/2 text-left md:text-center text-2xl font-semibold pt-8 p-text-def">
            THE HOME
          </div>
          <div className="w-1/2 text-left w-full my-2 py-4 max-w-2xl">
            <p className="p-text-def text-xl font-normal">
              This home has a living room, master bedroom, plus a spacious
              attic, with a double bed, plus two single beds. Outfitted with all
              necessary modcons, the Villa is perfectly suited for a couple, a
              family of four or six, or a party of six. Guests will be served
              homecooked Keralan meals and attended by a member of the house
              staff. However, guests who wish to cook occasionally may use the
              Villa’s well-appointed kitchen. Most of the ingredients come from
              the organic kitchen garden, and from around the village where
              Anugraha is located. The property has a swimming pool that is
              suitable for adults and children. It is located within a pool
              house that also contains a fully- equipped gym, changing rooms,
              shower, and massage room.
              <br />
            </p>
          </div>
        </div>
        <div className="text-left w-full">
          <div className="flex justify-center">
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <img src={imgGroup1} />
              </div>
              <div className="w-1/2">
                <img src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="mt-4 px-8 p-text-def text-lg" />
          <div className="pt-4">
            <img src={imgPool} />
          </div>

          <div className="flex flex-col md:flex-row py-16 max-w-5xl mx-auto">
            <div className="w-1/2 text-left md:text-center text-2xl font-semibold pt-8 p-text-def">
              ON THE BACKWATERS
            </div>

            <div className="w-1/2 text-left w-full my-2 py-4 max-w-2xl">
              <p className="p-text-def text-xl font-normal">
                Villa Anugraha is located in Aymanam village, in Kottayam, a
                central district of Kerala. This bountiful area on the banks of
                the Meenachil river, was the setting of Arundhati Roy’s 1997
                Booker Prize-winning novel
                <i> The God of Small Things.</i> The 7.5-acre property,
                punctuated by canals, a thriving pond, vegetable garden, many
                varieties of tropical fruit trees, hardwoods, bamboo, and
                various kinds of ferns, was designed and laid out by
                award-winning landscape architect Tom Stuart-Smith. The airport
                nearest to Kottayam is the Kochi International airport, which is
                2.5 hours away.
                <br />
              </p>
            </div>
          </div>
          <div className="py-4">
            <img src={img13} />
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
