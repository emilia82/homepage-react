import Navigation from "./Navigation";
import Buttons from "./Buttons";
import Header from "./Header";



function App() {
  return (
    <body className="body">
    <Navigation />
   <Buttons />
    <main>
       <Header title="Witaj na mojej stronie, poznajmy się..." />
       <subHeader subTitle="Tu napiszę jeszcze coś ciekawego, jak będzie wena.... proces twórczy to w końcu proces :D" />
        <section>
            <img className="section__image" src="https://i.postimg.cc/28PXb5rx/Emilia-Warakomska.jpg" alt="Emilia Warakomska"></img>
            <h2 id="o-mnie" className="section__header">O Mnie</h2>
            
            <p className="section__paragraph">
                Nazywam się Emilia Warakomska.
                <span className="ciekawyElement">
                    Jestem osobą o wielu talentach i wielu umiejętnościach.
                </span>
                Jestem naturalnym Liderem, pasjonuje mnie rozwój osobisty, zawodowy, duchowy i charakterologiczny.
                Wykonałam wszystkie możliwe testy osobowości testy Tallentów, a ostatnio sie dowiedziałam, że
                <br></br>
                <strong>
                    wg Wyroczni Delfickiej
                </strong>
                <q>Poznaj samego siebie - to klucz do sukcesu</q>
                .
                
                I chyba coś w tym jest.
            </p>
            <hr></hr>
            <p className="section__paragraph">
                Uwielbiam pracę kreatywną, sport, muzykę, a także... filmy o superbohaterach, których tytuły przedstawię na tej stronie.
               Od 16 lat moją pasją jest zdrowy styl życia, wszystko co związane z anty-aging, psychologia sportu, dieta, trening, suplementacja.
               To moja zarówno pasja, jak i obsesja. Bardzo lubię też social-media, i wszelkie możliwości, które one dają
            </p>
        </section>
        <section>
            <h2 id="moje-sukcesy" className="section__header">Moje sukcesy</h2>
            <p className="section__paragraph">
                W 2016 roku zdobyłam uprawnienia do prowadzenia zajęć grupowych fitness i uzyskałam legitymację Ministra Sportu. 
               Posiadam również tytuł International Personal Trainer. Posiadam również szkolenia z zakresu dietetyki sportowej, 
               dietetyki klinicznej oraz suplementacji. Pod tym względem jestem Trenerem z krwi, kości i powołania.
               Każdą drużynę ((i każdego człowieka) poprowadzę DO ZWYCIĘSTWA i pokażę drogę jak zdobyć każdy Everest życia.
               W 2010 roku zaczęłam pisać bloga, napisałam kilka e-booków, zebrałam własną listę meilingową (5000 osób) i stworzyłam
               po drodze kilka mikro-społeczności i gangów ("TRX Soldiers", "Strong & Sexy Girs").
               Współpracowałam z portalami o tematyce zdrowia (poprostuzdrowo.pl) oraz pisałam artykuły do gazet ("Stuff", "Szaman").
               Napisałam ponad 500 artykułów, ponad 600 wpisów na social media, stworzyłam kilkadziesiąt kreacji reklamowych.
            </p>
            <hr></hr>
            <p className="section__paragraph">
                <strong>Umiejętności i kompetencje:</strong>
                zarządzanie, motywacja, techniki negocjacji, social-selling, prowadzenie mediów społecznościowych,
               promotion, blogowanie, tworzenie pięknych prezentacji, prostych grafik, info-produktów, copywriting, posiadam prawo jazdy kat.B.
               Porozumiewam się swobodnie po angielsku
            </p>
            </section>
            <section>
                <h2 id="ulubione-filmy" className="section__header">Ulubione filmy</h2>
                <p className="section__paragraph">
                    <u>Nie jestem "kinomaniakiem"</u>
                    , wolę książki i mam ich całą bibliotekę. Ale jak już oglądam filmy, to zawsze mnie fascynowały te o bohaterach z super-MOC-ami :D 
                bo sama zawsze chciałam takowe posiadać :D Więc o nich tutaj wspominam.
                </p>
                <div className="table">
                    <table className="table__body">
                        <caption className="table__caption">Moje ulubione filmy o superbohaterach</caption>
                        <thead>
                            <tr className="table__row">
                                <th className="table__cell table__header" scope="col">Tytuł filmu</th>
                                <th className="table__cell table__header" scope="col">Wytwórnia</th>
                                <th className="table__cell table__header" scope="col">Gatunek</th>
                                <th className="table__cell table__header" scope="col">Rok produkcji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table__row">
                                <th className="table__cell table__header" scope="row">Wonder Woman</th>
                                <td className="table__cell">DC Comics</td>
                                <td className="table__cell">Akcja</td>
                                <td className="table__cell">2020 rok</td>
                            </tr>
                            <tr className="table__row">
                                <th className="table__cell table__header" scope="row">Kapitan Marvel</th>
                                <td className="table__cell">Marvel Comics</td>
                                <td className="table__cell">Fantasy/Akcja</td>
                                <td className="table__cell">2019 rok</td>
                            </tr>
                            <tr className="table__row">
                                <th className="table__cell table__header" scope="row">VENOM</th>
                                <td className="table__cell">Marvel Comics</td>
                                <td className="table__cell">Fantasy/Akcja</td>
                                <td className="table__cell">2020 rok</td>
                            </tr>
                            
                            <tr className="table__row">
                                <th className="table__cell table__header" scope="row">Batman</th>
                                <td className="table__cell">DC Comics</td>
                                <td className="table__cell">Fantasy/Akcja</td>
                                <td className="table__cell">2017 rok</td>
                            </tr></tbody>
                        </table>
                        
                    </div>
                    <p className="section__paragraph">
                        Tak, poza tym... Lubię kino psychologiczne i takie, które daje do myślenia, albo zmienia perspektywę. 
                    A jeśli chcę się pośmiać, to - chociaż w życiu moim nie brak śmiesznych sytuacji - zdecydowanie wolę kabarety :)
                    </p>
                    
                 </section>
                 </main> 
            <footer className="footer">
                © Strona przygotowana w ramach kursu Frontend Developer od podstaw z firmą
                <a
                    className="footer__link"
                    target="_blank"
                    title="Oficjalna strona kursu YouCode."
                    rel="noreferrer noopener"
                    href="https://youcode.pl/"
                >YouCode</a>
                (strona otworzy się w nowej karcie).
            </footer>             
        </body>
  );
}

export default App;
