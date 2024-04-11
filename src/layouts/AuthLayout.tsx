import type { ReactElement } from "react";

interface Props {
  readonly children: ReactElement;
}

export default function AuthLayout({ children }: Props): ReactElement {
  return (
    <div>
      <p>Auth Layout</p>
      { children }
    </div>
  );
}
