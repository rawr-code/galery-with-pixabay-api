interface ClassNamesObject {
  [key: string]: boolean;
}

const ClassNames = (classNames: ClassNamesObject): string => {
  return Object.keys(classNames)
    .filter((key) => classNames[key])
    .join(" ");
};

export default ClassNames;
