import React from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/WishList.css';

import wishList1 from './img/wishList/wishList_1.png';

const WishList: React.FC = () => {
  return (
    <main className="wishlist-page">
      <div className="container">
        <h1 className="wishlist-title">My ARAH Wish List</h1>

        <p className="wishlist-intro">
          This page has been created specifically for you, Mr. Hama, should you ever come across my humble site. To start, I want to say thank you — for your incredible work writing ARAH, and for building a universe filled with rich, memorable characters, whose stories and arcs are woven so deeply into who they are. As a devoted fan of your work, there are stories and past characters I would love to see explored further. Below is a wish list I put together, as a fan of your work who deeply admires everything you have created.
        </p>

        <section className="wishlist-block">
          <div className="wishlist-block-media">
            <img src={wishList1} alt="Scarlett's Backstory" />
          </div>
          <h2 className="wishlist-block-title">Scarlett's Backstory</h2>
          <p>
            Scarlett is one of my favorite characters, alongside <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link>. I love how you have used her — together with <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> — as a voice for the silent ninja, helping tell <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' story. I have always been curious, though, about <Link to="/character-bios/Scarlett">Scarlett</Link>'s own story: who she was before G.I. Joe. Below are a few ideas I have put together that I think could be worth exploring in her backstory.
          </p>

          <h2 className="wishlist-block-title">Scarlett's Father and Three Brothers</h2>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link>'s file card mentions that her father and brothers are all martial arts instructors, implying she trained under their mentorship and earned her first black belt at fifteen. I would love to see her father's role explored as her sensei, training <Link to="/character-bios/Scarlett">Scarlett</Link> and her brothers together. There could be interesting parallels to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' own training with the Arashikage clan — and just as many meaningful differences, reflecting the very different family dynamics between the two.
          </p>

          <h2 className="wishlist-block-title">Her Brothers Today</h2>
          <p>
            Given their backgrounds as martial arts instructors, I would be curious what her brothers are doing now. Did any of them go on to serve in the military, perhaps in the special forces community? Or find their way into a three-letter intelligence agency?
          </p>

          <h2 className="wishlist-block-title">Sioban O'Hara</h2>
          <p>
            I loved the introduction of <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban O'Hara</Link>, an attorney-at-law, during the storyline where <Link to="/character-bios/Scarlett">Scarlett</Link> lay in a coma and <Link to="/character-bios/Sioban">Sioban</Link> sought to terminate her life support. I would love to know whether <Link to="/character-bios/Sioban">Sioban</Link> still holds any resentment toward <Link to="/character-bios/Scarlett">Scarlett</Link>, and whether that was ever truly resolved after <Link to="/character-bios/Scarlett">Scarlett</Link> signed over the family house in Atlanta.
          </p>

          <h2 className="wishlist-block-title">Scarlett's Connections to Ireland</h2>
          <p>
            I have always admired how you connected American-born <Link to="/character-bios/StormShadow">Storm Shadow</Link> to the Arashikage clan in Japan. It would be fascinating to see whether <Link to="/character-bios/Scarlett">Scarlett</Link> has a similar connection to an organization or group in Ireland (I am assuming here that her ancestry is Irish). Perhaps a storyline could send <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to Ireland, where they cross paths with such a group.
          </p>
        </section>

        <div className="btn-row-center">
          <Link to="/" className="btn">Back to Tribute</Link>
        </div>

      </div>
    </main>
  );
};

export default WishList;
