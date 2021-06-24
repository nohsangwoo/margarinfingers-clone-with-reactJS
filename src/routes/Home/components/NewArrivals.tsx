import React from 'react';
import NewArrivalsTitle from './NewArrivalsTitle';
import NewArrivalsPhotos from './NewArrivalsPhotos';
import NewArrivalsData0 from '../../../fakeData/newArrival1';
import NewArrivalsData1 from '../../../fakeData/newArrival2';

type Props = {
  choose: number;
};
const NewArrivals = ({ choose }: Props) => {
  const DataList = [
    { ArrivalsData: NewArrivalsData0 },
    { ArrivalsData: NewArrivalsData1 },
  ];
  // console.log(DataList[choose]);
  //   console.log(NewArrivalsData2);
  return (
    <>
      <NewArrivalsTitle />
      <NewArrivalsPhotos NewArrivalsData={DataList[choose].ArrivalsData} />
    </>
  );
};

export default NewArrivals;
