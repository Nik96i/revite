import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Home(): ReactElement {
  const { t } = useTranslation("home");

  return (
    <div>
      { t("home.home") }
    </div>
  );
}
