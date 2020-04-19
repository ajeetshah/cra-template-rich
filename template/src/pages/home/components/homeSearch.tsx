import React from 'react'
import ReTextInput from '../../../common/formInputs/reTextInput'
import { useForm } from 'react-hook-form'
import { patternCarSearch } from '../../../constants/regExPatterns'
import ReErrorText from '../../../common/texts/reErrorText'
import RePrimaryButton from '../../../common/buttons/rePrimaryButton'
import { placeholderCarSearch } from '../../../constants/placeHolders'
import { errorCarSearchPattern } from '../../../constants/errorMessages'

interface Props {
  onSubmit: (data: FormData) => void
}

export interface FormData {
  searchText: string
}

export default function HomeSearch(props: Props) {
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
        placeholder={placeholderCarSearch}
        refProp={register({ required: false, pattern: patternCarSearch })}
      />

      {errors.searchText && <ReErrorText text={errorCarSearchPattern} />}

      <RePrimaryButton type="button" className="d-none">
        hidden button
      </RePrimaryButton>
    </form>
  )
}
