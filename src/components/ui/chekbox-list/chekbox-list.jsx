import React from "react";
import Checkbox from "../checkbox/checkbox";
import { Ul, Li } from "/src/styled";

export default function CheckboxList({
  labelComponent,
  options,
  selectValues,
  onChange,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  console.log(options[0].title);

  return (
    <Ul>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            value={option.value}
            text={option.text}
            onChange={handleChange}
            onClick={(value) => onClickLabel(value, index)}
          />
        </Li>
      ))}
    </Ul>
  );
}
