import Navigation from "./Navigation";
import Buttons from "./Buttons";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";
import Section from "./Section";



function App() {
  return (
    <body className="body">
    <Navigation />
   <Buttons />
    <main>
       <Header title="Witaj na mojej stronie, poznajmy się..." />
       <sub__header subTitle="Tu napiszę jeszcze coś ciekawego, jak będzie wena.... proces twórczy to w końcu proces :D" />
        <Section />
                <Table />
        </main> 
            <Footer />            
        </body>
  );
}

export default App;
