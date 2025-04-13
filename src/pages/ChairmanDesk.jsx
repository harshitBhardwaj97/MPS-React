const ChairmanDesk = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Founder Chairman Section */}
      <div
        className="flex flex-col md:flex-row gap-6 mb-8 p-4 shadow-lg bg-white rounded-lg border-l-4 border-purpleDark">
        {/* Image Section */}
        <div className="flex-1 p-4">
          <img
            src="./ChairMan.jpg"
            alt="Chairman"
            className="w-full rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 text-base md:text-lg">
          <p
            className="italic text-xl font-semibold mb-4 cursor-pointer hover:border-b-2 hover:border-black duration-150 ease-linear">
            Blessings from Our Founder Chairman Sir
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Our dedicated staff takes a genuine interest in each child, committing to their future success by offering
              challenging programs that foster individual growth, achievement, leadership, and teamwork. Together with
              students
              and parents, we create personalized learning plans focused on clear goals for achievement.
            </li>
            <li>
              Students are encouraged to actively participate in their learning process and take responsibility for
              their progress.
              Our teachers design lessons that incorporate diverse learning styles, group work, communication, and
              critical thinking
              to promote deep understanding.
            </li>
            <li>
              Together with students and parents, we create personalized learning plans focused on clear goals for
              achievement.
            </li>
          </ul>
          <div className="mt-6">
            <strong className="text-lg">DR. R.P. MALIK</strong>
            <p className="text-sm text-gray-600 mt-1">
              <em>Founder Chairman, Lovely Group Of Schools</em>
            </p>
          </div>
        </div>
      </div>

      {/* Chairperson Section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 shadow-lg bg-white rounded-lg border-l-4 border-purpleDark">
        {/* Image Section */}
        <div className="flex-1 p-4">
          <img
            src="./ChairPerson.jpg"
            alt="Chairperson"
            className="w-full rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 text-base md:text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Dr. (Mrs.) S.D. Malik, Chairperson of Lovely Group of Schools, is widely respected for her foresight and
              pragmatic
              approach to education. She firmly believes that every child has untapped potential, which must be nurtured
              to bring out
              the best in them. Dr. Malik ensures that every student has ample opportunities to explore and participate
              in various
              activities, promoting 100% involvement in all areas. For her, the pursuit of knowledge knows no bounds.
            </li>
            <li>
              Her humble nature is one of her greatest strengths. As a director, she handles her responsibilities with
              great
              efficiency, always striving to provide quality education. She is dedicated to shaping the future
              generation into dynamic
              individuals. Recognizing the importance of global education, she frequently visits schools abroad to stay
              updated on
              the latest educational practices. Dr. Malik has been honored with numerous State Awards by the Government
              for her
              excellence in education and was recently presented with a Lifetime Achievement Award by the State and
              National
              Teachers Association of Delhi.
            </li>
          </ul>
          <div className="mt-6">
            <strong className="text-lg">Dr. (Mrs.) S.D. Malik</strong>
            <p className="text-sm text-gray-600 mt-1">
              <em>Chairperson, Lovely Group Of Schools</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanDesk;
