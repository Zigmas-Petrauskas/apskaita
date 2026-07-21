const formatUserName = (name) => {
  if (!name) {
    return "";
  }

  /*
    Lietuviško vardo pašauksmas:

    Zigmas -> Zigmai
    Jonas  -> Jonai
    Tomas  -> Tomai

    Miglė -> Migle
  */

  if (name.endsWith("as")) {
    return `${name.slice(0, -2)}ai`;
  }

  if (name.endsWith("ė")) {
    return `${name.slice(0, -1)}e`;
  }

  return name;
};

export default formatUserName;
