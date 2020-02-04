import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import './style.scss';

const Flags = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://restcountries.eu/rest/v2/all');
            setCountries(result.data);

            console.log(result.data);
        };
        fetchData();
    }, []);

    return (
        <main>
            <div className='wrapper'>
                <form>
                    <input type='search' placeholder='Search for a country' />
                    <select>
                        <option value='volvo'>Africa</option>
                        <option value='saab'>America</option>
                        <option value='opel'>Asia</option>
                        <option value='audi'>Europe</option>
                        <option value='audi'>Oceania</option>
                    </select>
                </form>

                <section>
                    {countries &&
                        countries.map((country, i) => {
                            return (
                                <article key={i}>
                                    <figure>
                                        <img src={country.flag} alt={`Flag of ${country.name}`} />
                                    </figure>

                                    <h1>{country.name}</h1>

                                    <p>
                                        <strong>Population:</strong> <NumberFormat value={country.population} displayType={'text'} thousandSeparator={true} />
                                    </p>
                                    <p>
                                        <strong>Region:</strong> {country.region}
                                    </p>
                                    <p>
                                        <strong>Capital:</strong> {country.capital}
                                    </p>
                                </article>
                            );
                        })}
                </section>
            </div>
        </main>
    );
};

export default Flags;
