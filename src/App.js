import React from "react";
import { useForm } from "react-hook-form";

import FieldArray from "./fieldArray";

export default function App() {
  const {
    setError,
    clearErrors,
    formState: { errors },
    watch,
    control
  } = useForm();

  return (
    <div>
      <FieldArray
        control={control}
        watch={watch}
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
    </div>
  );
}
