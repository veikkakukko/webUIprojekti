import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import "./Style_Home.css";
import kukkulakuva from "../assets/kukkulalla.jpg"
import sotilas from "../assets/Sotilaspoika.png"


const Home = () => {
  
  return (
    <>
      <NavigationBar></NavigationBar>

        <div>
            <img src={kukkulakuva} alt="Kukkulan kuningas" width="100%"/>
        </div>

        <div style={{width: "75%", alignSelf: "center", paddingBottom: "100px", paddingTop: "100px"}}>

            <p>
                <strong>Etusivu</strong>
                <br />
                <br />
                <br />
                Hei!
                <br /> <br />Olen Veikka Kukko. Olet löytänyt kotisivuni. 
                Tältä sivustolta voit löytää minusta tietoa työnhakuun liittyen, 
                sisältöä tekemistäni ohjelmointiprojekteista ja tuottamaani grafiikkataidetta.
                <br /> <br />Jos olet työnantaja, löydät työnhakuun liittyvää tietoa välilehdeltä <strong><a href="/">Työ ja opinnot</a></strong>. <br />
                Ohjelmointiprojektejani löydät välilehdeltä <strong><a href="/">Ohjelmointiprojektit</a></strong>. <br />
                Taidetta löydät välilehdeltä <strong><a href="/">Vektoritaidetta</a></strong>. <br />
                Olet tällä hetkellä etusivulla. Etusivu sisältää yleisen esittelyn minusta.

                <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mauris est. Integer vitae ante luctus, molestie urna non, mattis mauris. Integer porta at neque at varius. Phasellus ut augue vestibulum libero tincidunt tempus finibus id sem. Ut eu nulla pharetra, luctus justo quis, tincidunt sem. Phasellus cursus, nunc vitae sollicitudin fringilla, lacus quam pretium purus, eget efficitur turpis odio eget ex. Quisque quis lectus pharetra, facilisis magna cursus, vestibulum metus. Nam mollis nulla eu sollicitudin aliquet.

                <br /> <br />Praesent viverra auctor fermentum. Nullam faucibus vulputate quam vel vestibulum. Quisque hendrerit turpis eget leo placerat, et tempor risus venenatis. Vivamus mollis ornare efficitur. Cras ex metus, tempor non tincidunt in, porta sed elit. Proin nec purus eu velit efficitur vehicula a ut nunc. Curabitur sagittis porta est faucibus aliquam. Fusce scelerisque nulla non augue luctus malesuada at id massa. Maecenas nisi lectus, eleifend at nibh viverra, feugiat semper elit. Maecenas faucibus est nec tortor pretium cursus nec vel magna.
            </p>

            <figure>
                <img src={sotilas} alt="Vektoritaidekuva Veikasta sotilaan puvussa"  width="300"/>
                <figcaption>Suoritin varusmiespalveluksen ruotsin kielellä Dragsvikissa. Hain sinne oppiakseni puhumaan ruotsia paremmin.</figcaption>
            </figure>

            <p>
                <br /> <br />Sed ultrices tincidunt lectus id tristique. Vivamus blandit vehicula leo sed auctor. Praesent imperdiet fermentum nisl ac vestibulum. Aliquam ante ipsum, mattis sit amet pulvinar eget, vestibulum a nisi. Morbi id metus lobortis, rutrum arcu at, faucibus massa. Suspendisse cursus aliquet faucibus. Nulla nec neque bibendum, egestas odio non, lobortis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed porttitor lacus. Etiam eget felis eu turpis consectetur dapibus id vitae massa. Nulla tempus pellentesque finibus.

                <br /> <br />Quisque ligula neque, consequat viverra maximus a, tincidunt bibendum ex. Morbi nec neque molestie, fringilla nisl ac, semper eros. Nam eget urna vel purus condimentum sodales in in nisl. Praesent pretium eros at nisl imperdiet dictum id sit amet lectus. Vestibulum venenatis elit vel aliquet faucibus. Nunc blandit nibh vel ante sodales, nec blandit nisi pharetra. Donec dignissim interdum massa, quis sagittis magna molestie eget. In hac habitasse platea dictumst. Phasellus molestie mi ipsum, eu malesuada erat dignissim sit amet. Nullam commodo purus vitae turpis pulvinar sodales. Donec tincidunt turpis id nisl commodo, vitae sodales libero suscipit. Maecenas imperdiet suscipit orci sed luctus. Cras maximus, mi eu aliquam iaculis, nunc sapien convallis metus, sit amet interdum libero dui a nibh.

                <br /> <br />Donec hendrerit a mi sed pretium. Curabitur convallis posuere ex, sit amet facilisis leo bibendum vitae. Phasellus pellentesque gravida neque a lobortis. Curabitur ut urna quis urna finibus consectetur. Integer placerat maximus ligula eget tempus. Morbi et justo feugiat, sodales odio non, fermentum risus. Praesent elit nunc, fermentum et lorem eget, ornare dignissim libero. Nullam sit amet odio risus. Nam placerat libero eget eleifend dapibus.
            </p>
        </div>

      <Footer />
    </>
  );
};

export default Home;
