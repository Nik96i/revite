import type { ReactElement, ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export default function AppLayout({ children }: Props): ReactElement {
  return (
    <div>
      <p>App Layout</p>
      { children }
    </div>
  );
}
