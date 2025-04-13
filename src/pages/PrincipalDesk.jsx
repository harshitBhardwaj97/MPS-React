const PrincipalDesk = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Principal Section */}
      <div
        className="flex flex-col md:flex-row gap-6 mb-8 p-4 shadow-lg bg-white rounded-lg border-l-4 border-purpleDark">
        {/* Image Section */}
        <div className="flex-1 p-4">
          <img
            src="./Principal.jpg"
            alt="Principal"
            className="w-full rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 text-base md:text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              In today’s world of globalization and technology, communication, collaboration, and creativity are crucial
              skills.
              The world is undergoing a major transformation, with ideas, cultures, and innovations flowing across
              borders.
            </li>
            <li>
              Our school is dedicated to inspiring and empowering students to navigate the challenges of this global
              era. We focus
              on nurturing independent thinking and reasoning skills in our young learners. While embracing modern
              education, we
              also prioritize the preservation of cultural values, ensuring a blend of progress and tradition.
            </li>
            <li>
              We recognize that challenges and opportunities go hand in hand. At our school, we provide students with
              the essential
              skills, critical thinking, and analytical abilities needed to stay focused and achieve their goals in an
              ever-evolving
              world.
            </li>
          </ul>
          <div className="mt-6">
            <strong className="text-lg">Mrs. K. DHAWAN</strong>
            <p className="text-sm text-gray-600 mt-1">
              <em>Principal, MP Middle School</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
