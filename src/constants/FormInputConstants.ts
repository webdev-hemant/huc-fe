export interface IFormInputConstant {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  value: "name" | "mobile" | "email" | "collegeName" | "yearOfStudy";
  isError:
    | "nameError"
    | "mobileError"
    | "emailError"
    | "collegeNameError"
    | "yearOfStudyError";
}

export const FormInputConstants: IFormInputConstant[] = [
  {
    type: "text",
    name: "name",
    value: "name",
    placeholder: "Enter your name",
    label: "Full name",
    isError: "nameError",
  },
  {
    type: "text",
    name: "mobile",
    value: "mobile",
    placeholder: "Enter your mobile number",
    label: "Mobile number",
    isError: "mobileError",
  },
  {
    type: "text",
    name: "email",
    value: "email",
    placeholder: "Enter your email",
    label: "Email address",
    isError: "emailError",
  },
  {
    type: "text",
    name: "collegeName",
    value: "collegeName",
    placeholder: "Enter college name",
    label: "College name",
    isError: "collegeNameError",
    errorMessage: "*Please enter college name",
  },
  {
    type: "text",
    name: "yearOfStudy",
    value: "yearOfStudy",
    placeholder: "Enter highest qualification",
    label: "Year of study / Highest qualification",
    isError: "yearOfStudyError",
    errorMessage: "*Please enter highest qualification",
  },
];
