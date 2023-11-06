const TechSkill: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
        {skill}
      </div>
    </li>
  );
};

export default TechSkill;
