import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function PojazdDetails() {
    const [pojazdData, setPojazdData] = useState<object|null>(null)
    const { pojazdId  } = useParams();

    const requestOptions = {
        method: 'GET'
    };

    useEffect(() => {

        const fetchPojazdData = async () => {
            try {
                const response = await fetch('http://localhost:3000/pojazdy/' + pojazdId, requestOptions);
                const pojazd_data = await response.json();
                console.log(pojazd_data)
                setPojazdData(pojazd_data);
            } catch (error) {
                console.error('Błąd podczas  danych:', error);
            }
        };

        fetchPojazdData();
    }, []);
    if (pojazdData== null) {
        return (<p>Ten obiekt nie istnieje</p>)
    }

    return (
        <div className="PojazdDetails container">
            <ul className="list-group">
                <li className="list-group-item">Numer operacyjny: {pojazdData.numer_operacyjny}</li>
                <li className="list-group-item">Dane
                    pojazdu: {pojazdData.przeznaczenie} {pojazdData.marka} {pojazdData.model}</li>
                <li className="list-group-item">Numer rejestracyjny: {pojazdData.numer_rejestracyjny}</li>
            </ul>
            <img
                src={pojazdData.obraz.substring(6)}
                alt="Pojazd"
            />
            <p>Ostatnia dyspozycja:</p>
            <ul className="list-group">
                <li className="list-group-item">Adres: {pojazdData.dyspozycje[0].interwencje.adres}</li>
                <li className="list-group-item">Data
                    wyjazdu: {new Date(pojazdData.dyspozycje[0].interwencje.data_wyjazdu).toLocaleDateString() + ' ' + new Date(pojazdData.dyspozycje[0].interwencje.data_wyjazdu).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</li>
                <li className="list-group-item">Odległość: {pojazdData.dyspozycje[0].interwencje.odleglosc}</li>
                <li className="list-group-item">Typ: {pojazdData.dyspozycje[0].interwencje.typ}</li>
                <li className="list-group-item">Opis: {pojazdData.dyspozycje[0].interwencje.opis}</li>
                <li className="list-group-item">Data
                    powrotu: {new Date(pojazdData.dyspozycje[0].interwencje.data_powrotu).toLocaleDateString() + ' ' + new Date(pojazdData.dyspozycje[0].interwencje.data_powrotu).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</li>
            </ul>
            <br/>
            <Link to={'/pojazdy'} content={'Wróć'}>Wróć</Link>
        </div>
    );
}
