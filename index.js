const returnFirstTwoDrivers = (driverNames) => {
    return driverNames.slice(0, 2);
  };

  const returnLastTwoDrivers = (driverNames) => {
    return driverNames.slice(2, 5);
  };

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
    

