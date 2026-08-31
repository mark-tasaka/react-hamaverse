import React from 'react';
import { Link } from 'react-router-dom';
import './css/Common.css';
import './css/WishList.css';

import wishList1 from './img/wishList/wishList_1.png';
import wishList2 from './img/wishList/wishList_2.png';
import wishList3 from './img/wishList/wishList_3.png';
import wishList4 from './img/wishList/wishList_4.png';

const WishList: React.FC = () => {
  return (
    <main className="wishlist-page">
      <div className="container">
        <h1 className="wishlist-title">My ARAH Wish List</h1>

        <p className="wishlist-intro">
          Please note this section has been created specifically for you, Mr. Hama, should you ever come across my humble site. To start, I want to say thank you — for your incredible work writing ARAH, and for building a universe filled with rich, memorable characters, whose stories and arcs are woven so deeply into who they are. As a devoted fan of your work, there are stories and past characters I would love to see explored further. Below is a wish list I put together, as a fan of your work who deeply admires everything you have created.
        </p>

        <section className="wishlist-block">
          <div className="wishlist-block-media">
            <img src={wishList1} alt="Scarlett's Backstory" />
          </div>
          <h2 className="wishlist-block-title">Scarlett's Backstory</h2>
          <p>
            Scarlett is one of my favorite characters, along with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, <Link to="/character-bios/StormShadow">Storm Shadow</Link>, and <Link to="/character-bios/Stalker">Stalker</Link>. I love how you have used her — together with <Link to="/character-bios/Stalker">Stalker</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link> — as a voice for the silent ninja, helping tell <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' story. I have always been curious, though, about <Link to="/character-bios/Scarlett">Scarlett</Link>'s own story: who she was before G.I. Joe. Below are a few ideas I have put together that I think could be worth exploring in her backstory.
          </p>

          <h3 className="wishlist-subblock-title">Scarlett's Father and Three Brothers</h3>
          <p>
            <Link to="/character-bios/Scarlett">Scarlett</Link>'s file card mentions that her father and brothers are all martial arts instructors, implying she trained under their mentorship and earned her first black belt at fifteen. I would love to see her father's role explored as her sensei, training <Link to="/character-bios/Scarlett">Scarlett</Link> and her brothers together. There could be interesting parallels to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' own training with the Arashikage clan — and just as many meaningful differences, reflecting the very different family dynamics between the two.
          </p>

          <h3 className="wishlist-subblock-title">Her Brothers Today</h3>
          <p>
            Given their backgrounds as martial arts instructors, I would be interesting to know what brothers are doing now. Did any of them go on to serve in the military, perhaps in the special forces community? Work for three-letter intelligence agencies?
          </p>
          
          <h3 className="wishlist-subblock-title">Scarlett's Connections to Ireland</h3>
          <p>
            I have always admired how you connected American-born <Link to="/character-bios/StormShadow">Storm Shadow</Link> to the Arashikage clan in Japan. It would be fascinating to see whether <Link to="/character-bios/Scarlett">Scarlett</Link> has a similar connection to an organization or group in Ireland (I am assuming here that her ancestry is Irish). Perhaps a storyline could send <Link to="/character-bios/Scarlett">Scarlett</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> to Ireland, where they cross paths with such a group.
          </p>

          <h3 className="wishlist-subblock-title">Sioban O'Hara</h3>
          <p>
            I loved the introduction of <Link to="/character-bios/Scarlett">Scarlett</Link>'s sister, <Link to="/character-bios/Sioban">Sioban O'Hara</Link>, an attorney-at-law, during the storyline where <Link to="/character-bios/Scarlett">Scarlett</Link> lay in a coma and <Link to="/character-bios/Sioban">Sioban</Link> sought to terminate her life support. I would love to know whether <Link to="/character-bios/Sioban">Sioban</Link> still holds any resentment toward <Link to="/character-bios/Scarlett">Scarlett</Link>, and whether it was resolved after <Link to="/character-bios/Scarlett">Scarlett</Link> signed over the family house in Atlanta.
          </p>

        </section>

                <section className="wishlist-block">
          <div className="wishlist-block-media">
            <img src={wishList2} alt="Exploring the Original Snake Eyes' Return" />
          </div>
          <h2 className="wishlist-block-title">Exploring the Original Snake Eyes' Return</h2>
          <p>
            I loved how you portrayed the trauma the Joes experienced following <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' death, from <Link to="/character-bios/Hawk">Hawk</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> helping hold up a grieving <Link to="/character-bios/Stalker">Stalker</Link> at the funeral, to <Link to="/character-bios/Scarlett">Scarlett</Link>'s ferry ride with <Link to="/character-bios/SeanCollins">Sean Collins</Link>, which stirs memories of the rides she once took with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> years before. The grief felt by those closest to him captures the true tragedy of his loss.
          </p>

          <h3 className="wishlist-subblock-title">Snake Eyes' Voice</h3>
          <p>
            When the original <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> returned, his vocal cords were restored along with him. I love how you conveyed the love between <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/Scarlett">Scarlett</Link> largely through body language rather than words. For instance, outside the Bern Institute of Reconstructive Surgery, <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> touches <Link to="/character-bios/Scarlett">Scarlett</Link>'s hand, looks up at the sun, then glances toward a nearby couple holding hands (<Link to="/comic-issues/Issue93">Issue #93</Link>) — wordlessly conveying to her exactly why he wants to go through with the surgery. Now that his voice has returned, I would love to see more dialogue between the two, where <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> can finally express, in his own words, what <Link to="/character-bios/Scarlett">Scarlett</Link> means to him and how much he loves her.
          </p>

          <h3 className="wishlist-subblock-title">Lost Memories</h3>
          <p>
            There is much more to explore here than the return of <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>' voice. The clone was created from memories and DNA stored in the Brainwave Scanner during Dr. Venom's very first encounter with <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, all the way back in Issue #10. That leaves a substantial gap in the clone's memories — including, for instance, his encounter at the Silent Castle with <Link to="/character-bios/StormShadow">Storm Shadow</Link> as a Cobra agent.
          </p>
          <p>
            It would be interesting to explore how this memory gap affects his relationships going forward. For instance, while <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> may know, secondhand, that he once crossed blades with <Link to="/character-bios/StormShadow">Storm Shadow</Link> during his time as a Cobra agent, he will have no actual memory of the event itself, since it took place after the Brainwave Scan.
          </p>
        </section>

                <section className="wishlist-block">
          <div className="wishlist-block-media">
            <img src={wishList3} alt="Joes Everyone Loves to Hate" />
          </div>
          <h2 className="wishlist-block-title">Joes Everyone Loves to Hate</h2>
          <p>
            I love how you based the Joes on real people you know, with real personalities. In the Marvel run, I love how you portrayed certain Joes with difficult personalities — showing that you may not like a person back at the barracks, but you know you can utterly depend on them in the field. <Link to="/character-bios/Leatherneck">Leatherneck</Link>'s brash, loudmouthed, and ill-tempered personality is on full display when Outback returns without his team from Borovia (Issue #62). <Link to="/character-bios/DeepSix">Deep Six</Link>'s lack of emotion, interest, or enthusiasm is just as memorable, with Airborne having to hold back Wild Bill from striking him after <Link to="/character-bios/DeepSix">Deep Six</Link> walks right past him, utterly ignoring his offered handshake (Issue #25). <Link to="/character-bios/Flint">Flint</Link>'s overconfidence and self-importance shine through as well, particularly in his early attempts to impress <Link to="/character-bios/LadyJay">Lady Jaye</Link> (Issue #53).
          </p>
          <p>
            I would love to see more of these personality traits come to light in the Skybound iteration of the series. Having characters you love to hate, who the other Joes struggle to get along with, adds a level of depth and realism to the series. It is one of the things that makes your characters and writing so memorable.
          </p>
        </section>

                <section className="wishlist-block">
          <div className="wishlist-block-media">
            <img src={wishList4} alt="Callbacks and Connections" />
          </div>
          <h2 className="wishlist-block-title">Callbacks to Past Minor Characters</h2>
          <p>
            I love how you have carried characters created in your early Marvel run all the way through to recent issues. I loved the introduction of <Link to="/character-bios/Tyrone">Tyrone</Link>'s younger brother Raymond, a tribute to the legacies of the <Link to="/character-bios/BlindMaster">Blind Master</Link> and <Link to="/character-bios/Tyrone">Tyrone</Link>. I also loved seeing Heather Collins playing a role in a couple of issues, where she meets up with Dawn Moreno in the Springfield Brainwave Scanner lab. The confrontation between Dawn and <Link to="/character-bios/Firefly">Firefly</Link> atop a moving train, with <Link to="/character-bios/Zartan">Zartan</Link> disguised as the <Link to="/character-bios/SoftMaster">Soft Master</Link>, is an excellent nod to <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> and <Link to="/character-bios/StormShadow">Storm Shadow</Link>'s own rooftop train battle in New York in <Link to="/comic-issues/Issue27">Issue #27</Link>.
          </p>

          <h3 className="wishlist-subblock-title">Marina: Borovian Orphan</h3>
          <p>
            <Link to="/character-bios/Marina">Marina</Link> is the orphan <Link to="/character-bios/SnakeEyes">Snake Eyes</Link> brings back with him from Borovia. I loved her story arc during the Borovian storyline, in which <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>, placed under the Arashikage Mindset, travels there to rescue George Strawhacker. <Link to="/character-bios/Marina">Marina</Link> is later adopted into the Collins family, becoming <Link to="/character-bios/SeanCollins">Sean</Link> and Heather's adopted sister (Issues #104–108). I would love to learn what <Link to="/character-bios/Marina">Marina</Link> is up to today — is she a college student? Serving on active duty? It would be wonderful to see her reconnect with <Link to="/character-bios/SeanCollins">Sean</Link> and <Link to="/character-bios/SnakeEyes">Snake Eyes</Link>.
          </p>

          <h3 className="wishlist-subblock-title">Russ the Veteran</h3>
          <p>
            <Link to="/character-bios/Russ">Russ</Link> is the veteran who helped Mutt and Spirit form the armed youth resistance in Millville (Issue #100-102). I would love to know what Russ is up to these days. Is he still in touch with Mutt and Spirit? Is he still mentoring troubled youth? Does he still call Millville home? It would also be wonderful to see what some of those very youth are up to now.
          </p>
        </section>

        <div className="btn-row-center">
          <Link to="/Tribute" className="btn">Back to Tribute</Link>
        </div>

      </div>
    </main>
  );
};

export default WishList;
