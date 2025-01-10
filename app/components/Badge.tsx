"use client";

const Badge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className=" px-2 py-1 bg-blue-500 text-white rounded">{text}</div>
  );
};

export default Badge;
