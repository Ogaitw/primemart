import React, { useState } from 'react';

interface IDatePickerProps {
  onDateChange?: (date: Date) => void;
  initialDate?: Date;
  name: string;
  label: string;
}

const DatePicker: React.FC<IDatePickerProps> = ({ onDateChange, initialDate, name, label }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
