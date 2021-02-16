import { useState } from 'react'
import './home.scss'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'
import { useIntl } from 'react-intl'
import HomeSearch, { IFormData } from './homeSearch'
import ReHeading1 from '../../common/typography/reHeading1'
import HomeList from './homeList'
import { selectHome, setSelectedCar, fetchCars } from './homeSlice'
import ReInfoText from '../../common/texts/reInfoText'
import { showSuccessToast } from '../../utils/toastUtil'
import { copyInputTextToClipboard } from '../../utils/commonUtils'
import { ICar } from './iHome'
import useDocumentTitle from '../../hooks/useDocumentTitle'

export default function HomeContainer() {
  useDocumentTitle('Home')
  const { formatMessage } = useIntl()
  const dispatch: any = useDispatch()
  const { cars, selectedCar } = useSelector(selectHome)
  const [isMockServerOn, setIsMockServerOn] = useState(false)

  function handleSubmit(data: IFormData) {
    handleChangeActive({} as ICar)

    dispatch(fetchCars(data.searchText))
      .then(unwrapResult)
      .then((res: AxiosResponse<ICar[]>) => {
        setIsMockServerOn(true)
        showSuccessToast('Data fetched successfully')
      })
      .catch((error) => {
        console.error('error', error)
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
      {!isMockServerOn && (
        <div
          role="button"
          tabIndex={0}
          title="Click to copy"
          className="text-mutedx font-14 my-3 cursor-pointer"
          onClick={(e) => copyInputTextToClipboard('runJsonServer')}
          onKeyPress={(e) => copyInputTextToClipboard('runJsonServer')}
        >
          Start the mock JSON server, click to copy:
          <code>
            <input
              type="text"
              readOnly
              className="cursor-pointer bg-transparent text-success border-0"
              value="yarn json-server"
              id="runJsonServer"
            />
          </code>
        </div>
      )}
    </div>
  )
}
