import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function NotFound(): ReactElement {
  const { t } = useTranslation("notFound");

  return <div>{ t("notFound") }</div>;
}
