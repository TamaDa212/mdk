export default function ({onFilterChange}) {
  const subwayOptions = [
    {
        name: "Арбатская",
        code: "Arbat"
    },
    {
        name: "Александровский сад",
        code: "Alexanders Garden"
    },
    {
        name: "Московская",
        code: "Moscow"
    },
    {
        name: "Парк Культуры",
        code: "Culture"
    },
    {
        name: "Театральная",
        code: "Theatr"
    }
  ];

  const handleChange = (e) => {
    onFilterChange(e.target.value);
  }
    
    return (
        <div class="controls">
            <select name="subway" id="subway" onChange={handleChange}>
                <option value="All" selected>Все</option>
                {subwayOptions.map((subway) => (
                    <option key={subway.code} value={subway.code}>{subway.name}</option>
                ))}
            </select>
        </div>
    )
}
