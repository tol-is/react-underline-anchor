import { Code } from '../code';
import { AnchorUnderline } from '../anchor-underline';
import { Analytics } from '@vercel/analytics/react';

import styles from './styles.module.css';

const nav = ['React', 'Typescript', 'HTML', 'CSS', 'Animation', 'Underline', 'Navigation'];

const code = `<AnchorUnderline speed={0.5} />`;

export const App = () => {
  return (
    <>
      <Analytics />
      <main className={styles.main}>
        <p>An over-engineered recipe of an animated underline transition.</p>
        <p>
          <Code code={code} language="js" />
        </p>
        <p>
          <AnchorUnderline href="https://github.com/tol-is/react-underline-anchor">
            https://github.com/tol-is/react-underline-anchor
          </AnchorUnderline>
        </p>
        <p>
          Renders staggered entry and exit underline transitions and implements an{' '}
          <AnchorUnderline href="#">abstract speed</AnchorUnderline> prop, that configures the
          relative velocity of the transition. Using CSS custom properies you can further customize
          the underline{' '}
          <AnchorUnderline
            href="#"
            style={
              { '--underline-color': '#00ffcc', '--underline-size': '2px' } as React.CSSProperties
            }
          >
            color
          </AnchorUnderline>
          ,{' '}
          <AnchorUnderline href="#" style={{ '--underline-size': '100%' } as React.CSSProperties}>
            size
          </AnchorUnderline>{' '}
          ,{' '}
          <AnchorUnderline
            href="#"
            style={{ '--underline-position-y': '60%' } as React.CSSProperties}
          >
            position
          </AnchorUnderline>
          ,{' '}
          <AnchorUnderline
            href="#"
            speed={false}
            style={
              {
                '--underline-duration': '3s',
              } as React.CSSProperties
            }
          >
            duration
          </AnchorUnderline>
          , and{' '}
          <AnchorUnderline
            href="#"
            style={
              {
                '--underline-ease-in': 'cubic-bezier(0.16, 1, 0.3, 1)',
                '--underline-ease-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
              } as React.CSSProperties
            }
          >
            transition curve
          </AnchorUnderline>
          .
        </p>

        <p>
          Internally the component, is{' '}
          <AnchorUnderline href="#">
            measuring the length of its text contents, and dynamically computes the animation
            duration,
          </AnchorUnderline>{' '}
          so the transition feels{' '}
          <AnchorUnderline href="#">consistent across applications</AnchorUnderline>, within
          paragraphs, or standalone navigation links.
        </p>

        <ul className={styles.nav_list}>
          {nav.map((item, index) => (
            <li key={index}>
              <AnchorUnderline href="#">{item}</AnchorUnderline>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
