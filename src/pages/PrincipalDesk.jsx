const PrincipalDesk = () => {
  return (
    <div className="max-w-6xl p-2 mx-auto">
      <div className="items-center justify-center block gap-2 m-6 shadow-sm md:flex item shadow-slate-300">
        <div className="flex-1 p-2 image">
          <img
            src="./Principal.jpg"
            alt="principal"
            className="rounded-md shadow-md"
          />
        </div>
        <div className="flex-1 text-[14px] md:text-xl content p-2">
          Our endeavour is to inspire and empower our students to meet the
          challenges of this world. This school has its own reputation for
          providing mordern education while keeping in pace with the
          preservation of our cultural values.
          <br />
          <strong>Mrs. K. DHAWAN</strong>
          <p>
            <em>Principal, MP Middle School</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
