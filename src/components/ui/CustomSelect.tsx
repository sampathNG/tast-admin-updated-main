"use client";
import { Select } from "antd";
import React, { useState } from "react";

type IOption = {
  value: string;
  label: string;
};
interface TCustomSelect {
  placeholder: string;
  options: IOption[];
  disabled?: boolean;
}

const CustomSelect = ({ placeholder, options, disabled }: TCustomSelect) => {
  const selectValue = (value: string) => {
    console.log(value);
  };
  return (
    <Select
      placeholder={placeholder || "Please Select"}
      style={{ width: "100%" }}
      options={options}
      onChange={selectValue}
      size="large"
      disabled={disabled}
    />
  );
};

export default CustomSelect;
