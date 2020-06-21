import React from 'react'
import ReTextInput from '../../common/formInputs/reTextInput'
import { useForm } from 'react-hook-form'
import { patternCarSearch } from '../../constants/regExPatterns'
import ReErrorText from '../../common/texts/reErrorText'
import RePrimaryButton from '../../common/buttons/rePrimaryButton'
import { useIntl } from 'react-intl'

interface Props {
  onSubmit: (data: FormData) => void
}

export interface FormData {
  searchText: string
}

export default function HomeSearch(props: Props) {
  const { formatMessage } = useIntl()
  const { onSubmit } = props
  const { register, handleSubmit: validateBefore, errors } = useForm<FormData>({
    mode: 'onChange',
  })

  function handleSubmit(data: FormData) {
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
