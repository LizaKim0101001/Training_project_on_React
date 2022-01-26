import React from "react";
import { VisuallyHiddenInput, Label } from "/src/styled";

function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked} onClick={() => onClick(value)}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
