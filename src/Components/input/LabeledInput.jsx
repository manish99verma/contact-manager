const LabeledInput = ({ label, inputId, value, onChange }) => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <label
        className="absolute left-3 -top-4 px-2 py-[1px] bg-slate-100 font-medium text-lg text-[#0067a8]"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full h-12 rounded-xl px-4 border-2 border-gray-700 focus:border-[#0067a8] focus:border-3"
        id={inputId}
        name={label}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledInput;
