import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface IFormProps {
  onFormSubmit : (event: React.FormEvent) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

export const Form: React.FunctionComponent<IFormProps> = ({ onFormSubmit, children }) => (
  <form onSubmit={onFormSubmit}>{children}</form>
);
