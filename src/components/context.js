import { useState, useEffect, useContext, createContext } from 'react';
import { housesData } from '../data';
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [houses, setHouses] = useState([...housesData]);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [openPreloader, setOpenPreloader] = useState(false);


    const filterProperties = () => {
        setOpenPreloader(true);
        // a function to check if none is in its default value;
        const isDefault = (value) => {
            return value.split(' ').includes('(any)');
        }
        // get the minimum and maximum price;
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);

        const tempHouses = [...housesData].filter(house => {
            // if all isDefault
            if (
                isDefault(price) && isDefault(property) && isDefault(country)
            ) {
                setHouses([...housesData]);
                return house;
            }

            // if country is slected
            if (!isDefault(country)) {
                // only country
                if (isDefault(price) && isDefault(property)) {
                    return house.country == country;
                }
                // country & price
                if (!isDefault(price) && isDefault(property)) {
                    if (house.price >= minPrice && house.price <= maxPrice) {
                        return house
                    }
                }
                // country & property
                if (!isDefault(property) && isDefault(price)) {
                    return house.type == property && house.country == country;
                }
            }

            // if property is selected
            if (!isDefault(property)) {
                // only property
                if (isDefault(country) && isDefault(price)) {
                    return house.type == property;
                }
                // property & price
                if (!isDefault(price) && isDefault(country)) {
                    return house.price >= minPrice && house.price <= maxPrice
                }
                // property and country
                if (!isDefault(country) && isDefault(price)) {
                    return house.type == property && house.country == country;
                }
            }


            // if price is selected
            if (!isDefault(price)) {
                // price only
                if (isDefault(country) && isDefault(property)) {
                    return house.price >= minPrice && house.price <= maxPrice;
                }
                // price and country
                if (!isDefault(country) && isDefault(property)) {
                    return house.country == country && house.price >= minPrice && house.price <= maxPrice;
                }
                // price and property
                if (!isDefault(property) && isDefault(country)) {
                    return house.type == property && house.price >= minPrice && house.price <= maxPrice
                }
            }

            // if all is selected
            if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
                return house.country == country && house.type == property && house.price >= minPrice && house.price <= maxPrice
            }
        });

        setHouses(tempHouses);
    }

    useEffect(() => {
        // get all countries
        const uniqueLocations = [...houses].reduce((allHouses, currentHouse) => {
            if (!allHouses.includes(currentHouse.country)) {
                allHouses.push(currentHouse.country);
            };
            return allHouses;
        }, ['Location (any)']);
        setCountries(uniqueLocations);
        // get all property types
        const uniqueProperties = [...houses].reduce((allHouses, currentHouse) => {
            if (!allHouses.includes(currentHouse.type)) {
                allHouses.push(currentHouse.type);
            };
            return allHouses;
        }, ['Property type (any)']);
        setProperties(uniqueProperties);
    }, []);

    useEffect(() => {
        if (openPreloader) {
            const timeout = setTimeout(() => {
                setOpenPreloader(false);
            }, 2000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [openPreloader])
    return <AppContext.Provider value={{
        houses, country, setCountry, countries, property, properties, setProperty, price, setPrice, openPreloader, filterProperties
    }}>{children}</AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppProvider }