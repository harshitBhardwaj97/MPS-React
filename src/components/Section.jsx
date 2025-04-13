// eslint-disable-next-line react/prop-types
const Section = ({icon, title, children}) => (
  <div className="mb-10 bg-white p-6 rounded-lg border-l-4 border-purpleDark shadow-md">
    <h2 className="text-2xl font-bold text-purpleDark mb-4 flex items-center gap-3">
      {icon}
      {title}
    </h2>
    <div className="text-[17px] leading-relaxed text-gray-700">{children}</div>
  </div>
);

export default Section;