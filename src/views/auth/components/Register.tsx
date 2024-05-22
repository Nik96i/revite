import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Register(): ReactElement {
  const { t } = useTranslation("auth");

  return <div>{ t("register.register") }</div>;
}
