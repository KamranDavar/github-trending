import React, { FC } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { dateRange, programmingLanguages, spokenLanguages } from "../utilities/staticData";

type propsType = any

export const ValidateParams: FC<propsType> = ({ children }) => {

  const { language } = useParams();
  const [searchParams] = useSearchParams();

  const since = searchParams.get("since");
  const spokenLanguage = searchParams.get("spoken_language_code");

  // console.log({ language, since, spokenLanguage });

  const isValidLang = !language || programmingLanguages.some(item => item.value === language);
  const isValidSlang = !spokenLanguage || spokenLanguages.some(item => item.value === spokenLanguage);
  const isValidSince = !since || dateRange.some(item => item.value === since);

  if (!isValidLang || !isValidSlang || !isValidSince) {
    return <Navigate to="/" replace />;
  }

  return children;
};