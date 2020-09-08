import React from 'react'
import ReTextInput from '../../common/formInputs/reTextInput'
import { useForm } from 'react-hook-form'
import { patternCarSearch } from '../../constants/regExPatterns'
import ReErrorText from '../../common/texts/reErrorText'
import RePrimaryButton from '../../common/buttons/rePrimaryButton'
import { useIntl } from 'react-intl'

interface IProps {
  onSubmit: (data: IFormData) => void
}

export interface IFormData {
  searchText: string
}

export default function HomeSearch(props: IProps) {
  const { formatMessage } = useIntl()
  const { onSubmit } = props
  const { register, handleSubmit: validateBefore, errors } = useForm<IFormData>({
    mode: 'onChange',
  })

  function handleSubmit(data: IFormData) {
    onSubmit(data)
  }

  return (
    <form onSubmit={validateBefore(handleSubmit)} noValidate>
      <ReTextInput
        id="searchText"
        name="searchText"
        className="h-50px"
        autoFocus={true}
        placeholder={formatMessage({ id: 'home.placeholder.search' })}
        refProp={register({ required: false, pattern: patternCarSearch })}
      />

      {errors.searchText && (
        <ReErrorText text={formatMessage({ id: 'home.error.search' })} />
      )}

      <RePrimaryButton type="button" className="d-none">
        hidden
      </RePrimaryButton>
    </form>
  )
}
