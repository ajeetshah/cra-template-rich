import React from 'react'
import HomeSearch, { FormData } from './components/homeSearch'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import ReHeading1 from '../../common/typography/reHeading1'
import { nameApp } from '../../constants/names'
import HomeList from './components/homeList'
import { homeState, Car, setSelectedCar, fetchCars } from './homeSlice'
import { toast } from 'react-toastify'
import ReInfoText from '../../common/texts/reInfoText'
import './home.scss'

interface Props {}

export default function HomeContainer(props: Props) {
  const dispatch: any = useDispatch()
  const { cars, selectedCar } = useSelector(homeState)

  function handleSubmit(data: FormData) {
    handleChangeActive({} as Car)
    dispatch(fetchCars(data.searchText))
      .then(unwrapResult)
      .then((cars) => {
        toast.success('Data fetched successfully')
      })
      .catch((error) => {
        console.error(error)
        toast.error('An error has occurred')
      })
  }

  function handleChangeActive(car: Car) {
    dispatch(setSelectedCar(car))
  }

  return (
    <div className="pt-3 w-75 mx-auto">
      <ReHeading1 text={nameApp} className="pt-1 text-center text-success" />
      <HomeSearch onSubmit={handleSubmit} />
      <HomeList
        items={cars}
        activeItem={selectedCar}
        onChangeActive={handleChangeActive}
      />
      {selectedCar && selectedCar.title && (
        <ReInfoText text={`Selected: ${selectedCar.title}`} className="pt-2" />
      )}
    </div>
  )
}
