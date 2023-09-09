interface TextBoxProps {
  title?: string;
}
export default function TextBox({ title }: TextBoxProps) {
  return (
    <div className={`bg-primaryColor text-white px-4 py-2 text-center`}>
      <span className=" text-sm font-medium">{title}</span>
    </div>
  );
}
