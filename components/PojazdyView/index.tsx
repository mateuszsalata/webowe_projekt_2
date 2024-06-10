import { useState, useEffect } from 'react';

export default function PojazdyView() {
    const [pojazdy, setPojazdy] = useState([]);
    const [wybranyPojazd, setWybranyPojazd] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/pojazdy')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPojazdy(data);
            });
    }, []);


    return (
        <div className={'pojazdContainer'}>
            {pojazdy.map((pojazd) => (
                <div className={'pojazdBox'} key={pojazd.id}>
                    <a href={'pojazdy/' + pojazd.id}>
                        <img
                        src={pojazd.obraz}
                        alt="Pojazd"
                        />
                    </a>
                    <h2>{pojazd.numer_operacyjny}</h2>
                </div>
            ))}
        </div>
    );
}