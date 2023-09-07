import { TextField } from "../../elements/TextField/TextField.tsx";
import { useForm, useFormState } from "react-hook-form";
import { FormFields } from "./types.ts";
import { BlockWrapper } from "../../elements/BlockWrapper/BlockWrapper.tsx";
import RegExpConstants from "../../../constants/RegExpConstants.ts";
import Button from "../../elements/Button/Button.tsx";
import PasswordInput from "../../elements/PasswordInput/PasswordInput.tsx";

const SignUp = () => {
  const { control, register, handleSubmit, setError } = useForm<FormFields>({
    reValidateMode: "onBlur",
    mode: "onSubmit",
  });

  const { errors } = useFormState<FormFields>({
    control: control,
  });

  const onSubmit = (data: FormFields) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }
    console.log(data);
  };

  return (
    <BlockWrapper title={"Регистрация"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register("fullName", {
            required: "Поле обязательно для заполнения.",
            maxLength: 50,
            pattern: {
              value: RegExpConstants.fullName,
              message: "Некорректный формат",
            },
          })}
          error={errors.fullName}
          label="Имя Фамилия"
          placeholder="Введите Имя и Фамилию"
        />
        <TextField
          register={register("phoneNumber", {
            required: "Поле обязательно для заполнения.",
            pattern: {
              value: RegExpConstants.phoneNumber,
              message: "Некорректный номер телефона",
            },
          })}
          error={errors.phoneNumber}
          label="Телефон"
          mask="+7(999) 999 99 99"
          placeholder="Введите номер телефона"
        />
        <TextField
          register={register("email", {
            required: "Поле обязательно для заполнения.",
            pattern: {
              value: RegExpConstants.email,
              message: "Некорректный формат",
            },
          })}
          label="Email"
          placeholder="Введите email"
          error={errors.email}
        />

        <PasswordInput
          label={"Придумайте пароль"}
          register={register("password", {
            required: "Поле обязательно для заполнения.",
            maxLength: 8,
            pattern: {
              value: RegExpConstants.password,
              message: "Некорректный формат",
            },
          })}
          type={"password"}
          placeholder="Должно быть 8 символов"
          error={errors.password}
        />
        <PasswordInput
          label={"Повторите пароль"}
          register={register("confirmPassword", {
            required: "Поле обязательно для заполнения.",
            maxLength: 8,
            pattern: {
              value: RegExpConstants.password,
              message: "Некорректный формат",
            },
          })}
          type="password"
          placeholder="Повторите пароль"
          error={errors.confirmPassword}
        />
        <Button
          type={"submit"}
          title={"Регистрация"}
          disabled={Object.keys(errors).length > 0}
        />
      </form>
    </BlockWrapper>
  );
};

export default SignUp;
