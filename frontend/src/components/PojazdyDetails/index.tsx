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
                <li className="list-group-item">Numer rejestracyjny: {pojazdData.dyspozycje[0].interwencje.adres}</li>
            </ul>
            <img
                src={pojazdData.obraz.substring(6)}
                alt="Pojazd"
            />
            <br/>
            <Link to={'/pojazdy'} content={'Wróć'}>Wróć</Link>
        </div>
    );
}
