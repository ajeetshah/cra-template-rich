import React from 'react'
import './home.scss'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'
import { useIntl } from 'react-intl'
import HomeSearch, { IFormData } from './homeSearch'
import ReHeading1 from '../../common/typography/reHeading1'
import HomeList from './homeList'
import { homeState, ICar, setSelectedCar, fetchCars } from './homeSlice'
import ReInfoText from '../../common/texts/reInfoText'
import { showSuccessToast } from '../../utils/toastUtil'

interface IProps {}

export default function HomeContainer(props: IProps) {
  const { formatMessage } = useIntl()
  const dispatch: any = useDispatch()
  const { cars, selectedCar } = useSelector(homeState)

  function handleSubmit(data: IFormData) {
    handleChangeActive({} as ICar)

    dispatch(fetchCars(data.searchText))
      .then(unwrapResult)
      .then((res: AxiosResponse<ICar[]>) => {
        console.debug('cars', res.data)
        showSuccessToast('Data fetched successfully')
      })
      .catch((error) => {
        console.debug('error', error)
      })
  }

  function handleChangeActive(car: ICar) {
    dispatch(setSelectedCar(car))
  }

  return (
    <div className="pt-3 w-75 mx-auto">
      <ReHeading1
        text={formatMessage({ id: 'app.name' })}
        className="pt-1 text-center text-success"
      />
      <HomeSearch onSubmit={handleSubmit} />
      <HomeList
        items={cars}
        activeItem={selectedCar}
        onChangeActive={handleChangeActive}
      />
      {selectedCar && selectedCar.title && (
        <ReInfoText
          text={`${formatMessage({ id: 'home.selected' })}: ${selectedCar.title}`}
          className="pt-2"
        />
      )}
      <div
        className="text-muted font-13x my-3"
        title="do '$ yarn run start:server' for mock server, if not done already"
      >
        Mock server: <code>$ yarn run start:server</code>
      </div>
    </div>
  )
}
