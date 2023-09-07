const RegExpConstants = {
  email:
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  phoneNumber: /^\+?[\s()0-9-]{5,}$/,
  fullName: /^.{1,50}$/,
  password: /^.{1,8}$/,
};

export default RegExpConstants;
