declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  // eslint-disable-next-line import/no-default-export
  export default ReactComponent;
}
