import React, { createContext } from "react";
import { useFieldArray } from "react-hook-form";

import FieldArrayTable from "./fieldArrayTable";
import FieldArrayController from "./fieldArrayController";

export const Context = createContext({});

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
      setError("secTest", {
        type: "required",
        message: "You should append a main fields."
      });
      return;
    }
    secAppend({
      type: ""
    });
  }

  function removeSecField(index) {
    secRemove(index);
    clearErrors("test");
  }

  const value = {
    control,
    errors,
    fields,
    secFields,
    watch,
    addField,
    removeField,
    addSecField,
    removeSecField
  };

  return (
    <div>
      <Context.Provider value={value}>
        <FieldArrayController fieldName="test" />
        <FieldArrayController fieldName="secTest" />
        <FieldArrayTable />
      </Context.Provider>
    </div>
  );
};

export default FieldArray;
