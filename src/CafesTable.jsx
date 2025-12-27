import { useState, useEffect} from "react";
import FilterCafes from "./FilterCafes";


export default function () {
    const [cafes, setCafes] = useState([]);
    const [filteredCafes, setFilteredCafes] = useState([]);
    const [subway, setSubway] = useState("All");

    useEffect(() => {
        fetch('/cafes')
            .then(res => res.json())
            .then(data => {
                setCafes(data.cafes);
                setFilteredCafes(data.cafes);
            })
            .catch(err => {
                console.log('Ошибка при загрузке данных',err);
            });
    }, []);

    useEffect(() => {
        setFilteredCafes(subway === "All" ? cafes : cafes.filter(cafe => cafe.subwayCode === subway));
    }, [subway, cafes]);

    const handleSubwayChange = (subwayCode) => {
        setSubway(subwayCode);
    };


    return (
        <div id="container" class="container m-3">
            <div class="cafesTable">
               <FilterCafes onFilterChange={handleSubwayChange}/>
                <ul class="cardsList">
                    {filteredCafes.map(cafe => (
                        <li class="card" key={cafe.id}>
                            <img src={ cafe.img ||"https://static.tildacdn.com/tild3537-3432-4465-b935-303732373332/_34A8434.jpg"} alt="" />
                            <h2>{cafe.name}</h2>
                            <p>{cafe.desc}</p>
                            <p>{cafe.address}</p>
                            <p>Subway: {cafe.subwayCode}</p>
                            <p>{cafe.workTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
