import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Users(): ReactElement {
  const { t } = useTranslation("users");

  return <div>{ t("users") }</div>;
}
