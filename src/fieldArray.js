import React from "react";
import { useFieldArray } from "react-hook-form";

import FieldArrayTable from "./fieldArrayTable";
import FieldArrayController from "./fieldArrayController";

const FieldArray = ({ control, watch, clearErrors, setError, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  const {
    fields: secFields,
    append: secAppend,
    remove: secRemove
  } = useFieldArray({
    control,
    name: "secTest"
  });

  function addField() {
    if (secFields.length) {
      clearErrors("test");
    }
    append({
      type: ""
    });
  }

  function removeField(index) {
    remove(index);
  }

  function addSecField() {
    if (!fields.length) {
      setError("test", {
        type: "requier",
        message: "You should append a main fields."
      });
    }
    secAppend({
      type: ""
    });
  }

  function removeSecField(index) {
    secRemove(index);
    clearErrors("test");
  }

  return (
    <div>
      <FieldArrayController
        control={control}
        fields={fields}
        fieldName="test"
        handleRemove={removeField}
        handleAdd={addField}
      />
      <FieldArrayController
        control={control}
        fields={secFields}
        fieldName="secTest"
        handleRemove={removeSecField}
        handleAdd={addSecField}
        errors={errors}
      />
      <FieldArrayTable fields={fields} secFields={secFields} watch={watch} />
    </div>
  );
};

export default FieldArray;
