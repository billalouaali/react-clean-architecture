import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function UserInputField({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Rechercher un utilisateur"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}