export default function cityGrid() {
  const [city, setCity] = useState('Ontario');

  const [OntarioContentVisible, setOntarioContentVisible] = useState(false);
  const [otherCityContentVisible, setOtherCityContentVisible] = useState(false);

  useEffect(() => {
    city === 'Ontario' ? setOntarioContentVisible(true) : setOntarioContentVisible(false)
    city === 'othercity1' ? setOtherCityContentVisible(true) : setOtherCityContentVisible(false)
   ...etc
}

const handleOnChange = (e) => {
  setCity(e.target.value)
}
return (
  <div>
    <div>
      <select>
        <option value="Ontario" onClick={handleOnChange}/>
        <option value="Bramptoncity1" onClick={handleOnChange}/>
        <option value="Mississaugacity2" onClick={handleOnChange}/>
        <option value="Torontocity3" onClick={handleOnChange}/>
      <select>
    </div>
    <div>
      {OntarioContentVisible &&
        <div>
          <ReactComponentWithApiData city={"Ontario"} />
        </div>
      }
      {othercityContentVisible &&
        <div>
          <ReactComponentWithApiData city={"othercity1"} />
        </div>
      }
      ...etc
    </div>
  </div>
  );
}
