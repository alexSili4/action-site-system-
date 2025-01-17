import { FC } from 'react';
import { IProps } from './RegisterCodeForm.types';
import {
  Form,
  Content,
  InputWrap,
  LabelWrap,
  Label,
  InputDelimiterWrap,
  InputDelimiter,
  RegisterFormCheckboxTitle,
  RegisterFormCheckboxLink,
  AcceptedTermsWrap,
  CodeInputWrap,
} from './RegisterCodeForm.styled';
import { useRegisterCodeForm } from '@/hooks';
import { InputPlaceholders } from '@/constants';
// components
import CodePartInput from '@RegisterCodePageComponents/CodePartInput';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';
import RegisterFormCheckbox from '@RegisterCodePageComponents/RegisterFormCheckbox';
import ErrorMessage from '@RegisterCodePageComponents/ErrorMessage';

const RegisterCodeForm: FC<IProps> = ({
  onSuccessRegisterCode,
  rulesPdf,
  updatePromotion,
}) => {
  const {
    handleFormSubmit,
    register,
    handleSubmit,
    inputWrapRef,
    isError,
    onRegCodeInput,
    inputMaxLength,
    error,
    disabledBtn,
    defaultCodePart1,
    defaultCodePart2,
    defaultCodePart3,
  } = useRegisterCodeForm({ onSuccessRegisterCode, updatePromotion });

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <CodeInputWrap>
          <InputWrap ref={inputWrapRef} isError={isError}>
            <LabelWrap>
              <Label>Код з чеку</Label>
            </LabelWrap>
            <CodePartInput
              onChange={onRegCodeInput}
              maxLength={inputMaxLength}
              placeholder={InputPlaceholders.regCode}
              defaultValue={defaultCodePart1}
              settings={{
                ...register('codePart1', {
                  required: true,
                  maxLength: inputMaxLength,
                }),
              }}
            />
            <InputDelimiterWrap isError={isError}>
              <InputDelimiter />
            </InputDelimiterWrap>
            <CodePartInput
              onChange={onRegCodeInput}
              maxLength={inputMaxLength}
              placeholder={InputPlaceholders.regCode}
              defaultValue={defaultCodePart2}
              settings={{
                ...register('codePart2', {
                  required: true,
                  maxLength: inputMaxLength,
                }),
              }}
            />
            <InputDelimiterWrap isError={isError}>
              <InputDelimiter />
            </InputDelimiterWrap>
            <CodePartInput
              onChange={onRegCodeInput}
              maxLength={inputMaxLength}
              placeholder={InputPlaceholders.regCode}
              defaultValue={defaultCodePart3}
              settings={{
                ...register('codePart3', {
                  required: true,
                  maxLength: inputMaxLength,
                }),
              }}
            />
          </InputWrap>
          {error && <ErrorMessage message={error} />}
        </CodeInputWrap>
        <AcceptedTermsWrap>
          <RegisterFormCheckbox
            settings={{
              ...register('acceptedTerms'),
            }}
          >
            <RegisterFormCheckboxTitle>
              Погоджуюсь з{' '}
              <RegisterFormCheckboxLink
                href={rulesPdf}
                download='rules'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                умовами участі
              </RegisterFormCheckboxLink>{' '}
              в акції
            </RegisterFormCheckboxTitle>
          </RegisterFormCheckbox>
        </AcceptedTermsWrap>
      </Content>
      <SubmitRegFormBtn title='Продовжити' disabled={disabledBtn} />
    </Form>
  );
};

export default RegisterCodeForm;
