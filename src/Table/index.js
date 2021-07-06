import "./style.css";

const Table = () => (
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
);


export default Table;