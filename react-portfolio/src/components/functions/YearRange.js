function YearRange({ years }) {
  const setYearsRange = (years) => {
    let lowerYear = years[0];
    let higherYear = years[0];

    for (let i = 1; i < years.length; i++) {
      if (years[i] < lowerYear) {
        lowerYear = years[i];
      } else if (years[i] > higherYear) {
        higherYear = years[i];
      }
    }

    return lowerYear + " - " + higherYear;
  };

  return (
    <div>
      <h3 className="years">{setYearsRange(years)}</h3>
    </div>
  );
}

export default YearRange;
