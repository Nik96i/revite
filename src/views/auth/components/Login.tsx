import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Login(): ReactElement {
  const { t } = useTranslation("auth");

  return <div>{ t("login.login") }</div>;
}
