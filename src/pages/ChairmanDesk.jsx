const ChairmanDesk = () => {
  return (
    <div className="max-w-6xl p-2 mx-auto">
      <div className="items-center justify-center block gap-2 m-6 shadow-sm md:flex item shadow-slate-300">
        <div className="flex-1 p-2 image">
          <img
            src="./ChairMan.jpg"
            alt="chairman"
            className="rounded-md shadow-md"
          />
        </div>
        <div className="flex-1 text-[14px] md:text-xl content p-2">
          <p className="italic cursor-pointer">
            <span className="transition-all duration-100 ease-in-out hover:border-b-[1px] hover:border-black">
              Blessings from Our Founder Chairman Sir
            </span>
          </p>
          Our dedicated staff takes a very real interest in all children and are
          committed to each child's future success by providing challenging
          programs that promote individual growth and achievement leadership
          with co-operation with others.
          <br />
          <strong>DR. R.P. MALIK</strong>
          <p>
            <em>Founder Chairman, Lovely Group Of Schools</em>
          </p>
        </div>
      </div>
      <div className="items-center justify-center block gap-2 m-3 shadow-sm shadow-slate-300 md:flex item">
        <div className="flex-1 p-2 image">
          <img
            src="./ChairPerson.jpg"
            alt="chairperson"
            className="rounded-md"
          />
        </div>
        <div className="flex-1 text-[14px] md:text-xl content p-2">
          A dream of many ideas coming together with great passion and
          opportunity released, is how our institution was born. Our aim is to
          build independent entity of students and staff in all aspects of
          teaching and learning.
          <br />
          <strong>Dr. (Mrs.) S.D. Malik </strong>
          <p>
            <em>Chairperson, Lovely Group Of Schools</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanDesk;
